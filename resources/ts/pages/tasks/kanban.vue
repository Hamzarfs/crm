<script setup lang="ts">
import { useAuthStore } from '@/@core/stores/auth';


const $toast = useToast()

const authStore = useAuthStore()

const userData = authStore.user

const toggleAssignedToMe = ref(true)
const assignedToMe = ref('yes')

watch(toggleAssignedToMe, newValue => {
    assignedToMe.value = newValue ? 'yes' : 'no'
})

// Selected task to edit
const selectedTask = ref<Record<string, any>>({})
let taskToDelete: number

// Add a ref for the AddNewTaskDrawer, editTaskDrawerRef & viewTaskDrawerRef component
const addNewTaskDrawerRef = ref()
const editTaskDrawerRef = ref()
const viewTaskDrawerRef = ref()

const query = computed(() => userData?.role.value === 'team_lead' ? { assignedToMe } : {})

// 👉 Fetching tasks
const { data: tasksByStatusData, execute: fetchTasksByStatus } = await useApi<any>(createUrl('tasks/kanban', { query }))

const tasksByStatus = ref(tasksByStatusData.value.tasksByStatus)

window.Echo.private(`Task.Assigned.${userData?.id}`)
    .notification((notification: any) => {
        tasksByStatus.value[notification.task.status].unshift(notification.task)
    })

watch(tasksByStatusData, (newVal) => {
    tasksByStatus.value = newVal.tasksByStatus
})

const statuses = [
    {
        title: 'Pending',
        value: 'pending'
    },
    {
        title: 'In Progress',
        value: 'in_progress'
    },
    {
        title: 'Completed',
        value: 'completed'
    },
]

const users = ref([])
const departments = ref([])

if (userData?.role.value === 'admin' && userData.department.value === 'admin') {
    users.value = await $api('users')
        .then(({ users }) => users.map((u: any) => ({ title: u.name, value: u.id })))
    departments.value = await $api('departments')
        .then(({ departments }) => departments.map((d: any) => ({ title: d.title, value: d.id })))
} else if (userData?.role.value === 'team_lead') {
    users.value = await $api('users', {
        query: {
            'departments[]': [userData.department.value],
        }
    }).then(({ users }) => users.map((u: any) => ({ title: u.name, value: u.id })))
}

const resolveTaskStatusColor = (status: string): string => {
    switch (status) {
        case 'completed':
            return 'success'
        case 'in_progress':
            return 'info'
        default:
            return 'error'
    }
}

const isAddNewTaskDrawerVisible = ref(false)
const isEditTaskDrawerVisible = ref(false)
const isViewTaskDrawerVisible = ref(false)
const isDeleteDialogVisible = ref(false)

const errors = ref({
    title: undefined,
    description: undefined,
    deadline: undefined,
    assigned_to: undefined,
    files: [],
    status: undefined,
    comment: undefined,
})

// 👉 Add new task
const addNewTask = async (taskData: FormData) => {
    const { success, message } = await $api('tasks', {
        method: 'POST',
        body: taskData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    addNewTaskDrawerRef.value.closeNavigationDrawer()
    if (success) {
        $toast.success(message)
        fetchTasksByStatus()
    } else
        $toast.error(message ?? 'Something went wrong. Plz try again or contact support.')
}

// 👉 Add comment
const addComment = async (commentData: FormData) => {
    const { success, message, comment } = await $api(`tasks/${selectedTask.value.id}/comments`, {
        method: 'POST',
        body: commentData,
    })

    if (success) {
        $toast.success(message)
        selectedTask.value.comments.push(comment)
        viewTaskDrawerRef.value.commentForm.reset()
    } else
        $toast.error(message ?? 'Something went wrong. Plz try again or contact support.')
}

const deleteComment = async (commentIndex: number) => {
    const comment = selectedTask.value.comments[commentIndex]

    const { success, message } = await $api(`tasks/comments/${comment.id}`, {
        method: 'DELETE',
        onResponseError({ response }) {
            console.error(response._data.message)
            $toast.error("Something went wrong! Please try again or contact support.")
        },
    })

    if (success) {
        $toast.success(message)
        selectedTask.value.comments.splice(commentIndex, 1)
    } else
        $toast.error(message ?? "Something went wrong! Please try again or contact support.")
}

const updateTaskStatus = async ({ id, status, newStatus }: { id: number, status: string, newStatus: string }) => {
    if (status !== newStatus) {
        const { success, message } = await $api(`tasks/${id}/status`, {
            method: 'PATCH',
            body: { status: newStatus },
            onResponseError({ response }) {
                console.error(response._data.message)
                $toast.error("Something went wrong! Please try again or contact support.")
            },
        })

        if (success) {
            $toast.success(message)
            fetchTasksByStatus()
                .then(r => r.json())
                .then(({ tasksByStatus }) => {
                    let task
                    for (const status in tasksByStatus) {
                        if (Object.prototype.hasOwnProperty.call(tasksByStatus, status)) {
                            const tasks = tasksByStatus[status];
                            task = tasks.find((t: any) => t.id === id)
                            if (task) break
                        }
                    }
                    selectedTask.value = task
                    return { tasksByStatus }
                })
        } else
            $toast.error(message ?? "Something went wrong! Please try again or contact support.")
    }
}

provide('openEditTaskDrawer', (task: any) => {
    selectedTask.value = task
    isEditTaskDrawerVisible.value = true
})

provide('openDeleteTaskDialog', (taskId: number) => {
    taskToDelete = taskId
    isDeleteDialogVisible.value = true
})

// 👉 Edit task
const editTask = async (taskData: any) => {
    const { success, message } = await $api(`tasks/${taskData.id}`, {
        method: 'PUT',
        body: taskData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    editTaskDrawerRef.value.closeNavigationDrawer()
    if (success) {
        $toast.success(message)
        fetchTasksByStatus()
    } else
        $toast.error(message ?? 'Something went wrong. Plz try again or contact support.')
}

// 👉 Delete task
const deleteTask = async () => {
    const { success, message } = await $api(`tasks/${taskToDelete}`, {
        method: 'DELETE',
    })

    isDeleteDialogVisible.value = false

    if (success) {
        $toast.success(message)
        fetchTasksByStatus()
    } else
        $toast.error(message ?? 'Something went wrong. Plz try again or contact support.')
}

watch([isEditTaskDrawerVisible, isViewTaskDrawerVisible], ([editDrawer, viewDrawer]) => {
    if (!editDrawer && !viewDrawer)
        selectedTask.value = {}
})

</script>



<template>
    <template v-if="['admin', 'team_lead'].includes(userData?.role.value)">
        <VRow align="center" justify="space-between" class="mb-1">
            <!-- 👉 Toggle Assigned to me or assigned by me (only for team_lead role) -->
            <VCol cols="2">
                <VSwitch v-if="userData?.role.value === 'team_lead'" v-model="toggleAssignedToMe" :inset="false"
                    :label="toggleAssignedToMe ? 'Assigned to me' : 'Assigned by me'" />
            </VCol>

            <VCol cols="2" class="text-end">
                <VBtn @click="isAddNewTaskDrawerVisible = true" prepend-icon="ri-task-fill">
                    Add New Task
                </VBtn>
            </VCol>
        </VRow>
    </template>

    <!-- Kanban -->
    <div class="kanban-main-wrapper d-flex gap-4 h-100 mt-3">
        <!-- 👉 kanban render  -->
        <div class="d-flex ga-4">
            <template v-for="(tasks, status) in tasksByStatus" :key="status">
                <!-- 👉 kanban render -->
                <TaskKanbanItem :board-name="(statuses.find((s: any) => s.value === status)?.title as string)"
                    :board-id="status" :kanban-items="(tasks as Record<string, any>[])" class="me-4"
                    @update-task-status="updateTaskStatus"
                    @select-task-to-view="(task) => { selectedTask = task; isViewTaskDrawerVisible = true }" />
            </template>
        </div>

    </div>

    <!-- 👉 Add New Task -->
    <AddNewTaskDrawer v-if="['admin', 'team_lead'].includes(userData?.role.value)"
        v-model:isDrawerOpen="isAddNewTaskDrawerVisible" @task-data="addNewTask" :users="users" :statuses="statuses"
        ref="addNewTaskDrawerRef" :errors="errors" />

    <!-- 👉 View Task -->
    <ViewTaskDrawer v-model:isDrawerOpen="isViewTaskDrawerVisible" :task="selectedTask" :statuses="statuses"
        :resolveTaskStatusColor="resolveTaskStatusColor" :errors="errors" ref="viewTaskDrawerRef"
        @comment-data="addComment" @status-update="updateTaskStatus" @delete-comment="deleteComment" />

    <!-- 👉 Edit Task -->
    <EditTaskDrawer v-if="['admin', 'team_lead'].includes(userData?.role.value)"
        v-model:isDrawerOpen="isEditTaskDrawerVisible" @task-data="editTask" :users="users" :statuses="statuses"
        :task="selectedTask" ref="editTaskDrawerRef" :errors="errors" />

    <VDialog v-model="isDeleteDialogVisible" width="400">
        <VCard title="Confirmation" class="pb-5">
            <DialogCloseBtn variant="text" size="default" @click="isDeleteDialogVisible = false" />

            <VCardText>
                Are you sure you want to delete this task?
            </VCardText>

            <VCardText class="d-flex align-center justify-center gap-4">
                <VBtn variant="elevated" @click="deleteTask()" color="error">
                    Confirm
                </VBtn>

                <VBtn color="secondary" variant="outlined" @click="isDeleteDialogVisible = false">
                    Cancel
                </VBtn>
            </VCardText>
        </VCard>
    </VDialog>

</template>

<style lang="scss">
@use "@styles/variables/_vuetify.scss" as vuetify;

.kanban-main-wrapper {
    overflow: auto hidden;
    margin-inline-start: -0.6rem;
    // min-block-size: calc(100vh - 10.5rem);
    padding-inline-start: 0.6rem;

    .kanban-board {
        inline-size: 16.875rem;
        min-inline-size: 16.875rem;

        .kanban-board-drop-zone {
            min-block-size: 100%;
        }
    }

    .add-new-form {
        .v-field__field {
            border-radius: vuetify.$border-radius-root;
            background-color: rgb(var(--v-theme-surface));
        }
    }
}
</style>

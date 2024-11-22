<script setup lang="ts">



const $toast = useToast()

// Get currently logged in user data
const userData = useCookie('userData').value

// Filter values
// const searchQuery = ref('')
// const selectedUser = ref()
// const selectedDepartment = ref()
// const selectedDate = ref()
// const selectedStatus = ref()
const toggleAssignedToMe = ref(true)
const assignedToMe = ref('yes')

watch(toggleAssignedToMe, newValue => {
    assignedToMe.value = newValue ? 'yes' : 'no'
})

// Selected task to edit
const selectedTask = ref<Record<string, any>>({})
let taskToDelete: number

// Data table options
// const itemsPerPage = ref(20)
// const page = ref(1)
// const sortBy = ref('id')
// const orderBy = ref<boolean | 'asc' | 'desc'>('desc')
// const selectedRows = ref([])

const tableLoading = ref(false)

// Add a ref for the AddNewTaskDrawer, editTaskDrawerRef & viewTaskDrawerRef component
const addNewTaskDrawerRef = ref()
const editTaskDrawerRef = ref()
const viewTaskDrawerRef = ref()

// Update data table options
// const updateOptions = (options: any) => {
//     sortBy.value = options.sortBy[0]?.key
//     orderBy.value = options.sortBy[0]?.order
// }

// Headers
// const headers = [
//     { title: 'ID', key: 'id' },
//     { title: 'Title', key: 'title' },
//     { title: 'Status', key: 'status' },
//     { title: 'Department', key: 'department', sortable: false, showToOnly: ['admin'] },
//     { title: 'Assigned To', key: 'assigned_to', sortable: false, showToOnly: ['admin', 'team_lead'] },
//     { title: 'Deadline', key: 'deadline' },
//     { title: 'Created By', key: 'created_by', sortable: false, showToOnly: ['admin'] },
//     { title: 'Creation Date', key: 'created_at' },
//     { title: 'Last Updated', key: 'updated_at' },
//     { title: 'Actions', key: 'actions', sortable: false },
// ]

// const _headers = computed(() => headers.filter(h => h.showToOnly ? (h.showToOnly.includes(userData.role.value)) : h))

const query = computed(() => {
    const query: any = {
        // q: searchQuery,
        // user: selectedUser,
        // department: selectedDepartment,
        // date: selectedDate,
        // status: selectedStatus,
        // itemsPerPage,
        // page,
        // sortBy,
        // orderBy,
    }
    if (userData.role.value === 'team_lead')
        query.assignedToMe = assignedToMe

    return query
})

// 👉 Fetching tasks
const { data: tasksByStatusData, execute: fetchTasksByStatus, isFetching } = await useApi<any>(createUrl('tasks/kanban', { query }))
// const { data: { value: { tasksByStatus: _tasksByStatus } }, execute: fetchTasksByStatus, isFetching } = await useApi<any>(createUrl('tasks/kanban', { query }))
// const { data: tasksData, execute: fetchTasks, isFetching } = await useApi<any>(createUrl('tasks', { query }))

// Watch isFetching from the useApi to toggle tableLoading
watch(() => isFetching.value, (newValue) => {
    tableLoading.value = newValue
}, { immediate: true })

const tasksByStatus = ref(tasksByStatusData.value.tasksByStatus)
// const totalTasks = computed(() => tasksData.value.totalTasks)

watch(tasksByStatusData, (newVal) => {
    tasksByStatus.value = newVal.tasksByStatus

    console.log(tasksByStatus.value);

})

// const [refParentStatus, tasksByStatus] = useDragAndDrop(_tasksByStatus.value, {
//     sortable: false,
//     plugins: [animations()]
// })

// console.log(tasksByStatus.value);


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

if (userData.role.value === 'admin' && userData.department.value === 'admin') {
    users.value = await $api('users')
        .then(({ users }) => users.map((u: any) => ({ title: u.name, value: u.id })))
    departments.value = await $api('departments')
        .then(({ departments }) => departments.map((d: any) => ({ title: d.title, value: d.id })))
} else if (userData.role.value === 'team_lead') {
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
// const isSnackBarVisible = ref(false)
// const taskResponsemessage = ref('')

// 👉 Add new task
const addNewTask = async (taskData: FormData) => {
    const { success, message } = await $api('tasks', {
        method: 'POST',
        body: taskData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    // isSnackBarVisible.value = true
    // taskResponsemessage.value = message
    addNewTaskDrawerRef.value.closeNavigationDrawer()
    if (success) {
        $toast.success(message)
        // fetchTasks()
    } else
        $toast.error(message ?? 'Something went wrong. Plz try again or contact support.')
}

// 👉 Edit task
const editTask = async (taskData: any) => {
    const { success, message } = await $api(`tasks/${taskData.id}`, {
        method: 'PUT',
        body: taskData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    // isSnackBarVisible.value = true
    // taskResponsemessage.value = message
    editTaskDrawerRef.value.closeNavigationDrawer()
    if (success) {
        $toast.success(message)
        // fetchTasks()
    } else
        $toast.error(message ?? 'Something went wrong. Plz try again or contact support.')
}

// 👉 View task
const viewTask = (task: any) => {
    selectedTask.value = task
    isViewTaskDrawerVisible.value = true
}

// 👉 Delete task
const deleteTask = async () => {
    const { success, message } = await $api(`tasks/${taskToDelete}`, {
        method: 'DELETE',
    })

    isDeleteDialogVisible.value = false

    // isSnackBarVisible.value = true
    // taskResponsemessage.value = message
    if (success) {
        // fetchTasks()
        $toast.success(message)
    } else
        $toast.error(message ?? 'Something went wrong. Plz try again or contact support.')
}

// 👉 Add comment
const addComment = async (commentData: FormData) => {
    const { success, message, comment } = await $api(`tasks/${selectedTask.value.id}/comments`, {
        method: 'POST',
        body: commentData,
    })

    // isSnackBarVisible.value = true
    // taskResponsemessage.value = message
    if (success) {
        $toast.success(message)
        selectedTask.value.comments.push(comment)
        viewTaskDrawerRef.value.commentForm.reset()
    } else
        $toast.error(message ?? 'Something went wrong. Plz try again or contact support.')
}

const openEditTaskForm = (task: any) => {
    selectedTask.value = task
    isEditTaskDrawerVisible.value = true
}

const errors = ref({
    title: undefined,
    description: undefined,
    deadline: undefined,
    assigned_to: undefined,
    files: [],
    status: undefined,
    comment: undefined,
})

const handleStatusUpdate = async ({ id, status }: { id: number, status: string }) => {
    const task = tasksByStatus.value.find((t: any) => t.id === id) as any

    if (task.status !== status) {
        const { success, message } = await $api(`tasks/${id}/status`, {
            method: 'PATCH',
            body: { status },
            onResponseError({ response }) {
                console.error(response._data.message)
                $toast.error('Something went wrong. Plz try again or contact support.')
                // isSnackBarVisible.value = true
                // taskResponsemessage.value = "Something went wrong! Please try again."
            },
        })

        // isSnackBarVisible.value = true
        // taskResponsemessage.value = message
        if (success) {
            $toast.success(message)
            task.status = status
        } else
            $toast.error(message ?? 'Something went wrong. Plz try again or contact support.')
    }
}

const isTasksActionBtnsDisable = (taskCreatorId: number): boolean => (tableLoading.value || !(userData.role.value === 'admin' || taskCreatorId === userData.id))

const deleteComment = async (commentIndex: number) => {
    const comment = selectedTask.value.comments[commentIndex]

    const { success, message } = await $api(`tasks/comments/${comment.id}`, {
        method: 'DELETE',
        onResponseError({ response }) {
            console.error(response._data.message)
            $toast.error('Something went wrong. Plz try again or contact support.')
            // isSnackBarVisible.value = true
            // taskResponsemessage.value = "Something went wrong! Please try again."
        },
    })

    // isSnackBarVisible.value = true
    // taskResponsemessage.value = message
    if (success) {
        $toast.success(message)
        selectedTask.value.comments.splice(commentIndex, 1)
    } else
        $toast.error(message ?? 'Something went wrong. Plz try again or contact support.')
}

watch([isEditTaskDrawerVisible, isViewTaskDrawerVisible], ([editDrawer, viewDrawer]) => {
    if (!editDrawer && !viewDrawer)
        selectedTask.value = {}
})

</script>

<template>
    <section>
        <!-- <VCard class="mb-6"> -->
        <!-- <VCardTitle class="text-h4 py-5">
                {{ ['admin', 'team_lead'].includes(userData.role.value) ? 'Filters' : 'Tasks' }}
            </VCardTitle> -->


        <!-- <VCardText v-if="['admin', 'team_lead'].includes(userData.role.value)">

            </VCardText> -->



        <!-- <VCardText v-if="['admin', 'team_lead'].includes(userData.role.value)" class="d-flex flex-wrap gap-4"> -->
        <!-- 👉 Export & import buttons -->
        <!-- <VBtn color="success" prepend-icon="ri-upload-2-line">
                    Import
                </VBtn>
                <VBtn color="secondary" prepend-icon="ri-download-2-line">
                    Export
                </VBtn> -->


        <!-- </VCardText> -->
        <!-- </VCard> -->

        <template v-if="['admin', 'team_lead'].includes(userData.role.value)">
            <VRow align="center" justify="space-between" class="mb-1">
                <!-- 👉 Toggle Assigned to me or assigned by me (only for team_lead role) -->
                <VCol cols="2">
                    <VSwitch v-if="userData.role.value === 'team_lead'" v-model="toggleAssignedToMe" :inset="false"
                        :label="toggleAssignedToMe ? 'Assigned to me' : 'Assigned by me'" />
                </VCol>
                <!-- 👉 Select Department -->
                <!-- <VCol v-if="userData.role.value === 'admin'">
                    <VSelect v-model="selectedDepartment" label="Filter by Department"
                        placeholder="Filter by Department" :items="departments" clearable chips />
                </VCol> -->

                <!-- 👉 Select User -->
                <!-- <VCol v-if="['admin', 'team_lead'].includes(userData.role.value)">
                    <VAutocomplete v-model="selectedUser" label="Filter by User" placeholder="Filter by User"
                        :items="users" auto-select-first clearable chips />
                </VCol> -->

                <!-- 👉 Select Date -->
                <!-- <VCol>
                    <AppDateTimePicker v-model="selectedDate" label="Filter by Date" placeholder="Filter by Date"
                        clearable :config="{ dateFormat: 'd-m-Y' }" clear-icon="ri-close-line" />
                </VCol> -->

                <!-- 👉 Select Status -->
                <!-- <VCol v-if="['admin', 'team_lead'].includes(userData.role.value)">
                    <VSelect v-model="selectedStatus" label="Filter by Status" placeholder="Filter by Status"
                        :items="statuses" clearable chips />
                </VCol> -->

                <!-- 👉 Search  -->
                <!-- <VCol>
                    <VTextField v-model="searchQuery" placeholder="Filter by Query" density="comfortable" clearable
                        label="Filter by Query" />
                </VCol> -->
                <!-- <VSpacer /> -->
                <VCol cols="2" class="text-end">
                    <VBtn @click="isAddNewTaskDrawerVisible = true" prepend-icon="ri-task-fill">
                        Add New Task
                    </VBtn>
                </VCol>
            </VRow>
        </template>

        <!-- <VDivider /> -->

        <!-- Kanban -->
        <div class="kanban-main-wrapper d-flex gap-4 h-100 mt-3">
            <!-- 👉 kanban render  -->
            <div class="d-flex ga-4">
                <template v-for="(tasks, status) in tasksByStatus" :key="status">
                    <!-- 👉 kanban render -->
                    <TaskKanbanItem :board-name="(statuses.find((s: any) => s.value === status)?.title as string)"
                        :board-id="status" :kanban-items="(tasks as Record<string, any>[])" class="me-4" />
                    <!-- @rename-board="renameBoard" @delete-item="deleteKanbanItemFn" -->
                </template>
            </div>
        </div>

        <!-- 👉 Add New Task -->
        <AddNewTaskDrawer v-if="['admin', 'team_lead'].includes(userData.role.value)"
            v-model:isDrawerOpen="isAddNewTaskDrawerVisible" @task-data="addNewTask" :users="users" :statuses="statuses"
            ref="addNewTaskDrawerRef" :errors="errors" />

        <!-- 👉 Edit Task -->
        <EditTaskDrawer v-if="['admin', 'team_lead'].includes(userData.role.value)"
            v-model:isDrawerOpen="isEditTaskDrawerVisible" @task-data="editTask" :users="users" :statuses="statuses"
            :task="selectedTask" ref="editTaskDrawerRef" :errors="errors" />

        <!-- 👉 View Task -->
        <ViewTaskDrawer v-model:isDrawerOpen="isViewTaskDrawerVisible" :task="selectedTask" :statuses="statuses"
            :resolveTaskStatusColor="resolveTaskStatusColor" :errors="errors" ref="viewTaskDrawerRef"
            @comment-data="addComment" @status-update="handleStatusUpdate" @delete-comment="deleteComment" />

        <VDialog v-model="isDeleteDialogVisible" width="400">
            <!-- Dialog Content -->
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
    </section>

</template>

<style lang="scss">
@use "@styles/variables/_vuetify.scss" as vuetify;

.kanban-main-wrapper {
    overflow: auto hidden;
    margin-inline-start: -0.6rem;
    min-block-size: calc(100vh - 10.5rem);
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

<script setup lang="ts">

import { mergeProps } from 'vue';

// Get currently logged in user data
const userData = useCookie('userData').value

// Filter values
const searchQuery = ref('')
const selectedUser = ref()
const selectedDepartment = ref()
const selectedDate = ref()
const selectedStatus = ref()
const toggleAssignedToMe = ref(false)
const assignedToMe = ref('no')

watch(toggleAssignedToMe, newValue => {
    assignedToMe.value = newValue ? 'yes' : 'no'
})

// Selected task to edit
const selectedTask = ref<Record<string, any>>({})
let taskToDelete: number

// Data table options
const itemsPerPage = ref(20)
const page = ref(1)
const sortBy = ref('id')
const orderBy = ref<boolean | 'asc' | 'desc'>('desc')
const selectedRows = ref([])
const tableLoading = ref(false)

// Add a ref for the AddNewTaskDrawer, editTaskDrawerRef & viewTaskDrawerRef component
const addNewTaskDrawerRef = ref()
const editTaskDrawerRef = ref()
const viewTaskDrawerRef = ref()

// Update data table options
const updateOptions = (options: any) => {
    sortBy.value = options.sortBy[0]?.key
    orderBy.value = options.sortBy[0]?.order
}

// Headers
const headers = [
    { title: 'ID', key: 'id' },
    { title: 'Title', key: 'title' },
    { title: 'Status', key: 'status' },
    { title: 'Department', key: 'department', sortable: false, showToOnly: ['admin'] },
    { title: 'Assigned To', key: 'assigned_to', sortable: false, showToOnly: ['admin', 'team_lead'] },
    { title: 'Deadline', key: 'deadline' },
    { title: 'Created By', key: 'created_by', sortable: false, showToOnly: ['admin'] },
    { title: 'Creation Date', key: 'created_at' },
    { title: 'Last Updated', key: 'updated_at' },
    { title: 'Actions', key: 'actions', sortable: false },
]

const _headers = computed(() => headers.filter(h => h.showToOnly ? (h.showToOnly.includes(userData.role.value)) : h))

const query = computed(() => {
    const query: any = {
        q: searchQuery,
        user: selectedUser,
        department: selectedDepartment,
        date: selectedDate,
        status: selectedStatus,
        itemsPerPage,
        page,
        sortBy,
        orderBy,
    }
    if (userData.role.value === 'team_lead')
        query.assignedToMe = assignedToMe

    return query
})

// 👉 Fetching tasks
const { data: tasksData, execute: fetchTasks, isFetching } = await useApi<any>(createUrl('tasks', { query }))

// Watch isFetching from the useApi to toggle tableLoading
watch(() => isFetching.value, (newValue) => {
    tableLoading.value = newValue
}, { immediate: true })

const tasks = ref(tasksData.value.tasks)
const totalTasks = computed(() => tasksData.value.totalTasks)

watch(tasksData, (newVal) => {
    tasks.value = newVal.tasks
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
if (['admin', 'team_lead'].includes(userData.role.value)) {
    const { users: fetchedUsers } = await $api('users', {
        query: {
            department: userData?.department?.id,
        },
    })
    users.value = fetchedUsers.map((u: any) => ({
        value: u.id,
        title: u.name,
    }))

    if (userData.role.value === 'admin') {
        const { departments: fetchedDepartments } = await $api('departments')
        departments.value = fetchedDepartments.map((d: any) => ({
            title: d.title,
            value: d.id,
        }))
    }
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
const isSnackBarVisible = ref(false)
const isDeleteDialogVisible = ref(false)
const taskResponsemessage = ref('')

// 👉 Add new task
const addNewTask = async (taskData: FormData) => {
    const { success, message } = await $api('tasks', {
        method: 'POST',
        body: taskData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    isSnackBarVisible.value = true
    taskResponsemessage.value = message
    addNewTaskDrawerRef.value.closeNavigationDrawer()
    if (success) {
        fetchTasks()
    }
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

    isSnackBarVisible.value = true
    taskResponsemessage.value = message
    editTaskDrawerRef.value.closeNavigationDrawer()
    if (success) {
        fetchTasks()
    }
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

    isSnackBarVisible.value = true
    taskResponsemessage.value = message
    if (success) {
        fetchTasks()
    }
}

// 👉 Add comment
const addComment = async (commentData: FormData) => {
    const { success, message, comment } = await $api(`tasks/${selectedTask.value.id}/comments`, {
        method: 'POST',
        body: commentData,
    })

    isSnackBarVisible.value = true
    taskResponsemessage.value = message
    if (success) {
        selectedTask.value.comments.push(comment)
        viewTaskDrawerRef.value.commentForm.reset()
    }
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
    const task = tasks.value.find((t: any) => t.id === id)

    if (task.status !== status) {
        const { success, message } = await $api(`tasks/${id}/status`, {
            method: 'PATCH',
            body: { status },
            onResponseError({ response }) {
                console.error(response._data.message)
                isSnackBarVisible.value = true
                taskResponsemessage.value = "Something went wrong! Please try again."
            },
        })

        isSnackBarVisible.value = true
        taskResponsemessage.value = message
        if (success) {
            task.status = status
        }
    }
}

const isTasksActionBtnsDisable = (taskCreatorId: number): boolean => (tableLoading.value || !(userData.role.value === 'admin' || taskCreatorId === userData.id))

const deleteComment = async (commentIndex: number) => {
    const comment = selectedTask.value.comments[commentIndex]

    const { success, message } = await $api(`tasks/comments/${comment.id}`, {
        method: 'DELETE',
        onResponseError({ response }) {
            console.error(response._data.message)
            isSnackBarVisible.value = true
            taskResponsemessage.value = "Something went wrong! Please try again."
        },
    })

    isSnackBarVisible.value = true
    taskResponsemessage.value = message
    if (success) {
        selectedTask.value.comments.splice(commentIndex, 1)
    }
}

watch([isEditTaskDrawerVisible, isViewTaskDrawerVisible], ([editDrawer, viewDrawer]) => {
    if (!editDrawer && !viewDrawer)
        selectedTask.value = {}
})

</script>

<template>
    <section>
        <VCard class="mb-6">
            <VCardTitle class="text-h4 py-5">
                {{ ['admin', 'team_lead'].includes(userData.role.value) ? 'Filters' : 'Tasks' }}
            </VCardTitle>

            <VCardText v-if="['admin', 'team_lead'].includes(userData.role.value)">
                <VRow align="center">
                    <!-- 👉 Toggle Assigned to me or assigned by me (only for team_lead role) -->
                    <VCol cols="2" v-if="userData.role.value === 'team_lead'">
                        <VSwitch v-model="toggleAssignedToMe" :inset="false"
                            :label="toggleAssignedToMe ? 'Assigned to me' : 'Assigned by me'" />
                    </VCol>

                    <!-- 👉 Select Department -->
                    <VCol v-if="userData.role.value === 'admin'">
                        <VSelect v-model="selectedDepartment" label="Filter by Department"
                            placeholder="Filter by Department" :items="departments" clearable chips />
                    </VCol>

                    <!-- 👉 Select User -->
                    <VCol v-if="['admin', 'team_lead'].includes(userData.role.value)">
                        <VAutocomplete v-model="selectedUser" label="Filter by User" placeholder="Filter by User"
                            :items="users" auto-select-first clearable chips />
                    </VCol>

                    <!-- 👉 Select Date -->
                    <VCol>
                        <AppDateTimePicker v-model="selectedDate" label="Filter by Date" placeholder="Filter by Date"
                            clearable :config="{ dateFormat: 'd-m-Y' }" clear-icon="ri-close-line" />
                    </VCol>

                    <!-- 👉 Select Status -->
                    <VCol v-if="['admin', 'team_lead'].includes(userData.role.value)">
                        <VSelect v-model="selectedStatus" label="Filter by Status" placeholder="Filter by Status"
                            :items="statuses" clearable chips />
                    </VCol>

                    <!-- 👉 Search  -->
                    <VCol>
                        <VTextField v-model="searchQuery" placeholder="Filter by Query" density="comfortable" clearable
                            label="Filter by Query" class="me-4" />
                    </VCol>
                </VRow>
            </VCardText>

            <VDivider />

            <VCardText v-if="['admin', 'team_lead'].includes(userData.role.value)" class="d-flex flex-wrap gap-4">
                <!-- 👉 Export & import buttons -->
                <!-- <VBtn color="success" prepend-icon="ri-upload-2-line">
                    Import
                </VBtn>
                <VBtn color="secondary" prepend-icon="ri-download-2-line">
                    Export
                </VBtn> -->
                <VSpacer />
                <VBtn @click="isAddNewTaskDrawerVisible = true" prepend-icon="ri-task-fill">
                    Add New Task
                </VBtn>
            </VCardText>

            <!-- SECTION datatable -->
            <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:model-value="selectedRows" hover show-select
                :sort-by="[{ key: sortBy, order: orderBy }]" :loading="tableLoading" loading-text="Loading Tasks..."
                :disable-sort="tableLoading" fixed-header style="max-height: 500px;" v-model:page="page" :items="tasks"
                item-value="id" :items-length="totalTasks" :headers="_headers" class="text-no-wrap rounded-0"
                @update:options="updateOptions" density="default">

                <!-- Status -->
                <template #item.status="{ item }: { item: any }">
                    <VMenu v-if="userData.id === item.assigned_to.id" transition="slide-y-transition">
                        <template #activator="{ props: menuProps }">
                            <VTooltip location="top">
                                <template #activator="{ props: tooltipProps }">
                                    <VChip v-bind="mergeProps(menuProps, tooltipProps)" elevation="5"
                                        :color="resolveTaskStatusColor(item.status)" size="small"
                                        class="text-uppercase">
                                        {{ statuses.find((status: any) => status.value === item.status)?.title }}
                                    </VChip>
                                </template>
                                <span>Click to update status</span>
                            </VTooltip>
                        </template>

                        <VList>
                            <VListItem v-for="status in statuses" :key="status.value" :value="status.value"
                                @click="handleStatusUpdate({ id: item.id, status: status.value })">
                                {{ status.title }}
                            </VListItem>
                        </VList>
                    </VMenu>

                    <VChip v-else :color="resolveTaskStatusColor(item.status)" size="small" class="text-uppercase"
                        elevation="5">
                        {{ statuses.find((status: any) => status.value === item.status)?.title }}
                        <!-- {{ slugToTitleCase(item.status) }} -->
                    </VChip>
                </template>

                <!-- Department -->
                <template #item.department="{ item }: { item: any }">
                    {{ item.assigned_to.department?.title ?? 'Not assigned' }}
                </template>

                <!-- Assigned To -->
                <template #item.assigned_to="{ item }: { item: any }">
                    {{ item.assigned_to.name }}
                </template>

                <!-- Deadline -->
                <template #item.deadline="{ item }: { item: any }">
                    <VChip :color="checkDeadlineStatus(item.deadline) === 'exceeded' ? 'error' :
                        checkDeadlineStatus(item.deadline) === 'approaching' ? 'success' : 'warning'" size="small"
                        elevation="5">
                        {{ parseDate(item.deadline) }}
                    </VChip>
                </template>

                <!-- Created By -->
                <template #item.created_by="{ item }: { item: any }">
                    {{ item.created_by.name }}
                </template>

                <!-- Created at -->
                <template #item.created_at="{ item }: { item: any }">
                    {{ item.created_at }}
                </template>

                <!-- Updated at -->
                <template #item.updated_at="{ item }: { item: any }">
                    {{ item.updated_at }}
                </template>

                <!-- Actions -->
                <template #item.actions="{ item }: { item: any }">
                    <IconBtn size="small" :disabled="tableLoading" color="info" @click="viewTask(item)" variant="flat">
                        <VIcon icon="ri-eye-fill" />
                        <VTooltip activator="parent" location="top">
                            View
                        </VTooltip>
                    </IconBtn>

                    <IconBtn size="small" @click="openEditTaskForm(item)" color="primary"
                        :variant="isTasksActionBtnsDisable(item.created_by.id) ? 'text' : 'flat'" class="mx-2"
                        :disabled="isTasksActionBtnsDisable(item.created_by.id)">
                        <VIcon :icon="isTasksActionBtnsDisable(item.created_by.id) ?
                            'ri-edit-box-line' :
                            'ri-edit-box-fill'" />
                        <VTooltip activator="parent" location="top">
                            Edit
                        </VTooltip>
                    </IconBtn>

                    <IconBtn @click="isDeleteDialogVisible = true; taskToDelete = item.id" color="error" size="small"
                        :variant="isTasksActionBtnsDisable(item.created_by.id) ? 'text' : 'flat'"
                        :disabled="isTasksActionBtnsDisable(item.created_by.id)">
                        <VIcon :icon="isTasksActionBtnsDisable(item.created_by.id) ?
                            'ri-delete-bin-line' :
                            'ri-delete-bin-fill'" />
                        <VTooltip activator="parent" location="top">
                            Delete
                        </VTooltip>
                    </IconBtn>
                </template>

                <!-- Pagination -->
                <template #bottom>
                    <VDivider />
                    <div class="d-flex justify-end flex-wrap gap-x-6 px-2 py-1">
                        <div class="d-flex align-center gap-x-2 text-medium-emphasis text-base">
                            Rows Per Page:
                            <VSelect v-model="itemsPerPage" class="per-page-select" variant="plain"
                                :items="[10, 20, 25, 50, 100]" />
                        </div>

                        <p class="d-flex align-center text-base text-high-emphasis me-2 mb-0">
                            {{ paginationMeta({ page, itemsPerPage }, totalTasks) }}
                        </p>

                        <div class="d-flex gap-x-2 align-center me-2">
                            <VBtn class="flip-in-rtl" icon="ri-arrow-left-s-line" variant="text" density="comfortable"
                                color="high-emphasis" :disabled="page <= 1" @click="page <= 1 ? page = 1 : page--" />

                            <VBtn class="flip-in-rtl" icon="ri-arrow-right-s-line" density="comfortable" variant="text"
                                color="high-emphasis" :disabled="page >= Math.ceil(totalTasks / itemsPerPage)"
                                @click="page >= Math.ceil(totalTasks / itemsPerPage) ? page = Math.ceil(totalTasks / itemsPerPage) : page++" />
                        </div>
                    </div>
                </template>

            </VDataTableServer>
            <!-- SECTION -->
        </VCard>

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

        <VSnackbar v-model="isSnackBarVisible">
            {{ taskResponsemessage }}
            <template #actions>
                <VBtn color="error" @click="isSnackBarVisible = false">
                    Close
                </VBtn>
            </template>
        </VSnackbar>

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

<script setup lang="ts">

    import { useAuthStore } from '@/@core/stores/auth';
    import { mergeProps } from 'vue';


    const authStore = useAuthStore()

    // Get currently logged in user data
    const userData = authStore.user

    const $toast = useToast()

    // Filter values
    const searchQuery = ref('')
    const selectedUsers = ref([])
    const selectedDepartments = ref([])
    const selectedStatuses = ref([])
    const selectedDate = ref()
    const toggleAssignedToMe = ref(true)
    const assignedToMe = ref('yes')

    watch(toggleAssignedToMe, newValue => {
        assignedToMe.value = newValue ? 'yes' : 'no'
    })

    // Selected task to edit
    const selectedTask = ref<Record<string, any>>({})
    let taskToDelete = ref(undefined)

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
        { title: 'Assigned To', key: 'assigned_to', sortable: false, showToOnly: ['admin', 'team_lead','project_manager'] },
        { title: 'Deadline', key: 'deadline' },
        { title: 'Created By', key: 'created_by', sortable: false, showToOnly: ['admin'] },
        { title: 'Creation Date', key: 'created_at' },
        { title: 'Last Updated', key: 'updated_at' },
        { title: 'Actions', key: 'actions', sortable: false },
    ]

    const _headers = computed(() => headers.filter(h => h.showToOnly ? (h.showToOnly.includes(userData?.role.value)) : h))

    const query = computed(() => {
        const query: any = {
            q: searchQuery,
            'users[]': selectedUsers,
            'departments[]': selectedDepartments,
            'statuses[]': selectedStatuses,
            date: selectedDate,
            itemsPerPage,
            page,
            sortBy,
            orderBy,
        }
        if (userData?.role.value === 'team_lead' || userData?.role.value === 'project_manager')
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

    if (!(userData?.role.value === 'admin')) {
        // window.Echo.private(`Task.Assigned.${userData?.id}`)
        //     .notification((notification: any) => {
        //         tasks.value.unshift(notification.task)
        //     })
    }

    watch(tasksData, (newVal) => {
        tasks.value = newVal.tasks
    })

    const statuses = [
           {
            title: 'To Do',
            value: 'to_do'
        },
        {
            title: 'In Progress',
            value: 'in_progress'
        },

        {
            title: 'Pending',
            value: 'pending'
        },

        {
            title: 'Sent To Client Review',
            value: 'sent_to_client_review'
        },
        {
            title: 'Revisions',
            value: 'revisions'
        },

        {
            title: 'Completed',
            value: 'completed'
        },
        {
            title: 'Submit To Client',
            value: 'submit_to_client'
        },
        {
            title: 'Archive',
            value: 'archive'
        },
    ]

    const users = ref([])
    const departments = ref([])

    if (userData?.role.value === 'admin' && userData.department.value === 'admin') {
        users.value = await $api('users')
            .then(({ users }) => users.map((u: any) => ({ title: u.name, value: u.id })))
        departments.value = await $api('departments')
            .then(({ departments }) => departments.map((d: any) => ({ title: d.title, value: d.value })))
    } else if (userData?.role.value === 'team_lead' || userData?.role.value === 'project_manager') {
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
            fetchTasks()
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

        editTaskDrawerRef.value.closeNavigationDrawer()
        if (success) {
            $toast.success(message)
            fetchTasks()
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
        const { success, message } = await $api(`tasks/${taskToDelete.value}`, {
            method: 'DELETE',
        })

        isDeleteDialogVisible.value = false

        if (success) {
            $toast.success(message)
            fetchTasks()
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

    const handleStatusUpdate = async ({ id, status, newStatus }: { id: number, status: string, newStatus: string }) => {

        if (newStatus !== status) {
            const { success, message } = await $api(`tasks/${id}/status`, {
                method: 'PATCH',
                body: { status: newStatus },
                onResponseError({ response }) {
                    $toast.error('Something went wrong. Plz try again or contact support.')
                    console.error(response._data.message)
                },
            })

            if (success) {
                $toast.success(message)
                const task = tasks.value.find((t: any) => t.id === id)
                task.status = newStatus
            } else
                $toast.error(message ?? 'Something went wrong. Plz try again or contact support.')
        }
    }

    const isTasksActionBtnsDisable = (taskCreatorId: number): boolean => (tableLoading.value || !(userData?.role.value === 'admin' || taskCreatorId === userData?.id))

    const deleteComment = async (commentIndex: number) => {
        const comment = selectedTask.value.comments[commentIndex]

        const { success, message } = await $api(`tasks/comments/${comment.id}`, {
            method: 'DELETE',
            onResponseError({ response }) {
                $toast.error('Something went wrong. Plz try again or contact support.')
                console.error(response._data.message)
            },
        })

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
        <VCard class="mb-6">
            <div class="d-flex align-center justify-space-between">
                <VCardTitle class="text-h4 py-5">
                    {{ ['admin', 'team_lead','project_manager'].includes(userData?.role.value) ? 'Filters' : 'Tasks' }}
                </VCardTitle>

                <VBtn prepend-icon="ri-kanban-view" class="mb-3 me-2" :to="{ name: 'tasks-kanban' }">Kanban View</VBtn>
            </div>

            <VCardText v-if="['admin', 'team_lead','project_manager'].includes(userData?.role.value)">
                <VRow align="center">
                    <!-- 👉 Toggle Assigned to me or assigned by me (only for team_lead role) -->
                   <VCol cols="2" v-if="userData?.role.value === 'team_lead' || userData?.role.value === 'project_manager'">
                        <VSwitch v-model="toggleAssignedToMe" :inset="false"
                            :label="toggleAssignedToMe ? 'Assigned to me' : 'Assigned by me'" />
                    </VCol>


                    <!-- 👉 Select Department -->
                    <VCol v-if="userData?.role.value === 'admin'">
                        <VSelect v-model="selectedDepartments" label="Filter by Department" multiple
                            placeholder="Filter by Department" :items="departments" clearable chips />
                    </VCol>

                    <!-- 👉 Select User -->
                    <VCol v-if="['admin', 'team_lead','project_manager'].includes(userData?.role.value)">
                        <VAutocomplete v-model="selectedUsers" label="Filter by User" placeholder="Filter by User"
                            multiple :items="users" auto-select-first clearable chips />
                    </VCol>

                    <!-- 👉 Select Date -->
                    <VCol>
                        <AppDateTimePicker v-model="selectedDate" label="Filter by Date" placeholder="Filter by Date"
                            clearable :config="{ dateFormat: 'd-m-Y' }" clear-icon="ri-close-line" />
                    </VCol>

                    <!-- 👉 Select Status -->
                    <VCol v-if="['admin', 'team_lead','project_manager'].includes(userData?.role.value)">
                        <VSelect v-model="selectedStatuses" label="Filter by Status" placeholder="Filter by Status"
                            multiple :items="statuses" clearable chips />
                    </VCol>

                    <!-- 👉 Search  -->
                    <VCol>
                        <VTextField v-model="searchQuery" placeholder="Filter by Query" density="comfortable" clearable
                            label="Filter by Query" />
                    </VCol>
                </VRow>
            </VCardText>

            <VDivider />

            <VCardText v-if="['admin', 'team_lead','project_manager'].includes(userData?.role.value)" class="d-flex flex-wrap gap-4">
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
                    <VMenu v-if="userData?.id === item.assignee.id" transition="slide-y-transition">
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
                                @click="handleStatusUpdate({ id: item.id, status: item.status, newStatus: status.value })">
                                {{ status.title }}
                            </VListItem>
                        </VList>
                    </VMenu>

                    <VChip v-else :color="resolveTaskStatusColor(item.status)" size="small" class="text-uppercase"
                        elevation="5">
                        {{ statuses.find((status: any) => status.value === item.status)?.title }}
                    </VChip>
                </template>

                <!-- Department -->
                <template #item.department="{ item }: { item: any }">
                    {{ item.assignee.department?.title ?? 'Not assigned' }}
                </template>

                <!-- Assigned To -->
                <template #item.assigned_to="{ item }: { item: any }">
                    {{ item.assignee.name }}
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
                    {{ item.creator.name }}
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
                        :variant="isTasksActionBtnsDisable(item.creator.id) ? 'text' : 'flat'" class="mx-2"
                        :disabled="isTasksActionBtnsDisable(item.creator.id)">
                        <VIcon :icon="isTasksActionBtnsDisable(item.creator.id) ?
                            'ri-edit-box-line' :
                            'ri-edit-box-fill'" />
                        <VTooltip activator="parent" location="top">
                            Edit
                        </VTooltip>
                    </IconBtn>

                    <IconBtn @click="isDeleteDialogVisible = true; taskToDelete = item.id" color="error" size="small"
                        :variant="isTasksActionBtnsDisable(item.creator.id) ? 'text' : 'flat'"
                        :disabled="isTasksActionBtnsDisable(item.creator.id)">
                        <VIcon :icon="isTasksActionBtnsDisable(item.creator.id) ?
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
        <AddNewTaskDrawer v-if="['admin', 'team_lead','project_manager'].includes(userData?.role.value)"
            v-model:isDrawerOpen="isAddNewTaskDrawerVisible" @task-data="addNewTask" :users="users" :statuses="statuses"
            ref="addNewTaskDrawerRef" :errors="errors" />

        <!-- 👉 Edit Task -->
        <EditTaskDrawer v-if="['admin', 'team_lead','project_manager'].includes(userData?.role.value)"
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

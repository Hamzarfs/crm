<script setup lang="ts">

const $toast = useToast()

const userData = useCookie('userData').value

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

const query = computed(() => userData.role.value === 'team_lead' ? { assignedToMe } : {})

// 👉 Fetching tasks
const { data: tasksByStatusData, execute: fetchTasksByStatus, isFetching } = await useApi<any>(createUrl('tasks/kanban', { query }))

// Watch isFetching from the useApi to toggle tableLoading
// watch(() => isFetching.value, (newValue) => {   @TODO use isFetching instead to show loading state
//     tableLoading.value = newValue
// }, { immediate: true })

const tasksByStatus = ref(tasksByStatusData.value.tasksByStatus)

watch(tasksByStatusData, (newVal) => {
    tasksByStatus.value = newVal.tasksByStatus
    // console.log(tasksByStatus.value);
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



</script>



<template>
    <template v-if="['admin', 'team_lead'].includes(userData.role.value)">
        <VRow align="center" justify="space-between" class="mb-1">
            <!-- 👉 Toggle Assigned to me or assigned by me (only for team_lead role) -->
            <VCol cols="2">
                <VSwitch v-if="userData.role.value === 'team_lead'" v-model="toggleAssignedToMe" :inset="false"
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
                    :board-id="status" :kanban-items="(tasks as Record<string, any>[])" class="me-4" />
                <!-- @rename-board="renameBoard" @delete-item="deleteKanbanItemFn" -->
            </template>
        </div>
    </div>

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

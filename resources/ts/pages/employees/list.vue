<script setup lang="ts">

// 👉 Store
const searchQuery = ref('')
const selectedRole = ref()
const selectedStatus = ref()
const selectedDepartment = ref()
const selectedUser = ref({})
let userToDelete: number

// Data table options
const itemsPerPage = ref(20)
const page = ref(1)
const sortBy = ref('id')
const orderBy = ref<boolean | "desc" | "asc">('desc')
const selectedRows = ref([])
const tableLoading = ref(false)


// Add a ref for the AddNewUserDrawer & editUserDrawerRef component
const addNewUserDrawerRef = ref()
const editUserDrawerRef = ref()

// Update data table options
const updateOptions = (options: any) => {
    sortBy.value = options.sortBy[0]?.key
    orderBy.value = options.sortBy[0]?.order
}

// Headers
const headers = [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'name' },
    { title: 'Department', key: 'department', sortable: false },
    { title: 'Role', key: 'role', sortable: false },
    { title: 'Status', key: 'status' },
    { title: 'Email', key: 'email' },
    { title: 'Phone', key: 'phone' },
    { title: 'Actions', key: 'actions', sortable: false },
]

// 👉 Fetching users
const { data: usersData, execute: fetchUsers, isFetching } = await useApi<any>(createUrl('users', {
    query: {
        q: searchQuery,
        status: selectedStatus,
        role: selectedRole,
        department: selectedDepartment,
        itemsPerPage,
        page,
        sortBy,
        orderBy,
    },
}))

// Watch isFetching from the useApi to toggle tableLoading
watch(() => isFetching.value, (newValue) => {
    tableLoading.value = newValue
}, { immediate: true })

const users = computed(() => usersData.value.users)
const totalUsers = computed(() => usersData.value.totalUsers)

const { roles } = await $api('roles')
const { status } = await $api('users/statuses')
const { departments } = await $api('departments')

const resolveUserRoleVariant = (role: string): string => {
    switch (role) {
        case 'admin':
            return 'success'
        case 'employee':
            return 'primary'
        case 'hr':
            return 'red'
        case 'team_lead':
            return 'blue-grey'
        case 'account_manager':
            return 'deep-orange'
        case 'accountant':
            return 'amber'
        case 'sales_agent':
            return 'teal'
        default:
            return 'info'
    }
}

const resolveUserStatusVariant = (stat: string) => {
    const statLowerCase = stat.toLowerCase()
    if (statLowerCase === 'active')
        return 'success'
    if (statLowerCase === 'inactive')
        return 'warning'

    return 'primary'
}

const isAddNewUserDrawerVisible = ref(false)
const isEditUserDrawerVisible = ref(false)
const isSnackBarVisible = ref(false)
const isDeleteDialogVisible = ref(false)
const userResponsemessage = ref('')

// 👉 Add new user
const addNewUser = async (userData: any) => {
    const { success, message } = await $api('/users', {
        method: 'POST',
        body: userData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    isSnackBarVisible.value = true
    userResponsemessage.value = message
    addNewUserDrawerRef.value.closeNavigationDrawer()
    if (success) {
        fetchUsers()
        fetchEmployeesCount()
    }
}

// 👉 Edit user
const editUser = async (userData: any) => {
    const { success, message } = await $api(`users/${userData.id}`, {
        method: 'PUT',
        body: userData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    if (success) {
        isSnackBarVisible.value = true
        userResponsemessage.value = message
        editUserDrawerRef.value.closeNavigationDrawer()
        fetchUsers()
        fetchEmployeesCount()
    }
}

const openEditUserForm = (user: any) => {
    selectedUser.value = user
    isEditUserDrawerVisible.value = true
}

// 👉 Delete user
const deleteUser = async () => {
    const { success, message } = await $api(`users/${userToDelete}`, {
        method: 'DELETE',
    })

    isDeleteDialogVisible.value = false

    isSnackBarVisible.value = true
    userResponsemessage.value = message
    if (success) {
        fetchUsers()
        fetchEmployeesCount()
    }
}

const errors = ref({
    name: undefined,
    email: undefined,
    phone: undefined,
    role: undefined,
    department: undefined,
    status: undefined,
})

const employeesCountData = ref({
    totalEmployees: 0,
    activeEmployees: 0,
    inactiveEmployees: 0,
    newEmployees: 0,
})

// 👉 Get employee count for top cards
const { execute: fetchEmployeesCount, isFetching: isEmployeesCountFetching } = await useApi<any>(createUrl('users/count'), {
    afterFetch: ctx => {
        employeesCountData.value.totalEmployees = ctx.data.total
        employeesCountData.value.activeEmployees = ctx.data.active
        employeesCountData.value.inactiveEmployees = ctx.data.inactive
        employeesCountData.value.newEmployees = ctx.data.new

        return ctx
    },
})

const widgetData = computed(() => ([
    { title: 'Total Employees', value: employeesCountData.value.totalEmployees, icon: 'ri-group-line', iconColor: 'primary' },
    { title: 'Active Employees', value: employeesCountData.value.activeEmployees, icon: 'ri-user-follow-line', iconColor: 'success' },
    { title: 'Inactive Employees', value: employeesCountData.value.inactiveEmployees, icon: 'ri-user-add-line', iconColor: 'error' },
    { title: 'New Employees', value: employeesCountData.value.newEmployees, icon: 'ri-user-search-line', iconColor: 'warning', desc: 'Joined last month' },
]))

watch(isEditUserDrawerVisible, editDrawer => {
    if (!editDrawer)
        selectedUser.value = {}
})

const isImportShow = ref(false)
const importFile = ref(undefined)

const downloadSampleImportFile = async () => {
    const fileBlob = await $api('users/import/sample/download', { responseType: 'blob' })
    const url = URL.createObjectURL(new Blob([fileBlob]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'sample.xlsx')
    document.body.appendChild(link)
    link.click()
    link.parentNode?.removeChild(link)
}

const isFileUploading = ref(false)

const uploadImportFile = async (file: File | File[]) => {
    if (file) {
        isFileUploading.value = true
        const formData = new FormData()
        formData.append('file', file as File)

        const { success, message } = await $api('users/import', {
            method: 'POST',
            body: formData,
            onResponseError: context => {
                isFileUploading.value = false
                isSnackBarVisible.value = true
                userResponsemessage.value = context.response._data.message.join('<br>')
            },
        })
        isFileUploading.value = false
        isSnackBarVisible.value = true
        userResponsemessage.value = message

        if (success) {
            importFile.value = undefined
            isImportShow.value = false
            fetchUsers()
            fetchEmployeesCount()
        }
    }
}

</script>

<template>

    <section>
        <!-- 👉 Widgets -->
        <div class="d-flex mb-6">
            <VRow>
                <template v-for="(data, id) in widgetData" :key="id">
                    <VCol cols="12" md="3" sm="6">
                        <VCard class="d-flex align-center" height="100%" :loading="isEmployeesCountFetching">
                            <VCardText>
                                <div class="d-flex justify-space-between align-center">
                                    <div class="d-flex flex-column gap-y-1">
                                        <span class="text-base text-high-emphasis">{{ data.title }}</span>
                                        <h4 class="text-h4 d-flex align-center gap-2 font-weight-bold">
                                            {{ data.value }}
                                        </h4>

                                        <p v-if="data.desc" class="text-sm mb-0">
                                            {{ data.desc }}
                                        </p>
                                    </div>
                                    <VAvatar :color="data.iconColor" variant="tonal" rounded size="42">
                                        <VIcon :icon="data.icon" size="26" />
                                    </VAvatar>
                                </div>
                            </VCardText>
                        </VCard>
                    </VCol>
                </template>
            </VRow>
        </div>

        <VCard title="Filters" class="mb-6">
            <VCardText>
                <VRow align="center">
                    <!-- 👉 Select Role -->
                    <VCol cols="12" sm="3">
                        <VSelect v-model="selectedRole" label="Filter by Role" placeholder="Filter by Role"
                            :items="roles" clearable clear-icon="ri-close-line" chips />
                    </VCol>

                    <!-- 👉 Select Department -->
                    <VCol cols="12" sm="3">
                        <VSelect v-model="selectedDepartment" label="Filter by Department"
                            placeholder="Filter by Department" :items="departments" clearable clear-icon="ri-close-line"
                            chips />
                    </VCol>

                    <!-- 👉 Select Status -->
                    <VCol cols="12" sm="3">
                        <VSelect v-model="selectedStatus" label="Filter by Status" placeholder="Filter by Status"
                            :items="status" clearable clear-icon="ri-close-line" chips />
                    </VCol>

                    <VCol cols="12" sm="3">
                        <!-- 👉 Search  -->
                        <VTextField v-model="searchQuery" placeholder="Filter by User" label="Filter by User"
                            density="comfortable" clearable class="me-4" />
                    </VCol>
                </VRow>
            </VCardText>

            <VDivider />

            <VCardText>
                <VRow align="center">
                    <VCol>
                        <div class="d-flex align-center gap-10">
                            <div class="d-flex align-center gap-5">
                                <!-- 👉 Export & import buttons -->
                                <VBtn color="success" prepend-icon="ri-upload-2-line"
                                    @click="isImportShow = !isImportShow">
                                    Import
                                </VBtn>

                                <!-- <VBtn color="secondary" prepend-icon="ri-download-2-line">
                                    Export
                                </VBtn> -->
                            </div>

                            <Transition>
                                <div class="w-100" v-if="isImportShow">
                                    <VFileInput v-model="importFile" class="mb-2" accept=".xlsx"
                                        :loading="isFileUploading" @update:model-value="uploadImportFile"
                                        placeholder="Upload file to import employees" prepend-icon=""
                                        label="Upload file to import employees" chips show-size clearable />

                                    <a href="javascript:void(0)" @click="downloadSampleImportFile">Download sample
                                        file</a>
                                </div>
                            </Transition>
                        </div>
                    </VCol>

                    <VCol>
                        <VBtn @click="isAddNewUserDrawerVisible = true" prepend-icon="ri-user-add-fill"
                            style="float: right;">
                            Add New Employee
                        </VBtn>

                    </VCol>
                </VRow>
            </VCardText>

            <!-- SECTION datatable -->
            <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:model-value="selectedRows" hover show-select
                :sort-by="[{ key: sortBy, order: orderBy }]" :loading="tableLoading" loading-text="Loading Employees..."
                :disable-sort="tableLoading" fixed-header style="max-height: 500px;" v-model:page="page" :items="users"
                item-value="id" :items-length="totalUsers" :headers="headers" class="text-no-wrap rounded-0"
                @update:options="updateOptions" density="default">

                <!-- Name -->
                <template #item.name="{ item }: { item: any }">
                    <div class="d-flex align-center">
                        <VAvatar size="34" :variant="!item.avatar ? 'tonal' : undefined"
                            :color="!(item.avatar) ? 'primary' : undefined" class="me-3">
                            <VImg v-if="item.avatar" :src="item.avatar" />
                            <VIcon v-else icon="ri-user-line" />
                        </VAvatar>

                        <span class="text-medium-emphasis">{{ item.name }}</span>
                    </div>
                </template>

                <!-- Role -->
                <template #item.role="{ item }: { item: any }">
                    <VChip v-if="item.role" :color="resolveUserRoleVariant(item.role?.value)" size="small"
                        class="text-uppercase" elevation="5">
                        {{ item.role.title }}
                    </VChip>
                    <span v-else class="text-error font-weight-bold">Not assigned</span>
                </template>

                <!-- Status -->
                <template #item.status="{ item }: { item: any }">
                    <VChip :color="resolveUserStatusVariant(item.status.value)" size="small" class="text-uppercase"
                        elevation="5">
                        {{ item.status.label }}
                    </VChip>
                </template>

                <!-- Department -->
                <template #item.department="{ item }: { item: any }">
                    <span v-if="item.department">{{ item.department.title }}</span>
                    <span v-else class="text-error font-weight-bold">Not assigned</span>
                </template>

                <!-- Actions -->
                <template #item.actions="{ item }: { item: any }">
                    <IconBtn size="small" :disabled="tableLoading" color="info">
                        <VIcon icon="ri-eye-line" />
                        <VTooltip activator="parent" location="top">
                            View
                        </VTooltip>
                    </IconBtn>

                    <IconBtn size="small" @click="openEditUserForm(item)" :disabled="tableLoading" color="primary">
                        <VIcon icon="ri-edit-box-line" />
                        <VTooltip activator="parent" location="top">
                            Edit
                        </VTooltip>
                    </IconBtn>

                    <IconBtn size="small" @click="isDeleteDialogVisible = true; userToDelete = item.id" color="error"
                        :disabled="tableLoading || item.role?.value === 'admin'">
                        <VIcon icon="ri-delete-bin-7-line" />
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
                            {{ paginationMeta({ page, itemsPerPage }, totalUsers) }}
                        </p>

                        <div class="d-flex gap-x-2 align-center me-2">
                            <VBtn class="flip-in-rtl" icon="ri-arrow-left-s-line" variant="text" density="comfortable"
                                color="high-emphasis" :disabled="page <= 1" @click="page <= 1 ? page = 1 : page--" />

                            <VBtn class="flip-in-rtl" icon="ri-arrow-right-s-line" density="comfortable" variant="text"
                                color="high-emphasis" :disabled="page >= Math.ceil(totalUsers / itemsPerPage)"
                                @click="page >= Math.ceil(totalUsers / itemsPerPage) ? page = Math.ceil(totalUsers / itemsPerPage) : page++" />
                        </div>
                    </div>
                </template>

            </VDataTableServer>
            <!-- SECTION -->
        </VCard>

        <!-- 👉 Add New User -->
        <AddNewUserDrawer v-model:isDrawerOpen="isAddNewUserDrawerVisible" @user-data="addNewUser" :status="status"
            ref="addNewUserDrawerRef" :roles="roles" :departments="departments" :errors="errors" />

        <!-- 👉 Edit User -->
        <EditUserDrawer v-model:isDrawerOpen="isEditUserDrawerVisible" @user-data="editUser" :status="status"
            :user="selectedUser" ref="editUserDrawerRef" :roles="roles" :departments="departments" :errors="errors" />

        <VSnackbar v-model="isSnackBarVisible">
            <span v-html="userResponsemessage"></span>
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
                    Are you sure you want to delete this user?
                </VCardText>

                <VCardText class="d-flex align-center justify-center gap-4">
                    <VBtn variant="elevated" @click="deleteUser()" color="error">
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

<style lang="css" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>

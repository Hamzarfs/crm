<script setup lang="ts">
    import AddNewUserDrawer from '@/components/employees/AddNewUserDrawer.vue';
    import EditUserDrawer from '@/components/employees/EditUserDrawer.vue';

    // 👉 Store
    const searchQuery = ref('')
    const selectedRole = ref()
    const selectedStatus = ref()
    const selectedDepartment = ref()
    const selectedUser = ref({
        name: '',
        email: '',
        phone: '',
        role: undefined,
        department: undefined,
        status: undefined,
    })
    let userToDelete: Number

    // Data table options
    const itemsPerPage = ref(20)
    const page = ref(1)
    const sortBy = ref()
    const orderBy = ref()
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
        { title: 'Email', key: 'email' },
        { title: 'Phone', key: 'phone' },
        { title: 'Role', key: 'role', sortable: false },
        { title: 'Status', key: 'status' },
        { title: 'Actions', key: 'actions', sortable: false },
    ]

    // 👉 Fetching users
    const { data: usersData, execute: fetchUsers, isFetching } = await useApi<any>(createUrl('/users', {
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
    let userResponsemessage: string

    // 👉 Add new user
    const addNewUser = async (userData: any) => {
        const { success, message } = await $api('/users', {
            method: 'POST',
            body: userData,
            onResponseError({ response }) {
                errors.value = response._data.errors
            },
        })

        if (success) {
            isSnackBarVisible.value = true
            userResponsemessage = message
            addNewUserDrawerRef.value.closeNavigationDrawer()
            fetchUsers()
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
            userResponsemessage = message
            editUserDrawerRef.value.closeNavigationDrawer()
            fetchUsers()
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

        if (success) {
            isSnackBarVisible.value = true
            userResponsemessage = message
            fetchUsers()
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

    // 👉 Get employee count for top cards
    const { total: totalEmployees, new: newEmployees, active: activeEmployees, inactive: inactiveEmployees } = await $api('users/count')

    const widgetData = ref([
        { title: 'Total Employees', value: totalEmployees, icon: 'ri-group-line', iconColor: 'primary' },
        { title: 'Active Employees', value: activeEmployees, icon: 'ri-user-follow-line', iconColor: 'success' },
        { title: 'Inactive Employees', value: inactiveEmployees, icon: 'ri-user-add-line', iconColor: 'error' },
        { title: 'New Employees', value: newEmployees, icon: 'ri-user-search-line', iconColor: 'warning', desc: 'Joined last month' },
    ])

    const clearFilterFields = () => {
        selectedRole.value = null
        selectedDepartment.value = null
        selectedStatus.value = null
        searchQuery.value = ''

    }

</script>

<template>

    <section>
        <!-- 👉 Widgets -->
        <div class="d-flex mb-6">
            <VRow>
                <template v-for="(data, id) in widgetData" :key="id">
                    <VCol cols="12" md="3" sm="6">
                        <VCard class="d-flex align-center" height="100%">
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

        <VCard class="mb-6">

            <div class="d-flex align-center pl-0 pt-2" style="padding: .75rem 1.25rem !important;">
                <VCardTitle class="font-weight-bold" :style="{ fontSize: '25px' }">Filters</VCardTitle>
                <VSpacer />
                <!-- <VBtn roun /> -->
                <IconBtn :disabled="tableLoading" rounded="lg" elevation="3" ripple class="bg-error" size="small"
                    @click="clearFilterFields" :style="{ width: '35px', height: '35px' }">
                    <VIcon icon="ri-delete-bin-7-fill" />
                    <VTooltip activator="parent" location="top">
                        Clear All
                    </VTooltip>
                </IconBtn>
            </div>

            <VCardText>
                <VRow align="center">
                    <!-- 👉 Select Role -->
                    <VCol cols="12" sm="3">
                        <VSelect v-model="selectedRole" label="Select Role" placeholder="Select Role" :items="roles"
                            clearable clear-icon="ri-close-line" chips />
                    </VCol>

                    <!-- 👉 Select Department -->
                    <VCol cols="12" sm="3">
                        <VSelect v-model="selectedDepartment" label="Select Department" placeholder="Select Department"
                            :items="departments" clearable clear-icon="ri-close-line" chips />
                    </VCol>

                    <!-- 👉 Select Status -->
                    <VCol cols="12" sm="3">
                        <VSelect v-model="selectedStatus" label="Select Status" placeholder="Select Status"
                            :items="status" clearable clear-icon="ri-close-line" chips />
                    </VCol>

                    <VCol cols="12" sm="3">
                        <!-- 👉 Search  -->
                        <VTextField v-model="searchQuery" placeholder="Search User" density="comfortable" clearable
                            class="me-4" />
                    </VCol>
                </VRow>
            </VCardText>

            <VDivider />

            <VCardText class="d-flex flex-wrap gap-4">
                <!-- 👉 Export & import buttons -->
                <VBtn color="success" prepend-icon="ri-upload-2-line">
                    Import
                </VBtn>
                <VBtn color="secondary" prepend-icon="ri-download-2-line">
                    Export
                </VBtn>
                <VSpacer />
                <VBtn @click="isAddNewUserDrawerVisible = true" prepend-icon="ri-user-add-fill">
                    Add New Employee
                </VBtn>
            </VCardText>

            <!-- SECTION datatable -->

            <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:model-value="selectedRows" hover
                :loading="tableLoading" :disable-sort="tableLoading" fixed-header style="max-height: 500px;"
                v-model:page="page" :items="users" item-value="id" :items-length="totalUsers" :headers="headers"
                class="text-no-wrap rounded-0" @update:options="updateOptions" density="default">

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
                    <span class="text-capitalize text-high-emphasis">
                        <VChip :color="resolveUserRoleVariant(item.role?.value)" size="small"
                            class="text-capitalize me-2">
                            {{ item.role?.title }}
                        </VChip>
                    </span>
                </template>

                <!-- Status -->
                <template #item.status="{ item }: { item: any }">
                    <span class="text-capitalize text-high-emphasis">
                        <VChip :color="resolveUserStatusVariant(item.status.value)" size="small"
                            class="text-capitalize">
                            {{ item.status.label }}
                        </VChip>
                    </span>
                </template>

                <!-- Department -->
                <template #item.department="{ item }: { item: any }">
                    {{ item.department?.title }}
                </template>

                <!-- Actions -->
                <template #item.actions="{ item }: { item: any }">

                    <IconBtn size="small" :disabled="tableLoading">
                        <VIcon icon="ri-eye-line" />
                        <VTooltip activator="parent" location="top">
                            View
                        </VTooltip>
                    </IconBtn>

                    <IconBtn size="small" @click="openEditUserForm(item)" :disabled="tableLoading">
                        <VIcon icon="ri-edit-box-line" />
                        <VTooltip activator="parent" location="top">
                            Edit
                        </VTooltip>
                    </IconBtn>

                    <IconBtn size="small" @click="isDeleteDialogVisible = true; userToDelete = item.id"
                        :disabled="tableLoading">
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
            {{ userResponsemessage }}
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

<style lang="scss">
    .app-user-search-filter {
        inline-size: 24.0625rem;
    }

    .text-capitalize {
        text-transform: capitalize;
    }

    .user-list-name:not(:hover) {
        color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
    }
</style>

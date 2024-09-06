<script setup lang="ts">

// 👉 Store
const searchQuery = ref('')
const selectedRole = ref()
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(20)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const selectedRows = ref([])
const tableLoading = ref(false)

// Update data table options
const updateOptions = (options: any) => {
    sortBy.value = options.sortBy[0]?.key
    orderBy.value = options.sortBy[0]?.order
}

// Headers
const headers = [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'name' },
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
        itemsPerPage,
        page,
        sortBy,
        orderBy,
    },
}))

// Watch isFetching from the useApi to toggle tableLoading
watch(isFetching, (newValue) => {
    tableLoading.value = newValue
}, { immediate: true })

const users = computed(() => usersData.value.users)
const totalUsers = computed(() => usersData.value.totalUsers)

const { roles } = await $api('roles')
const { status } = await $api('users/statuses')

const resolveUserRoleVariant = (role: string): string => {
    switch (role.toLowerCase()) {
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
            return ''
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

// 👉 Add new user
const addNewUser = async (userData: any) => {
    // userListStore.addUser(userData)
    // await $api('/apps/users', {
    //     method: 'POST',
    //     body: userData,
    // })
    await $api('/apps/users', {
        method: 'POST',
        body: userData,
    })

    // Refetch User
    fetchUsers()
}

// 👉 Delete user
const deleteUser = async (id: number) => {
    await $api(`/apps/users/${id}`, {
        method: 'DELETE',
    })

    // Delete from selectedRows
    const index = selectedRows.value.findIndex(row => row === id)
    if (index !== -1)
        selectedRows.value.splice(index, 1)

    // refetch User
    // TODO: Make this async
    fetchUsers()
}

// 👉 Get employee count for top cards
const { total: totalEmployees, new: newEmployees, active: activeEmployees, inactive: inactiveEmployees } = await $api('users/count')

const widgetData = ref([
    { title: 'Total Employees', value: totalEmployees, icon: 'ri-group-line', iconColor: 'primary' },
    { title: 'Active Employees', value: activeEmployees, icon: 'ri-user-follow-line', iconColor: 'success' },
    { title: 'Inactive Employees', value: inactiveEmployees, icon: 'ri-user-add-line', iconColor: 'error' },
    { title: 'New Employees', value: newEmployees, icon: 'ri-user-search-line', iconColor: 'warning', desc: 'Joined last month' },
])

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

        <VCard title="Filters" class="mb-6">
            <VCardText>
                <VRow align="center">
                    <!-- 👉 Select Role -->
                    <VCol cols="12" sm="4">
                        <VSelect v-model="selectedRole" label="Select Role" placeholder="Select Role" :items="roles"
                            clearable clear-icon="ri-close-line" />
                    </VCol>

                    <!-- 👉 Select Status -->
                    <VCol cols="12" sm="4">
                        <VSelect v-model="selectedStatus" label="Select Status" placeholder="Select Status"
                            :items="status" clearable clear-icon="ri-close-line" />
                    </VCol>

                    <VCol cols="12" sm="4">
                        <!-- 👉 Search  -->
                        <VTextField v-model="searchQuery" placeholder="Search User" density="comfortable"
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
                :loading="tableLoading" :disable-sort="tableLoading" fixed-header height="500px" v-model:page="page"
                :items="users" item-value="id" :items-length="totalUsers" :headers="headers"
                class="text-no-wrap rounded-0" @update:options="updateOptions" density="default">


                <!-- Name -->
                <template #item.name="{ item }">
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
                <template #item.role="{ item }">
                    <div class="d-flex gap-4">
                        <span class="text-capitalize text-high-emphasis">
                            <VChip v-for="({ label }, id) in item.roles" :key="id"
                                :color="resolveUserRoleVariant(label)" size="small" class="text-capitalize me-2">
                                {{ label }}
                            </VChip>
                        </span>
                    </div>
                </template>

                <!-- Status -->
                <template #item.status="{ item }">
                    <VChip :color="resolveUserStatusVariant(item.status.value)" size="small" class="text-capitalize">
                        {{ item.status.label }}
                    </VChip>
                </template>

                <!-- Actions -->
                <template #item.actions="{ item }">
                    <IconBtn size="small" @click="deleteUser(item.id)" :disabled="tableLoading">
                        <VIcon icon="ri-delete-bin-7-line" />
                    </IconBtn>

                    <IconBtn size="small" :to="{ name: 'apps-user-view-id', params: { id: item.id } }"
                        :disabled="tableLoading">
                        <VIcon icon="ri-eye-line" />
                    </IconBtn>

                    <IconBtn size="small" color="medium-emphasis" :disabled="tableLoading">
                        <VIcon size="24" icon="ri-more-2-line" />

                        <VMenu activator="parent">
                            <VList>
                                <VListItem link :disabled="tableLoading">
                                    <template #prepend>
                                        <VIcon icon="ri-download-line" />
                                    </template>
                                    <VListItemTitle>Download</VListItemTitle>
                                </VListItem>
                                <VListItem link :disabled="tableLoading">
                                    <template #prepend>
                                        <VIcon icon="ri-edit-box-line" />
                                    </template>
                                    <VListItemTitle>Edit</VListItemTitle>
                                </VListItem>
                            </VList>
                        </VMenu>
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
            :roles="roles" />
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

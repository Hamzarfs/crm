<script setup lang="ts">

// 👉 Store
const searchQuery = ref('')
const selectedRole = ref()
const selectedStatus = ref()
const selectedDepartment = ref()
const selectedLead = ref({
    // name: '',
    // email: '',
    // phone: '',
    // role: undefined,
    // department: undefined,
    // status: undefined,
})
let leadToDelete: number

// Data table options
const itemsPerPage = ref(20)
const page = ref(1)
const sortBy = ref('id')
const orderBy = ref('DESC')
const selectedRows = ref([])
const tableLoading = ref(false)


// Add a ref for the AddNewLeadDrawer & editLeadDrawerRef component
const addNewLeadDrawerRef = ref()
const editLeadDrawerRef = ref()

// Update data table options
const updateOptions = (options: any) => {
    sortBy.value = options.sortBy[0]?.key
    orderBy.value = options.sortBy[0]?.order
}

// Headers
const headers = [
    { title: 'ID', key: 'id' },
    { title: 'Customer name', key: 'customer', sortable: false },
    { title: 'Lead Source', key: 'lead_source', sortable: false },
    { title: 'Brand', key: 'brand', sortable: false },
    { title: 'Services sold', key: 'services' },
    { title: 'Upsells', key: 'upsells' },
    { title: 'Status', key: 'status' },
    { title: 'Remarks', key: 'remarks' },
    { title: 'Lead closed date', key: 'lead_closed_date' },
    { title: 'Lead closed amount', key: 'lead_closed_amount' },
    { title: 'Created at', key: 'created_at' },
    { title: 'Actions', key: 'actions', sortable: false },
]

// 👉 Fetching leads
const { data: leadsData, execute: fetchLeads, isFetching } = await useApi<any>(createUrl('leads', {
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

const leads = computed(() => leadsData.value.leads)
const totalLeads = computed(() => leadsData.value.totalLeads)

const statuses = ['No answer', 'Hung up', 'Wrong number', 'Voice mail', 'Found someone', 'Follow up', 'Not interested', 'Blocked', 'Sale closed', 'Cant connect', 'Not in service', 'Invalid lead', 'Email done', 'Call done', 'No number', 'Not interested', 'Interested']

const { roles } = await $api('roles')
// const { status } = await $api('users/statuses')
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

const isAddNewLeadDrawerVisible = ref(false)
const isEditLeadDrawerVisible = ref(false)
const isSnackBarVisible = ref(false)
const isDeleteDialogVisible = ref(false)
let leadResponsemessage: string

// 👉 Add new lead
const addNewLead = async (leadData: any) => {
    const { success, message } = await $api('/leads', {
        method: 'POST',
        body: leadData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    if (success) {
        isSnackBarVisible.value = true
        leadResponsemessage = message
        addNewLeadDrawerRef.value.closeNavigationDrawer()
        fetchLeads()
    }
}

// 👉 Edit lead
const editLead = async (leadData: any) => {
    const { success, message } = await $api(`leads/${leadData.id}`, {
        method: 'PUT',
        body: leadData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    if (success) {
        isSnackBarVisible.value = true
        leadResponsemessage = message
        editLeadDrawerRef.value.closeNavigationDrawer()
        fetchLeads()
    }
}

const openEditLeadForm = (lead: any) => {
    selectedLead.value = lead
    isEditLeadDrawerVisible.value = true
}

// 👉 Delete lead
const deleteLead = async () => {
    const { success, message } = await $api(`leads/${leadToDelete}`, {
        method: 'DELETE',
    })

    isDeleteDialogVisible.value = false

    if (success) {
        isSnackBarVisible.value = true
        leadResponsemessage = message
        fetchLeads()
    }
}

const errors = ref({
    customer: undefined,
    service: undefined,
    lead_source: undefined,
    brand: undefined,
    status: undefined,
    remarks: undefined,
    lead_closed_amount: undefined,
    lead_closed_date: undefined,
})

// 👉 Get leads count for top cards
// const { total: totalEmployees, new: newEmployees, active: activeEmployees, inactive: inactiveEmployees } = await $api('users/count')

const widgetData = ref([
    { title: 'Total Leads', value: 10, icon: 'ri-group-line', iconColor: 'primary' },
    { title: 'Leads this month', value: 5, icon: 'ri-user-follow-line', iconColor: 'success' },
    { title: 'Closed leads', value: 5, icon: 'ri-user-add-line', iconColor: 'error' },
    { title: 'Total amount', value: '$1,000', icon: 'ri-user-search-line', iconColor: 'warning' },
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
                            :items="statuses" clearable clear-icon="ri-close-line" chips />
                    </VCol>

                    <VCol cols="12" sm="3">
                        <!-- 👉 Search  -->
                        <VTextField v-model="searchQuery" placeholder="Filter by User" label="Filter by User"
                            density="comfortable" clearable class="me-4" />
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
                <VBtn @click="isAddNewLeadDrawerVisible = true" prepend-icon="ri-user-add-fill">
                    Add New Lead
                </VBtn>
            </VCardText>

            <!-- SECTION datatable -->
            <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:model-value="selectedRows" hover show-select
                :loading="tableLoading" loading-text="Loading Employees..." :disable-sort="tableLoading" fixed-header
                style="max-height: 500px;" v-model:page="page" :items="leads" item-value="id" :items-length="totalLeads"
                :headers="headers" class="text-no-wrap rounded-0" @update:options="updateOptions" density="default">

                <!-- Customer Name -->
                <template #item.customer="{ item }: { item: any }">
                    {{ item.customer.name }}
                </template>

                <!-- Lead Source -->
                <template #item.lead_source="{ item }: { item: any }">
                    {{ item.lead_source.name }}
                </template>

                <!-- Lead Source -->
                <template #item.brand="{ item }: { item: any }">
                    {{ item.brand.name }}
                </template>

                <!-- Service sold -->
                <template #item.services="{ item }: { item: any }">
                    {{ item.services_sold_count }}
                </template>

                <!-- Upsells-->
                <template #item.upsells="{ item }: { item: any }">
                    {{ item.upsells_count }}
                </template>

                <!-- Status -->
                <template #item.status="{ item }: { item: any }">
                    {{ item.status }}
                    <!-- <VChip :color="resolveUserStatusVariant(item.status.value)" size="small" class="text-uppercase"
                        elevation="5">
                        {{ item.status.label }}
                    </VChip> -->
                </template>

                <!-- Remarks -->
                <template #item.remarks="{ item }: { item: any }">
                    <span v-if="item.remarks">
                        {{ item.remarks }}
                    </span>
                    <span v-else>
                        None
                    </span>
                </template>

                <!-- Lead closed date -->
                <template #item.lead_closed_date="{ item }: { item: any }">
                    <span v-if="item.lead_closed_date">
                        {{ item.lead_closed_date }}
                    </span>
                    <span v-else>
                        Not closed
                    </span>
                </template>

                <!-- Lead closed amount -->
                <template #item.lead_closed_amount="{ item }: { item: any }">
                    {{ item.lead_closed_amount }}
                </template>

                <!-- Created at -->
                <template #item.created_at="{ item }: { item: any }">
                    {{ item.created_at }}
                </template>

                <!-- Actions -->
                <template #item.actions="{ item }: { item: any }">
                    <IconBtn size="small" :disabled="tableLoading" color="info">
                        <VIcon icon="ri-eye-line" />
                        <VTooltip activator="parent" location="top">
                            View
                        </VTooltip>
                    </IconBtn>

                    <IconBtn size="small" @click="openEditLeadForm(item)" :disabled="tableLoading" color="primary">
                        <VIcon icon="ri-edit-box-line" />
                        <VTooltip activator="parent" location="top">
                            Edit
                        </VTooltip>
                    </IconBtn>

                    <IconBtn size="small" @click="isDeleteDialogVisible = true; leadToDelete = item.id" color="error"
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
                            {{ paginationMeta({ page, itemsPerPage }, totalLeads) }}
                        </p>

                        <div class="d-flex gap-x-2 align-center me-2">
                            <VBtn class="flip-in-rtl" icon="ri-arrow-left-s-line" variant="text" density="comfortable"
                                color="high-emphasis" :disabled="page <= 1" @click="page <= 1 ? page = 1 : page--" />

                            <VBtn class="flip-in-rtl" icon="ri-arrow-right-s-line" density="comfortable" variant="text"
                                color="high-emphasis" :disabled="page >= Math.ceil(totalLeads / itemsPerPage)"
                                @click="page >= Math.ceil(totalLeads / itemsPerPage) ? page = Math.ceil(totalLeads / itemsPerPage) : page++" />
                        </div>
                    </div>
                </template>

            </VDataTableServer>
            <!-- SECTION -->
        </VCard>

        <!-- 👉 Add New Lead -->
        <!-- <AddNewUserDrawer v-model:isDrawerOpen="isAddNewLeadDrawerVisible" @user-data="addNewLead" :status="statuses"
            ref="addNewLeadDrawerRef" :roles="roles" :departments="departments" :errors="errors" /> -->

        <!-- 👉 Edit Lead -->
        <!-- <EditUserDrawer v-model:isDrawerOpen="isEditLeadDrawerVisible" @user-data="editLead" :status="statuses"
            :user="selectedLead" ref="editLeadDrawerRef" :roles="roles" :departments="departments" :errors="errors" /> -->

        <VSnackbar v-model="isSnackBarVisible">
            {{ leadResponsemessage }}
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
                    Are you sure you want to delete this lead?
                </VCardText>

                <VCardText class="d-flex align-center justify-center gap-4">
                    <VBtn variant="elevated" @click="deleteLead()" color="error">
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

<script setup lang="ts">

const $toast = useToast();

// Get currently logged in user data
const userData = useCookie('userData').value

// 👉 Filters
const selectedUser = ref([])
const selectedCustomers = ref([])
const selectedLeadSources = ref([])
const selectedBrands = ref([])
const searchRemarks = ref()
const selectedServices = ref([])
const selectedStatuses = ref([])
const selectedClosedDateRange = ref()
const selectedCreatedAtRange = ref()
const selectedCloseAmount = ref()

const selectedLead = ref<Record<string, any>>({})
let leadToDelete: number
const assignedUser = ref()

// Data table options
const itemsPerPage = ref(20)
const page = ref(1)
const sortBy = ref('id')
const orderBy = ref<boolean | 'asc' | 'desc'>('desc')
const tableLoading = ref(false)

// Child component refs
const addNewLeadDrawerRef = ref()
const editLeadDrawerRef = ref()
const addLeadDetailsDrawerRef = ref()

// Update data table options
const updateOptions = (options: any) => {
    sortBy.value = options.sortBy[0]?.key
    orderBy.value = options.sortBy[0]?.order
}

// Headers
const headers = [
    { title: '', key: 'data-table-expand' },
    { title: 'ID', key: 'id' },
    { title: 'Created By', key: 'created_by' },
    { title: 'Assigned By', key: 'assigned_by' },
    { title: 'Assigned To', key: 'assigned_to' },
    { title: 'Campaign', key: 'campaign' },
    { title: 'Customer name', key: 'customer_id' },
    { title: 'Lead Source', key: 'lead_source_id' },
    { title: 'Brand', key: 'brand_id' },
    { title: 'Services sold', key: 'services', sortable: false },
    { title: 'Upsells', key: 'upsells', sortable: false },
    { title: 'Status', key: 'status' },
    { title: 'Remarks', key: 'remarks' },
    { title: 'Lead closed date', key: 'lead_closed_date' },
    { title: 'Lead closed amount', key: 'lead_closed_amount' },
    { title: 'Created at', key: 'created_at' },
    { title: 'Updated at', key: 'updated_at' },
    { title: 'Created at (by Country)', key: 'created_at_country', sortable: false },
    { title: 'Updated at (by Country)', key: 'updated_at_country', sortable: false },
    { title: 'Actions', key: 'actions', sortable: false },
]
const expandedRowDTHeader = [
    { title: '#', key: 'sr' },
    { title: 'Sales Agent', key: 'agent' },
    { title: 'Contact Status', key: 'contact_status' },
    { title: 'Notes', key: 'notes' },
    { title: 'Follow-up', key: 'follow_up' },
    { title: 'Final Status', key: 'final_status' },
    { title: 'Final Status Date/Time', key: 'final_status_date' },
    { title: 'Call Status', key: 'call_status' },
    { title: 'Call Status Date/Time', key: 'call_date' },
    { title: 'Email Status', key: 'email_status' },
    { title: 'Email Status Date/Time', key: 'email_date' },
    { title: 'SMS Status', key: 'sms_status' },
    { title: 'SMS Status Date/Time', key: 'sms_date' },
    { title: 'Created at', key: 'created_at' },
]

// Expanded rows
const expandedRows = ref([])

const toggleExpand = (item: any) => {
    const index = expandedRows.value.indexOf(item.id as never);
    if (index !== -1) {
        expandedRows.value.splice(index, 1); // Collapse the row
    } else {
        expandedRows.value.push(item.id as never); // Expand the row
    }
}

const isRowExpanded = (item: any) => {
    return expandedRows.value.includes(item.id as never);
}

// 👉 Fetching leads
const { data: leadsData, execute: fetchLeads, isFetching } = await useApi<any>(createUrl('leads', {
    query: {
        'users[]': selectedUser,
        'customers[]': selectedCustomers,
        'leadSources[]': selectedLeadSources,
        'brands[]': selectedBrands,
        'services[]': selectedServices,
        'statuses[]': selectedStatuses,
        remarks: searchRemarks,
        leadClosedDateRange: selectedClosedDateRange,
        createdAtRange: selectedCreatedAtRange,
        leadClosedAmount: selectedCloseAmount,
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

const { services } = await $api('services')
const { brands } = await $api('brands')
const { customers } = await $api('customers')
const { leadsources } = await $api('leadsources')
const { statuses } = await $api('leads/statuses')
const { users } = await $api('users', {
    query: {
        'departments[]': ['admin', 'sales', 'lead_generation'] // Sales, Lead Generation & Admin departments
    }
})
const salesAgentUsers = await $api('users', {
    query: {
        'roles[]': ['sales_agent'],
        'departments[]': ['sales'],
    }
}).then(({ users }) => users.map((u: any) => ({ title: u.name, value: u.id })))
const { campaigns } = await $api('campaigns')

const _services = services.map((s: any) => ({ title: s.name, value: s.id }))
const _brands = brands.map((b: any) => ({ title: b.name, value: b.id }))
const _customers = customers.map((c: any) => ({ title: c.full_name, value: c.id }))
const leadSources = leadsources.map((ls: any) => ({ title: ls.name, value: ls.id }))
const createdByUsers = users.map((u: any) => ({ title: u.name, value: u.id }))
createdByUsers.unshift({ title: 'Me', value: userData.id })

// Drawers
const isAddNewLeadDrawerVisible = ref(false)
const isEditLeadDrawerVisible = ref(false)
const isAddLeadDetailsDrawerVisible = ref(false)

// Dialogs
const isDeleteDialogVisible = ref(false)
const isLeadAssigningDialogVisible = ref(false)
const isLeadPickingDialogVisible = ref(false)

// 👉 Add new lead
const addNewLead = async (leadData: any) => {
    const { success, message } = await $api('leads', {
        method: 'POST',
        body: leadData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    if (success) {
        $toast.success(message)
        addNewLeadDrawerRef.value.closeNavigationDrawer()
        fetchLeads()
        fetchLeadsCount()
    } else {
        $toast.error(message)
    }
}

// 👉 Add lead details
const addLeadDetails = async (leadDetails: any) => {
    const { success, message } = await $api(`leads/${selectedLead.value.id}/details`, {
        method: 'POST',
        body: leadDetails,
        onResponseError({ response }) {
            $toast.error('Something went wrong! Please try again or report to the developers.')
        },
    })

    if (success) {
        $toast.success(message)
        addLeadDetailsDrawerRef.value.closeNavigationDrawer()
        fetchLeads()
    } else {
        $toast.error(message)
    }
}

// 👉 Edit lead
const editLead = async (leadData: any) => {
    const { success, message } = await $api(`leads/${selectedLead.value.id}`, {
        method: 'PUT',
        body: leadData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    if (success) {
        $toast.success(message)
        editLeadDrawerRef.value.closeNavigationDrawer()
        fetchLeads()
        fetchLeadsCount()
    } else {
        $toast.error(message)
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
        $toast.success(message)
        fetchLeads()
        fetchLeadsCount()
    } else {
        $toast.error(message)
    }
}

const errors = ref<Record<string, any>>({
    customer: undefined,
    services: undefined,
    lead_source: undefined,
    brand: undefined,
    status: undefined,
    remarks: undefined,
    lead_closed_amount: undefined,
    lead_closed_date: undefined,
    assigned_to: undefined,
    campaign: undefined,
})

const leadsCountData = ref({
    totalLeads: 0,
    leadsThisMonth: 0,
    closedLeads: 0,
    totalAmount: {
        usd: '',
        gbp: '',
    },
})

// 👉 Get leads count for top cards
const { execute: fetchLeadsCount, isFetching: isLeadsCountFetching } = await useApi<any>(createUrl('leads/count'), {
    afterFetch: ctx => {
        leadsCountData.value.totalLeads = ctx.data.totalLeads
        leadsCountData.value.leadsThisMonth = ctx.data.leadsThisMonth
        leadsCountData.value.closedLeads = ctx.data.closedLeads

        leadsCountData.value.totalAmount = {
            usd: currencyFormatter(ctx.data.totalAmount?.usd || 0, 'usd'),
            gbp: currencyFormatter(ctx.data.totalAmount?.gbp || 0, 'gbp'),
        }

        return ctx
    },
})

const widgetData = computed(() => ([
    { title: 'Total Leads', value: leadsCountData.value.totalLeads, icon: 'ri-group-line', iconColor: 'primary' },
    { title: 'Leads this month', value: leadsCountData.value.leadsThisMonth, icon: 'ri-user-follow-line', iconColor: 'success' },
    { title: 'Closed leads', value: leadsCountData.value.closedLeads, icon: 'ri-user-add-line', iconColor: 'error' },
    {
        title: 'Total amount',
        value: leadsCountData.value.totalAmount,
        icon: 'ri-user-search-line',
        iconColor: 'warning'
    },
]))

watch(isEditLeadDrawerVisible, editDrawer => {
    if (!editDrawer)
        selectedLead.value = {}
})


const canEditLeads =
    (lead: any) =>
        (userData.department.value === 'admin' && userData.role.value === 'admin') ||
        (userData.department.value === 'lead_generation' && userData.id == lead.created_by.id) ||
        (userData.department.value === 'sales' && userData.role.value === 'team_lead')

const canDeleteLeads =
    (lead: any) => (isNullOrUndefined(lead.assigned_to)) &&
        ((userData.department.value === 'admin' && userData.role.value === 'admin') ||
            (userData.department.value === 'lead_generation' && userData.id == lead.created_by.id) ||
            (userData.department.value === 'sales' && userData.role.value === 'team_lead'))

const canAssignLeads =
    (lead: any) => (
        (isNullOrUndefined(lead.assigned_to)) &&
        ((userData.department.value === 'admin' && userData.role.value === 'admin') ||
            (userData.department.value === 'sales' && userData.role.value === 'team_lead'))
    ) || (isCurrentUserSalesAgent && lead.lead_source?.type === 'unpaid' && lead.assigned_to?.id == userData.id)

const canPickLeads =
    (lead: any) => (isNullOrUndefined(lead.assigned_to)) &&
        (lead.lead_source?.type === 'unpaid') &&
        (userData.department.value === 'sales' && userData.role.value === 'sales_agent')

const canAddLeadDetails =
    (lead: any) => (
        (userData.department.value === 'sales' && userData.role.value === 'sales_agent') &&
        (userData.id == lead.assigned_to?.id)
    )

const isCurrentUserSalesAgent = computed(() => (userData.department.value === 'sales' && userData.role.value === 'sales_agent'))


const assignLead = async (assignedTo: number) => {
    if (!assignedTo) {
        errors.value.assigned_to = 'Please select the sales agent'
    }

    const { success, message } = await $api(`leads/${selectedLead.value.id}/assign`, {
        body: { assignedTo },
        method: 'PATCH'
    })

    if (success) {
        $toast.success(message)
        isLeadAssigningDialogVisible.value = false
        selectedLead.value = {}
        assignedUser.value = undefined
        fetchLeads()
    } else {
        $toast.error(message)
    }
}

const pickLead = async () => {
    const { success, message } = await $api(`leads/${selectedLead.value.id}/pick`, {
        method: 'PATCH'
    })

    if (success) {
        $toast.success(message)
        isLeadPickingDialogVisible.value = false
        selectedLead.value = {}
        fetchLeads()
    } else {
        $toast.error(message)
    }
}

watch(assignedUser, () => {
    errors.value.assigned_to = undefined
})

</script>

<template>
    <section>
        <VBtn prepend-icon="ri-kanban-view" class="mb-3" :to="{ name: 'leads-kanban' }">Kanban View</VBtn>
        <!-- 👉 Widgets -->
        <div class="d-flex mb-6">
            <VRow>
                <template v-for="(data, id) in widgetData" :key="id">
                    <VCol cols="12" md="3" sm="6">
                        <VCard class="d-flex align-center" height="100%" :loading="isLeadsCountFetching">
                            <VCardText>
                                <div class="d-flex justify-space-between align-center">
                                    <div class="d-flex flex-column gap-y-1">
                                        <span class="text-base text-high-emphasis">{{ data.title }}</span>
                                        <template v-if="typeof data.value === 'number'">
                                            <h4 class="text-h4 d-flex align-center gap-2 font-weight-bold">
                                                {{ data.value }}
                                            </h4>
                                        </template>

                                        <template v-else>
                                            <template v-for="(amount, id) in data.value" :key="id">
                                                <h4 class="text-h4 d-flex align-center gap-2 font-weight-bold">
                                                    {{ amount }} - {{ id.toUpperCase() }}
                                                </h4>
                                            </template>
                                        </template>
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
                    <!-- 👉 Select Customers -->
                    <VCol>
                        <VAutocomplete v-model="selectedCustomers" multiple label="Filter by Customers"
                            placeholder="Filter by Customers" :items="_customers" clearable chips />
                    </VCol>

                    <!-- 👉 Select Lead Sources -->
                    <VCol>
                        <VAutocomplete v-model="selectedLeadSources" multiple label="Filter by Lead Sources"
                            placeholder="Filter by Lead Sources" :items="leadSources" clearable chips />
                    </VCol>

                    <!-- 👉 Select Brands -->
                    <VCol>
                        <VAutocomplete v-model="selectedBrands" multiple label="Filter by Brands"
                            placeholder="Filter by Brands" :items="_brands" clearable chips />
                    </VCol>

                    <!-- 👉 Select Services -->
                    <VCol>
                        <VAutocomplete v-model="selectedServices" multiple label="Filter by Services sold"
                            placeholder="Filter by Services sold" :items="_services" clearable chips />
                    </VCol>

                    <!-- 👉 Search Remarks  -->
                    <VCol>
                        <VTextField v-model="searchRemarks" density="comfortable" clearable
                            placeholder="Filter by Remarks" label="Filter by Remarks" />
                    </VCol>
                </VRow>

                <VRow>
                    <!-- 👉 Select Agent -->
                    <VCol>
                        <VAutocomplete v-model="selectedUser" multiple label="Filter by Created by"
                            placeholder="Filter by Created by" :items="createdByUsers" clearable chips />
                    </VCol>

                    <!-- 👉 Select Statuses -->
                    <VCol>
                        <VSelect v-model="selectedStatuses" multiple label="Filter by Statuses"
                            placeholder="Filter by Statuses" :items="statuses" clearable chips />
                    </VCol>

                    <!-- 👉 Select Lead closed date range -->
                    <VCol>
                        <AppDateTimePicker v-model="selectedClosedDateRange" label="Filter by lead closed date range"
                            placeholder="Filter by lead closed date range" clearable
                            :config="{ dateFormat: 'd-m-Y', mode: 'range' }" />
                    </VCol>

                    <!-- 👉 Select Lead closed amount  -->
                    <VCol>
                        <VTextField v-model="selectedCloseAmount" type="number"
                            placeholder="Filter by Lead closed amount" label="Filter by Lead closed amount"
                            density="comfortable" clearable />
                    </VCol>

                    <!-- 👉 Select Lead closed date range -->
                    <VCol>
                        <AppDateTimePicker v-model="selectedCreatedAtRange" label="Filter by lead created at date range"
                            placeholder="Filter by lead created at date range" clearable
                            :config="{ dateFormat: 'd-m-Y, G:i K', mode: 'range', enableTime: true }" />
                    </VCol>
                </VRow>
            </VCardText>

            <VDivider />

            <VCardText class="d-flex flex-wrap gap-4">
                <!-- 👉 Export & import buttons -->
                <!-- <VBtn color="success" prepend-icon="ri-upload-2-line">
                    Import
                </VBtn>
                <VBtn color="secondary" prepend-icon="ri-download-2-line">
                    Export
                </VBtn> -->
                <template v-if="userData.role.value !== 'sales_agent'">
                    <VSpacer />
                    <VBtn @click="isAddNewLeadDrawerVisible = true" prepend-icon="ri-user-add-fill">
                        Add New Lead
                    </VBtn>
                </template>
            </VCardText>

            <!-- SECTION datatable -->
            <VDataTableServer v-model:items-per-page="itemsPerPage" hover :expanded="expandedRows" show-expand
                :sort-by="[{ key: sortBy, order: orderBy }]" :loading="tableLoading" loading-text="Loading Leads..."
                :disable-sort="tableLoading" fixed-header style="max-height: 700px;" v-model:page="page" :items="leads"
                item-value="id" :items-length="totalLeads" :headers="headers" class="text-no-wrap rounded-0"
                @update:options="updateOptions" density="default"
                :cell-props="data => (!isEmptyArray(data.item?.details) && data.column.key !== 'actions' ? { onClick: () => toggleExpand(data.item), style: { cursor: 'pointer' } } : {})">

                <!-- Expanded Icon -->
                <template #item.data-table-expand="{ item }: { item: any }">
                    <VIcon v-if="!isEmptyArray(item.details)"
                        :icon="isRowExpanded(item) ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'" />
                </template>

                <!-- Expanded row -->
                <template #expanded-row="{ columns, item }: { columns: any[], item: any }">
                    <tr>
                        <td :colspan="columns.length" class="pa-0">
                            <VDataTable :headers="expandedRowDTHeader" :items="item.details" hide-default-footer hover>
                                <template #item.sr="{ index }">
                                    {{ index + 1 }}
                                </template>

                                <template #item.agent="{ item }: { item: any }">
                                    {{ item.agent.name }}
                                </template>
                            </VDataTable>
                        </td>
                    </tr>
                </template>

                <!-- Create BY -->
                <template #item.created_by="{ item }: { item: any }">
                    {{ item.created_by?.name }}
                </template>

                <!-- Assigned By -->
                <template #item.assigned_by="{ item }: { item: any }">
                    <template v-if="item.assigned_by">{{ item.assigned_by?.name }}</template>
                    <span v-else class="text-error font-weight-bold">Not Assigned</span>
                </template>

                <!-- Assigned By -->
                <template #item.assigned_to="{ item }: { item: any }">
                    <template v-if="item.assigned_to">{{ item.assigned_to?.name }}</template>
                    <span v-else class="text-error font-weight-bold">Not Assigned</span>
                </template>

                <!-- Campaign -->
                <template #item.campaign="{ item }: { item: any }">
                    {{ item.campaign?.name }}
                </template>

                <!-- Customer Name -->
                <template #item.customer_id="{ item }: { item: any }">
                    {{ item.customer.name }}
                </template>

                <!-- Lead Source -->
                <template #item.lead_source_id="{ item }: { item: any }">
                    {{ item.lead_source.name }}
                </template>

                <!-- Lead Source -->
                <template #item.brand_id="{ item }: { item: any }">
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
                    <!-- {{ item.status }} -->
                    <VChip :color="resolveLeadStatusVariant(item.status)" size="small" class="text-uppercase"
                        elevation="5">
                        {{ item.status }}
                    </VChip>
                </template>

                <!-- Remarks -->
                <template #item.remarks="{ item }: { item: any }">
                    <div v-if="item.remarks" style="white-space: pre-wrap; width: 300px; padding: 10px 0;">
                        {{ item.remarks }}
                    </div>
                    <span v-else class="text-error font-weight-bold">None</span>
                </template>

                <!-- Lead closed date -->
                <template #item.lead_closed_date="{ item }: { item: any }">
                    <span v-if="item.lead_closed_date">
                        {{ item.lead_closed_date }}
                    </span>
                    <span v-else class="text-error font-weight-bold">
                        Not closed
                    </span>
                </template>

                <!-- Lead closed amount -->
                <template #item.lead_closed_amount="{ item }: { item: any }">
                    <span v-if="item.lead_closed_date">
                        {{ currencyFormatter(item.lead_closed_amount, item.brand.currency.name) }}
                    </span>
                    <span v-else class="text-error font-weight-bold">
                        Not closed
                    </span>
                </template>

                <!-- Created at -->
                <template #item.created_at="{ item }: { item: any }">
                    {{ item.created_at }}
                </template>

                <!-- Actions -->
                <template #item.actions="{ item }: { item: any }">

                    <!-- <IconBtn v-if="canViewLeadDetails(item)" size="small" :disabled="tableLoading" color="info"
                        @click="isViewLeadDetailsDrawerVisible = true; selectedLead = item">
                        <VIcon icon="ri-eye-line" />
                        <VTooltip activator="parent" location="top">
                            View
                        </VTooltip>
                    </IconBtn> -->

                    <IconBtn v-if="canAssignLeads(item)" size="small"
                        @click="isLeadAssigningDialogVisible = true; selectedLead = item" color="success"
                        :disabled="tableLoading">
                        <VIcon icon="ri-user-shared-line" />
                        <VTooltip activator="parent" location="top">
                            Assign lead
                        </VTooltip>
                    </IconBtn>

                    <IconBtn v-else-if="canPickLeads(item)" size="small"
                        @click="isLeadPickingDialogVisible = true; selectedLead = item;" :disabled="tableLoading"
                        color="success">
                        <VIcon icon="ri-user-received-line" />
                        <VTooltip activator="parent" location="top">
                            Pick lead
                        </VTooltip>
                    </IconBtn>

                    <IconBtn v-if="canAddLeadDetails(item)" size="small" color="accent"
                        @click="isAddLeadDetailsDrawerVisible = true; selectedLead = item">
                        <VIcon icon="ri-add-circle-line" />
                        <VTooltip activator="parent" location="top">
                            Add details
                        </VTooltip>
                    </IconBtn>


                    <IconBtn v-if="canEditLeads(item)" size="small" @click="openEditLeadForm(item)"
                        :disabled="tableLoading" color="primary">
                        <VIcon icon="ri-edit-box-line" />
                        <VTooltip activator="parent" location="top">
                            Edit
                        </VTooltip>
                    </IconBtn>

                    <IconBtn v-if="canDeleteLeads(item)" size="small"
                        @click="isDeleteDialogVisible = true; leadToDelete = item.id" color="error"
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
        <AddNewLeadDrawer ref="addNewLeadDrawerRef" v-model:isDrawerOpen="isAddNewLeadDrawerVisible"
            @lead-data="addNewLead" :statuses :brands="_brands" :customers="_customers" :lead-sources="leadSources"
            :services="_services" :errors="errors" :userData :campaigns />

        <!-- 👉 Edit Lead -->
        <EditLeadDrawer ref="editLeadDrawerRef" v-model:isDrawerOpen="isEditLeadDrawerVisible" @lead-data="editLead"
            :statuses :brands="_brands" :customers="_customers" :lead-sources="leadSources" :services="_services"
            :lead="selectedLead" :errors="errors" :userData :campaigns />

        <!-- 👉 Add Lead Details -->
        <AddLeadDetailsDrawer ref="addLeadDetailsDrawerRef" v-if="isCurrentUserSalesAgent"
            v-model:isDrawerOpen="isAddLeadDetailsDrawerVisible" :statuses @add-lead-details="addLeadDetails" />

        <!-- 👉 View Lead Details -->
        <!-- <ViewLeadDetailsDrawer v-model:isDrawerOpen="isViewLeadDetailsDrawerVisible" :lead="selectedLead" /> -->

        <!-- Lead assigning dialog -->
        <VDialog v-model="isLeadAssigningDialogVisible" width="600">
            <VCard title="Select sales agent" class="pb-5">
                <DialogCloseBtn variant="text" size="default"
                    @click="isLeadAssigningDialogVisible = false; assignedUser = undefined; errors.assigned_to = undefined" />

                <VCardText>
                    <VAutocomplete v-model="assignedUser" :items="salesAgentUsers" clearable chips
                        :error-messages="errors.assigned_to" label="Select sales agent to assign lead"
                        placeholder="Select sales agent to assign lead" />
                </VCardText>

                <VCardText class="d-flex align-center justify-center gap-4">
                    <VBtn variant="elevated" @click="assignLead(assignedUser)" color="success">
                        Confirm
                    </VBtn>

                    <VBtn color="secondary" variant="outlined"
                        @click="isLeadAssigningDialogVisible = false; assignedUser = undefined; errors.assigned_to = undefined">
                        Cancel
                    </VBtn>
                </VCardText>
            </VCard>
        </VDialog>

        <!-- Lead picking dialog -->
        <VDialog v-model="isLeadPickingDialogVisible" width="400">
            <VCard title="Confirmation" class="pb-5">
                <DialogCloseBtn variant="text" size="default" @click="isLeadPickingDialogVisible = false" />

                <VCardText>
                    Are you sure you want to pick this lead?
                </VCardText>

                <VCardText class="d-flex align-center justify-center gap-4">
                    <VBtn variant="elevated" @click="pickLead" color="success">
                        Confirm
                    </VBtn>

                    <VBtn color="secondary" variant="outlined" @click="isLeadPickingDialogVisible = false;">
                        Cancel
                    </VBtn>
                </VCardText>
            </VCard>
        </VDialog>

        <!-- Delete Dialog -->
        <VDialog v-model="isDeleteDialogVisible" width="400">
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

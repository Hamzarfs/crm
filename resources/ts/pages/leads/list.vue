<script setup lang="ts">


// 👉 Store
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

// Data table options
const itemsPerPage = ref(20)
const page = ref(1)
const sortBy = ref('id')
const orderBy = ref<boolean | 'asc' | 'desc'>('desc')
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
    { title: 'Services sold', key: 'services', sortable: false },
    { title: 'Upsells', key: 'upsells', sortable: false },
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

const statuses = ['No answer', 'Hung up', 'Wrong number', 'Voice mail', 'Found someone', 'Follow up', 'Not interested', 'Blocked', 'Sale closed', 'Cant connect', 'Not in service', 'Invalid lead', 'Email done', 'Call done', 'No number', 'Not interested', 'Interested']

const { services } = await $api('services')
const { brands } = await $api('brands')
const { customers } = await $api('customers')
const { leadsources } = await $api('leadsources')

const _services = services.map((s: any) => ({ title: s.name, value: s.id }))
const _brands = brands.map((b: any) => ({ title: b.name, value: b.id }))
const _customers = customers.map((c: any) => ({ title: c.full_name, value: c.id }))
const _leadSources = leadsources.map((ls: any) => ({ title: ls.name, value: ls.id }))

const resolveLeadStatusVariant = (status: string) => {
    const successStatuses = ['Sale closed']
    const errorStatuses = ['No answer', 'Hung up', 'Wrong number', 'Voice mail', 'Found someone', 'Not interested', 'Blocked', 'Cant connect', 'Not in service', 'Invalid lead', 'No number', 'Not interested']

    if (successStatuses.includes(status))
        return 'success'
    else if (errorStatuses.includes(status))
        return 'error'
    else
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
        fetchLeadsCount()
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
        isSnackBarVisible.value = true
        leadResponsemessage = message
        editLeadDrawerRef.value.closeNavigationDrawer()
        fetchLeads()
        fetchLeadsCount()
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
        fetchLeadsCount()
    }
}

const errors = ref({
    customer: undefined,
    services: undefined,
    lead_source: undefined,
    brand: undefined,
    status: undefined,
    remarks: undefined,
    lead_closed_amount: undefined,
    lead_closed_date: undefined,
})

const leadsCountData = ref({
    totalLeads: 0,
    leadsThisMonth: 0,
    closedLeads: 0,
    totalAmount: 0,
})

// 👉 Get leads count for top cards
const { execute: fetchLeadsCount, isFetching: isLeadsCountFetching } = await useApi<any>(createUrl('leads/count'), {
    afterFetch: ctx => {
        leadsCountData.value.totalLeads = ctx.data.totalLeads
        leadsCountData.value.leadsThisMonth = ctx.data.leadsThisMonth
        leadsCountData.value.closedLeads = ctx.data.closedLeads
        leadsCountData.value.totalAmount = ctx.data.totalAmount

        return ctx
    },
})

const widgetData = computed(() => ([
    { title: 'Total Leads', value: leadsCountData.value.totalLeads, icon: 'ri-group-line', iconColor: 'primary' },
    { title: 'Leads this month', value: leadsCountData.value.leadsThisMonth, icon: 'ri-user-follow-line', iconColor: 'success' },
    { title: 'Closed leads', value: leadsCountData.value.closedLeads, icon: 'ri-user-add-line', iconColor: 'error' },
    { title: 'Total amount', value: currencyFormatter(leadsCountData.value.totalAmount as number), icon: 'ri-user-search-line', iconColor: 'warning' },
]))

watch(isEditLeadDrawerVisible, editDrawer => {
    if (!editDrawer)
        selectedLead.value = {}
})

</script>

<template>
    <section>
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
                    <!-- 👉 Select Customers -->
                    <VCol>
                        <VAutocomplete v-model="selectedCustomers" multiple label="Filter by Customers"
                            placeholder="Filter by Customers" :items="_customers" clearable chips />
                    </VCol>

                    <!-- 👉 Select Lead Sources -->
                    <VCol>
                        <VAutocomplete v-model="selectedLeadSources" multiple label="Filter by Lead Sources"
                            placeholder="Filter by Lead Sources" :items="_leadSources" clearable chips />
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
                :sort-by="[{ key: sortBy, order: orderBy }]" :loading="tableLoading" loading-text="Loading Leads..."
                :disable-sort="tableLoading" fixed-header style="max-height: 500px;" v-model:page="page" :items="leads"
                item-value="id" :items-length="totalLeads" :headers="headers" class="text-no-wrap rounded-0"
                @update:options="updateOptions" density="default">

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
                    <!-- {{ item.status }} -->
                    <VChip :color="resolveLeadStatusVariant(item.status)" size="small" class="text-uppercase"
                        elevation="5">
                        {{ item.status }}
                    </VChip>
                </template>

                <!-- Remarks -->
                <template #item.remarks="{ item }: { item: any }">
                    <span v-if="item.remarks">
                        {{ item.remarks }}
                    </span>
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
                        {{ currencyFormatter(item.lead_closed_amount) }}
                        <!-- ${{ item.lead_closed_amount }} -->
                    </span>
                    <span v-else class="text-error font-weight-bold">
                        Not closed
                    </span>
                    <!-- ${{ item.lead_closed_amount }} -->
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
        <AddNewLeadDrawer ref="addNewLeadDrawerRef" v-model:isDrawerOpen="isAddNewLeadDrawerVisible"
            @lead-data="addNewLead" :statuses :brands="_brands" :customers="_customers" :lead-sources="_leadSources"
            :services="_services" :errors="errors" />

        <!-- 👉 Edit Lead -->
        <EditLeadDrawer ref="editLeadDrawerRef" v-model:isDrawerOpen="isEditLeadDrawerVisible" @lead-data="editLead"
            :statuses :brands="_brands" :customers="_customers" :lead-sources="_leadSources" :services="_services"
            :lead="selectedLead" :errors="errors" />

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

<script setup lang="ts">

    import { PerfectScrollbar } from 'vue3-perfect-scrollbar';



    interface Props {
        isDrawerOpen: boolean
        lead: Record<string, any>
    }

    interface Emits {
        (e: 'update:isDrawerOpen', value: boolean): void
    }

    const props = defineProps<Props>()
    const emit = defineEmits<Emits>()

    // 👉 Drawer close
    const closeNavigationDrawer = () => {
        emit('update:isDrawerOpen', false)
    }

    const handleDrawerModelValueUpdate = (val: boolean) => {
        emit('update:isDrawerOpen', val)
    }



    const agentFollowupsTableData = {
        headers: [
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
        ],
        data: props.lead?.details
    }

    watch(() => props.lead, lead => {
        agentFollowupsTableData.data = lead.details
    })


</script>

<template>
    <VNavigationDrawer temporary :width="1000" location="start" class="scrollable-content"
        :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">

        <!-- 👉 Title -->
        <AppDrawerHeaderSection title="Lead Details" @cancel="closeNavigationDrawer" />

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false, suppressScrollX: true }">
            <VCard flat>
                <VCardText>
                    <VRow>
                        <VCol cols="6" class="pb-0">
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>ID:</span>
                                <b>{{ props.lead?.id }}</b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Created By:</span>
                                <b>{{ props.lead?.created_by?.name }}</b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Assigned By:</span>
                                <b :class="{ 'text-error': isNullOrUndefined(props.lead?.assigned_by) }">
                                    {{ props.lead?.assigned_by?.name ?? 'Not assigned' }}
                                </b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Assigned To:</span>
                                <b :class="{ 'text-error': isNullOrUndefined(props.lead?.assigned_to) }">
                                    {{ props.lead?.assigned_to?.name ?? 'Not assigned' }}
                                </b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Campaign:</span>
                                <b>{{ props.lead?.campaign?.name }}</b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Lead source:</span>
                                <b>{{ props.lead?.lead_source?.name }}</b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Status:</span>
                                <VChip :color="resolveLeadStatusVariant(props.lead?.status)" size="small"
                                    class="text-uppercase" elevation="5">
                                    {{ props.lead?.status }}
                                </VChip>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Brand:</span>
                                <b>{{ props.lead?.brand?.name }}</b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Services sold:</span>
                                <b>{{ props.lead?.services_sold_count }}</b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Upsells:</span>
                                <b>{{ props.lead?.upsells_count }}</b>
                            </div>
                        </VCol>

                        <VCol cols="6" class="pb-0">
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Customer:</span>
                                <b>{{ props.lead?.customer?.name }}</b>
                            </div>
                            <div class="d-flex ga-2 justify-space-between align-center border-b mb-2 pb-2">
                                <span>Customer email:</span>
                                <b>{{ props.lead?.customer?.email }}</b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Customer phone:</span>
                                <b>{{ props.lead?.customer?.contact }}</b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Customer country:</span>
                                <b>{{ props.lead?.customer?.country }}</b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Lead closed date</span>
                                <b :class="{ 'text-error': isNullOrUndefined(props.lead?.lead_closed_date) }">
                                    {{ props.lead?.lead_closed_date ?? 'Not closed' }}
                                </b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Lead closed amount</span>
                                <b :class="{ 'text-error': isNullOrUndefined(props.lead?.lead_closed_amount) }">
                                    {{ props.lead?.lead_closed_amount ?
                                        currencyFormatter(props.lead?.lead_closed_amount,
                                            props.lead?.brand.currency.name) : 'Not closed' }}
                                </b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Created at</span>
                                <b>{{ props.lead?.created_at }}</b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Updated at</span>
                                <b>{{ props.lead?.updated_at }}</b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Created at (Country)</span>
                                <b>{{ props.lead?.created_at_country }}</b>
                            </div>
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <span>Updated at (Country)</span>
                                <b>{{ props.lead?.updated_at_country }}</b>
                            </div>
                        </VCol>

                        <VCol cols="12" class="pt-0">
                            <div class="d-flex justify-space-between align-center border-b mb-2 pb-2">
                                <div style="flex: 1;">Remarks:</div>
                                <b style="flex: 3; text-align: end;">{{ props.lead?.remarks }}</b>
                            </div>
                        </VCol>
                    </VRow>
                </VCardText>

                <VCardText>
                    <h1 class="mb-5">Agents Follow-ups</h1>

                    <VDataTable :headers="agentFollowupsTableData.headers" :items="agentFollowupsTableData.data"
                        hide-default-footer hover>
                        <template #item.sr="{ index }">
                            {{ index + 1 }}
                        </template>

                        <template #item.agent="{ item }: { item: any }">
                            {{ item.agent.name }}
                        </template>
                    </VDataTable>
                </VCardText>
            </VCard>
        </PerfectScrollbar>
    </VNavigationDrawer>
</template>

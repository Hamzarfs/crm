<script setup lang="ts">

import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import type { VForm } from 'vuetify/components/VForm';



interface Emit {
    (e: 'update:isDrawerOpen', value: boolean): void
    (e: 'leadData', value: any): void
}

interface Props {
    isDrawerOpen: boolean
    statuses: string[]
    customers: any[]
    leadSources: any[]
    brands: any[]
    services: any[]
    errors: Record<string, any>
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const isFormValid = ref(false)
const refForm = ref<VForm>()

const lead = ref({
    customer: undefined,
    lead_source: undefined,
    brand: undefined,
    status: undefined,
    remarks: undefined,
    lead_closed_date: undefined,
    lead_closed_amount: undefined,
    services: [],
})

// 👉 drawer close
const closeNavigationDrawer = () => {
    emit('update:isDrawerOpen', false)
    nextTick(() => {
        Object.assign(props.errors, {
            customer: undefined,
            services: undefined,
            lead_source: undefined,
            brand: undefined,
            status: undefined,
            remarks: undefined,
            lead_closed_amount: undefined,
            lead_closed_date: undefined,
        })
        refForm.value?.reset()
        refForm.value?.resetValidation()
    })
}

const onSubmit = () => {
    refForm.value?.validate().then(({ valid }) => {
        if (valid) {
            emit('leadData', lead.value)
        }
    })
}

defineExpose({
    closeNavigationDrawer
})

const handleDrawerModelValueUpdate = (val: boolean) => {
    emit('update:isDrawerOpen', val)
}

</script>

<template>

    <VNavigationDrawer temporary :width="600" location="end" class="scrollable-content"
        :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">

        <!-- 👉 Title -->
        <AppDrawerHeaderSection title="Add New Lead" @cancel="closeNavigationDrawer" />

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard flat>
                <VCardText>
                    <!-- 👉 Form -->
                    <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                        <VRow>
                            <!-- 👉 Customer -->
                            <VCol cols="12">
                                <VAutocomplete v-model="lead.customer" :rules="[requiredValidator]" label="Customer"
                                    :items="props.customers" placeholder="Select Customer"
                                    :error-messages="props.errors.customer" clearable />
                            </VCol>

                            <!-- 👉 Lead Source -->
                            <VCol cols="12">
                                <VSelect v-model="lead.lead_source" :rules="[requiredValidator]" label="Lead Source"
                                    :items="props.leadSources" placeholder="Select Lead source"
                                    :error-messages="props.errors.lead_source" clearable />
                            </VCol>

                            <!-- 👉 Brand -->
                            <VCol cols="12">
                                <VSelect v-model="lead.brand" :rules="[requiredValidator]" label="Brand"
                                    :items="props.brands" placeholder="Select Brand"
                                    :error-messages="props.errors.brand" clearable />
                            </VCol>

                            <!-- 👉 Status -->
                            <VCol cols="12">
                                <VAutocomplete v-model="lead.status" :items="props.statuses" label="Lead status"
                                    :rules="[requiredValidator]" placeholder="Select Lead status" clearable
                                    :error-messages="props.errors.status" />
                            </VCol>

                            <!-- 👉 Services -->
                            <VCol cols="12">
                                <VAutocomplete multiple chips v-model="lead.services" label="Service sold"
                                    :items="props.services" :rules="[requiredValidator]"
                                    placeholder="Select Service sold" clearable
                                    :error-messages="props.errors.services" />
                            </VCol>

                            <!-- 👉 Remarks -->
                            <VCol cols="12">
                                <VTextarea v-model="lead.remarks" label="Lead Remarks" placeholder="Lead Remarks"
                                    auto-grow rows="3" clearable :error-messages="props.errors.remarks" />
                            </VCol>

                            <!-- 👉 Closed Date -->
                            <VCol cols="12">
                                <AppDateTimePicker v-model="lead.lead_closed_date" label="Lead Close Date"
                                    placeholder="Lead Close Date" clearable :config="{ dateFormat: 'd-m-Y' }"
                                    :error-messages="props.errors.lead_closed_date" />
                            </VCol>

                            <!-- 👉 Closed Amount -->
                            <VCol cols="12">
                                <VTextField type="number" v-model="lead.lead_closed_amount" label="Lead Close Amount"
                                    placeholder="Lead Close Amount" clearable min="0.1" :rules="[numberValidator]"
                                    :error-messages="props.errors.lead_closed_amount" />
                            </VCol>

                            <!-- 👉 Submit and Cancel -->
                            <VCol cols="12">
                                <VBtn type="submit" class="me-4">
                                    Submit
                                </VBtn>
                                <VBtn type="reset" variant="outlined" color="error" @click="closeNavigationDrawer">
                                    Cancel
                                </VBtn>
                            </VCol>
                        </VRow>
                    </VForm>
                </VCardText>
            </VCard>
        </PerfectScrollbar>
    </VNavigationDrawer>
</template>

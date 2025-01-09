<script setup lang="ts">

    import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
    import type { VForm } from 'vuetify/components/VForm';



    interface Props {
        isDrawerOpen: boolean
        statuses: string[]
    }

    interface Emits {
        (e: 'update:isDrawerOpen', value: boolean): void
        (e: 'addLeadDetails', value: any): void
    }

    const props = defineProps<Props>()
    const emit = defineEmits<Emits>()


    const isFormValid = ref(false)
    const refForm = ref<VForm>()

    const leadDetails = ref({
        contact_status: undefined,
        notes: undefined,
        follow_up: undefined,
        final_status: undefined,
        call_status: undefined,
        call_date: undefined,
        email_status: undefined,
        email_date: undefined,
        sms_status: undefined,
        sms_date: undefined,
    })

    // 👉 Drawer close
    const closeNavigationDrawer = () => {
        emit('update:isDrawerOpen', false)
        nextTick(() => {
            refForm.value?.reset()
            refForm.value?.resetValidation()
        })
    }

    const onSubmit = () => {
        refForm.value?.validate().then(({ valid }) => {
            if (valid) {
                emit('addLeadDetails', leadDetails.value)
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
        <AppDrawerHeaderSection title="Add Lead Details" @cancel="closeNavigationDrawer" />

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false, suppressScrollX: true }">
            <VCard flat>
                <VCardText>
                    <!-- 👉 Form -->
                    <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                        <VRow>
                            <!-- 👉 Contact status -->
                            <VCol cols="12">
                                <VTextField v-model="leadDetails.contact_status" label="Contact Status"
                                    placeholder="Contact Status" clearable />
                            </VCol>

                            <!-- 👉 Notes -->
                            <VCol cols="12">
                                <VTextarea v-model="leadDetails.notes" label="Notes" auto-grow rows="3"
                                    placeholder="Notes" clearable />
                            </VCol>

                            <!-- 👉 Follow up -->
                            <VCol cols="12">
                                <VTextField v-model="leadDetails.follow_up" label="Follow up" placeholder="Follow up"
                                    clearable />
                            </VCol>

                            <!-- 👉 Final Status -->
                            <VCol cols="12">
                                <VAutocomplete v-model="leadDetails.final_status" label="Final Status"
                                    :items="props.statuses" placeholder="Final Status" clearable />
                            </VCol>

                            <!-- 👉 Call Status -->
                            <VCol cols="12">
                                <VTextField v-model="leadDetails.call_status" label="Call Status"
                                    placeholder="Call Status" clearable />
                            </VCol>

                            <!-- 👉 Call Date/Time -->
                            <VCol cols="12">
                                <AppDateTimePicker v-model="leadDetails.call_date" label="Call Date/Time"
                                    placeholder="Call Date/Time" clearable
                                    :config="{ dateFormat: 'd-m-Y, G:i K', enableTime: true }" />
                            </VCol>

                            <!-- 👉 Email Status -->
                            <VCol cols="12">
                                <VTextField v-model="leadDetails.email_status" label="Email Status"
                                    placeholder="Email Status" clearable />
                            </VCol>

                            <!-- 👉 Email Date/Time -->
                            <VCol cols="12">
                                <AppDateTimePicker v-model="leadDetails.email_date" label="Email Date/Time"
                                    placeholder="Email Date/Time" clearable
                                    :config="{ dateFormat: 'd-m-Y, G:i K', enableTime: true }" />
                            </VCol>

                            <!-- 👉 SMS Status -->
                            <VCol cols="12">
                                <VTextField v-model="leadDetails.sms_status" label="SMS Status" placeholder="SMS Status"
                                    clearable />
                            </VCol>

                            <!-- 👉 SMS Date/Time -->
                            <VCol cols="12">
                                <AppDateTimePicker v-model="leadDetails.sms_date" label="SMS Date/Time"
                                    placeholder="SMS Date/Time" clearable
                                    :config="{ dateFormat: 'd-m-Y, G:i K', enableTime: true }" />
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

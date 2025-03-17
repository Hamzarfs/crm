<script setup lang="ts">

    const selectedService = ref<Record<string, any>>({})
    let serviceToDelete: number
    let serviceToUpdateIndex: number


    // Add a ref for the AddNewServiceDrawer & EditServiceDrawer component
    const addNewServiceDrawerRef = ref()
    const editServiceDrawerRef = ref()
    const dataTableRef = ref()
    // Headers
    const headers = [
        { title: 'ID', key: 'id' },
        { title: 'Name', key: 'name' },
        { title: 'Actions', key: 'actions', sortable: false },
    ]

    // 👉 Fetching roles
    const { services } = await $api('services')
    const servicesData = ref(services)


    const isAddNewServiceDrawerVisible = ref(false)
    const isEditServiceDrawerVisible = ref(false)
    const isSnackBarVisible = ref(false)
    const isDeleteDialogVisible = ref(false)
    const serviceResponsemessage = ref('')

    // 👉 Add new service
    const addNewService = async (serviceData: any) => {
        const { success, message, service } = await $api('/services', {
            method: 'POST',
            body: serviceData,
            onResponseError({ response }) {
                errors.value = response._data.errors
            },
        })

        if (success) {
            isSnackBarVisible.value = true
            servicesData.value = [...servicesData.value, service]
            serviceResponsemessage.value = message
            addNewServiceDrawerRef.value.closeNavigationDrawer()
            nextTick(() => {
                dataTableRef.value.$el.querySelector('.v-table__wrapper').scrollTop = dataTableRef.value.$el.querySelector('.v-table__wrapper').scrollHeight
            })
        }
    }

    // 👉 Edit service
    const editService = async (serviceData: any) => {
        const { success, message, service } = await $api(`services/${selectedService.value.id}`, {
            method: 'PUT',
            body: serviceData,
            onResponseError({ response }) {
                errors.value = response._data.errors
            },
        })
        if (success) {
            isSnackBarVisible.value = true
            servicesData.value[serviceToUpdateIndex] = service
            serviceResponsemessage.value = message
            editServiceDrawerRef.value.closeNavigationDrawer()
        }
    }

    const openEditServiceForm = (service: any) => {
        selectedService.value = service
        serviceToUpdateIndex = servicesData.value.indexOf(service)
        isEditServiceDrawerVisible.value = true
    }

    // 👉 Delete service
    const deleteService = async () => {
        const { success, message } = await $api(`services/${serviceToDelete}`, {
            method: 'DELETE',
        })

        isDeleteDialogVisible.value = false

        isSnackBarVisible.value = true
        serviceResponsemessage.value = message
        if (success) {
            servicesData.value = servicesData.value.filter((service: any) => service.id !== serviceToDelete)
        }
    }

    const errors = ref({
        name: undefined
    })

</script>

<template>
    <section>
        <VCard class="mb-6">
            <VCardTitle class="d-flex align-center my-2">
                <span>Services</span>
                <VSpacer />
                <VBtn @click="isAddNewServiceDrawerVisible = true" prepend-icon="ri-user-add-fill">
                    Add New Service
                </VBtn>
            </VCardTitle>

            <VDivider />

            <!-- SECTION datatable -->
            <VDataTable hover fixed-header style="max-height: 600px;" :items="servicesData" item-value="id"
                ref="dataTableRef" :headers="headers" class="text-no-wrap rounded-0" density="default">

                <!-- Actions -->
                <template #item.actions="{ item }: { item: any }">
                    <IconBtn size="small" @click="openEditServiceForm(item)" color="primary">
                        <VIcon icon="ri-edit-box-line" />
                        <VTooltip activator="parent" location="top">
                            Edit
                        </VTooltip>
                    </IconBtn>

                    <IconBtn size="small" @click="isDeleteDialogVisible = true; serviceToDelete = item.id"
                        color="error">
                        <VIcon icon="ri-delete-bin-7-line" />
                        <VTooltip activator="parent" location="top">
                            Delete
                        </VTooltip>
                    </IconBtn>
                </template>

            </VDataTable>

            <!-- SECTION -->
        </VCard>

        <!-- 👉 Add New Service -->
        <AddNewServiceDrawer v-model:isDrawerOpen="isAddNewServiceDrawerVisible" @service-data="addNewService"
            ref="addNewServiceDrawerRef" :errors="errors" />

        <!-- 👉 Edit Service -->
        <EditServiceDrawer v-model:isDrawerOpen="isEditServiceDrawerVisible" @service-data="editService"
            :service="selectedService" ref="editServiceDrawerRef" :errors="errors" />

        <VSnackbar v-model="isSnackBarVisible">
            {{ serviceResponsemessage }}
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
                    Are you sure you want to delete this service?
                </VCardText>

                <VCardText class="d-flex align-center justify-center gap-4">
                    <VBtn variant="elevated" @click="deleteService()" color="error">
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

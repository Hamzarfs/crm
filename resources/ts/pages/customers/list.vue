<script setup lang="ts">

    const selectedCustomer = ref<Record<string, any>>({})
    let customerToDelete: number
    let customerToUpdateIndex: number


    // Add a ref for the AddNewCustomerDrawer & EditCustomerDrawer component
    const addNewCustomerDrawerRef = ref()
    const editCustomerDrawerRef = ref()
    const dataTableRef = ref()
    // Headers
    const headers = [
        { title: 'ID', key: 'id' },
        { title: 'Name', key: 'full_name' },
        { title: 'Email', key: 'email' },
        { title: 'Contact', key: 'contact' },
        { title: 'Area', key: 'area' },
        { title: 'ZIP', key: 'zip' },
        { title: 'Country', key: 'country' },
        { title: 'Actions', key: 'actions', sortable: false },
    ]

    // 👉 Fetching roles
    const { customers } = await $api('customers')
    const customersData = ref(customers)


    const isAddNewCustomerDrawerVisible = ref(false)
    const isEditCustomerDrawerVisible = ref(false)
    const isSnackBarVisible = ref(false)
    const isDeleteDialogVisible = ref(false)
    let customerResponsemessage: string

    // 👉 Add new Customer
    const addNewCustomer = async (customerData: any) => {
        const { success, message, customer } = await $api('/customers', {
            method: 'POST',
            body: customerData,
            onResponseError({ response }) {
                errors.value = response._data.errors
            },
        })

        if (success) {
            isSnackBarVisible.value = true
            customersData.value = [...customersData.value, customer]
            customerResponsemessage = message
            addNewCustomerDrawerRef.value.closeNavigationDrawer()
            nextTick(() => {
                dataTableRef.value.$el.querySelector('.v-table__wrapper').scrollTop = dataTableRef.value.$el.querySelector('.v-table__wrapper').scrollHeight
            })
        }
    }

    // 👉 Edit Customer
    const editCustomer = async (customerData: any) => {
        const { success, message, customer } = await $api(`customers/${selectedCustomer.value.id}`, {
            method: 'PUT',
            body: customerData,
            onResponseError({ response }) {
                errors.value = response._data.errors
            },
        })
        if (success) {
            isSnackBarVisible.value = true
            customersData.value[customerToUpdateIndex] = customer
            customerResponsemessage = message
            editCustomerDrawerRef.value.closeNavigationDrawer()
        }
    }

    const openEditCustomerForm = (customer: any) => {
        selectedCustomer.value = customer
        customerToUpdateIndex = customersData.value.indexOf(customer)
        isEditCustomerDrawerVisible.value = true
    }

    // 👉 Delete Customer
    const deleteCustomer = async () => {
        const { success, message } = await $api(`customers/${customerToDelete}`, {
            method: 'DELETE',
        })

        isDeleteDialogVisible.value = false

        if (success) {
            isSnackBarVisible.value = true
            customerResponsemessage = message
            customersData.value = customersData.value.filter((customer: any) => customer.id !== customerToDelete)
        }
    }

    const errors = ref({
        first_name: undefined,
        last_name: undefined,
        email: undefined,
        contact: undefined,
        zip: undefined,
        area: undefined,
        country: undefined,
    })

</script>

<template>
    <section>
        <VCard class="mb-6">
            <VCardTitle class="d-flex align-center my-2">
                <span>Customers</span>
                <VSpacer />
                <VBtn @click="isAddNewCustomerDrawerVisible = true" prepend-icon="ri-user-add-fill">
                    Add New Customer
                </VBtn>
            </VCardTitle>

            <VDivider />

            <!-- SECTION datatable -->
            <VDataTable hover fixed-header style="max-height: 600px;" :items="customersData" item-value="id"
                ref="dataTableRef" :headers="headers" class="text-no-wrap rounded-0" density="default">

                <!-- Actions -->
                <template #item.actions="{ item }: { item: any }">
                    <IconBtn size="small" @click="openEditCustomerForm(item)" color="primary">
                        <VIcon icon="ri-edit-box-line" />
                        <VTooltip activator="parent" location="top">
                            Edit
                        </VTooltip>
                    </IconBtn>

                    <IconBtn size="small" @click="isDeleteDialogVisible = true; customerToDelete = item.id"
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

        <!-- 👉 Add New Customer -->
        <AddNewCustomerDrawer v-model:isDrawerOpen="isAddNewCustomerDrawerVisible" @customer-data="addNewCustomer"
            ref="addNewCustomerDrawerRef" :errors="errors" />

        <!-- 👉 Edit Customer -->
        <EditCustomerDrawer v-model:isDrawerOpen="isEditCustomerDrawerVisible" @customer-data="editCustomer"
            :customer="selectedCustomer" ref="editCustomerDrawerRef" :errors="errors" />

        <VSnackbar v-model="isSnackBarVisible">
            {{ customerResponsemessage }}
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
                    Are you sure you want to delete this customer?
                </VCardText>

                <VCardText class="d-flex align-center justify-center gap-4">
                    <VBtn variant="elevated" @click="deleteCustomer()" color="error">
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

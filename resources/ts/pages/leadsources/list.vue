<script setup lang="ts">


    const selectedLeadSource = ref({})
    let leadsourceToDelete: number

    // Add a ref for the AddNewLeadSourceDrawer & editLeadSourceDrawerRef component
    const addNewLeadSourceDrawerRef = ref()
    const editLeadSourceDrawerRef = ref()

    const dataTableRef = ref()

    // Headers
    const headers = [
        { title: 'ID', key: 'id' },
        { title: 'Name', key: 'name' },
        { title: 'Type', key: 'type' },
        { title: 'Actions', key: 'actions', sortable: false },
    ]

    // 👉 Fetching leadsources
    const { leadsources } = await $api('leadsources')

    const leadsourcesData = ref(leadsources)

    const isAddNewLeadSourceDrawerVisible = ref(false)
    const isEditLeadSourceDrawerVisible = ref(false)
    const isSnackBarVisible = ref(false)
    const isDeleteDialogVisible = ref(false)
    const leadsourceResponsemessage = ref('')

    // 👉 Add new leadsource
    const addNewLeadSource = async (leadsourceData: any) => {
        const { success, message, leadsource } = await $api('/leadsources', {
            method: 'POST',
            body: leadsourceData,
            onResponseError({ response }) {
                errors.value = response._data.errors
            },
        })

        isSnackBarVisible.value = true
        leadsourceResponsemessage.value = message
        addNewLeadSourceDrawerRef.value.closeNavigationDrawer()
        if (success) {
            leadsourcesData.value = [...leadsourcesData.value, leadsource]
            nextTick(() => {
                dataTableRef.value.$el.querySelector('.v-table__wrapper').scrollTop = dataTableRef.value.$el.querySelector('.v-table__wrapper').scrollHeight
            })
        }
    }

    // 👉 Edit leadsource
    const editleadsource = async (leadsourceData: any) => {
        const { success, message, leadsource } = await $api(`leadsources/${leadsourceData.id}`, {
            method: 'PUT',
            body: leadsourceData,
            onResponseError({ response }) {
                errors.value = response._data.errors
            },
        })
        isSnackBarVisible.value = true
        leadsourceResponsemessage.value = message
        if (success) {
            leadsourcesData.value[leadsourceToDelete] = leadsource
            editLeadSourceDrawerRef.value.closeNavigationDrawer()
        }
    }

    const openeditleadsourceForm = (leadsource: any) => {
        selectedLeadSource.value = leadsource
        leadsourceToDelete = leadsourcesData.value.indexOf(leadsource)
        isEditLeadSourceDrawerVisible.value = true
    }

    // 👉 Delete lead source
    const deleteLeadSource = async () => {
        const { success, message } = await $api(`leadsources/${leadsourceToDelete}`, {
            method: 'DELETE',
        })

        isDeleteDialogVisible.value = false

        isSnackBarVisible.value = true
        leadsourceResponsemessage.value = message
        if (success) {
            leadsourcesData.value = leadsourcesData.value.filter((leadsource: any) => leadsource.id !== leadsourceToDelete)
        }
    }

    const errors = ref({
        name: undefined,
        type: undefined
    })

    const leadSourceTypes = [
        {
            title: 'Paid',
            value: 'paid'
        },
        {
            title: 'Unpaid',
            value: 'unpaid'
        }
    ]

    watch(isEditLeadSourceDrawerVisible, newValue => {
        if (!newValue)
            selectedLeadSource.value = {}
    })

</script>

<template>
    <section>
        <VCard class="mb-6">
            <VCardTitle class="d-flex align-center my-2">
                <span>Lead Sources</span>
                <VSpacer />
                <VBtn @click="isAddNewLeadSourceDrawerVisible = true" prepend-icon="ri-user-add-fill">
                    Add New Lead Source
                </VBtn>
            </VCardTitle>

            <VDivider />

            <!-- SECTION datatable -->
            <VDataTable hover fixed-header style="max-height: 600px;" :items="leadsourcesData" item-value="id"
                ref="dataTableRef" :headers="headers" class="text-no-wrap rounded-0" density="default">

                <!-- Type -->
                <template #item.type="{ item }: { item: any }">
                    <VChip :color="item.type === 'paid' ? 'success' : 'error'">
                        {{ strToTitleCase(item.type) }}
                    </VChip>
                </template>

                <!-- Actions -->
                <template #item.actions="{ item }: { item: any }">
                    <IconBtn size="small" @click="openeditleadsourceForm(item)" color="primary">
                        <VIcon icon="ri-edit-box-line" />
                        <VTooltip activator="parent" location="top">
                            Edit
                        </VTooltip>
                    </IconBtn>

                    <IconBtn size="small" @click="isDeleteDialogVisible = true; leadsourceToDelete = item.id"
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

        <!-- 👉 Add New Lead Source -->
        <AddNewLeadSourceDrawer v-model:isDrawerOpen="isAddNewLeadSourceDrawerVisible" :types="leadSourceTypes"
            @leadsource-data="addNewLeadSource" ref="addNewLeadSourceDrawerRef" :errors="errors" />

        <!-- 👉 Edit Lead Source -->
        <EditLeadSourceDrawer v-model:isDrawerOpen="isEditLeadSourceDrawerVisible" @leadsource-data="editleadsource"
            :types="leadSourceTypes" :leadsource="selectedLeadSource" ref="editLeadSourceDrawerRef" :errors="errors" />

        <VSnackbar v-model="isSnackBarVisible">
            {{ leadsourceResponsemessage }}
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
                    Are you sure you want to delete this Lead Source?
                </VCardText>

                <VCardText class="d-flex align-center justify-center gap-4">
                    <VBtn variant="elevated" @click="deleteLeadSource()" color="error">
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

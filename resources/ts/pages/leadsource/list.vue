<script setup lang="ts">

import addNewLeadSourceDrawer from '@/components/leadsource/AddNewLeadSourceDrawer.vue';
import EditLeadSourceDrawer from '@/components/leadsource/EditLeadSourceDrawer.vue';


const selectedLeadSource = ref({
    name: '',
})
let leadsourceToDelete: number
let leadsourceToUpdate: number


// Add a ref for the AddNewUserDrawer & editUserDrawerRef component
const addNewLeadSourceDrawerRef = ref()
const editLeadSourceDrawerRef = ref()

const dataTableRef = ref()

// Headers
const headers = [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'name' },
    { title: 'Actions', key: 'actions', sortable: false },
]

// 👉 Fetching roles
const { leadsources } = await $api('leadsources')


const leadsourcesData = ref(leadsources)

const isAddNewLeadSourceDrawerVisible = ref(false)
const isEditLeadSourceDrawerVisible = ref(false)
const isSnackBarVisible = ref(false)
const isDeleteDialogVisible = ref(false)
let leadsourceResponsemessage: string

// 👉 Add new leadsource
const addNewLeadSource = async (leadsourceData: any) => {
    const { success, message, leadsource } = await $api('/leadsources', {
        method: 'POST',
        body: leadsourceData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    if (success) {
        isSnackBarVisible.value = true
        leadsourcesData.value = [...leadsourcesData.value, leadsource]
        leadsourceResponsemessage = message
        addNewLeadSourceDrawerRef.value.closeNavigationDrawer()
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
    if (success) {
        isSnackBarVisible.value = true
        leadsourcesData.value[leadsourceToDelete] = leadsource
        leadsourceResponsemessage = message
        editLeadSourceDrawerRef.value.closeNavigationDrawer()
    }
}

const openeditleadsourceForm = (leadsource: any) => {
    selectedLeadSource.value = leadsource
    leadsourceToDelete = leadsourcesData.value.indexOf(leadsource)
    isEditLeadSourceDrawerVisible.value = true
}


// 👉 Delete role
const deleteLeadSource = async () => {
    const { success, message } = await $api(`leadsources/${leadsourceToDelete}`, {
        method: 'DELETE',
    })

    isDeleteDialogVisible.value = false

    if (success) {
        isSnackBarVisible.value = true
        leadsourceResponsemessage = message
        leadsourcesData.value = leadsourcesData.value.filter((leadsource: any) => leadsource.id !== leadsourceToDelete)
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
                <span>Lead Source</span>
                <VSpacer />
                <VBtn @click="isAddNewLeadSourceDrawerVisible = true" prepend-icon="ri-user-add-fill">
                    Add New Lead Source
                </VBtn>
            </VCardTitle>

            <VDivider />

            <!-- SECTION datatable -->
            <VDataTable hover fixed-header style="max-height: 600px;" :items="leadsourcesData" item-value="id"
                ref="dataTableRef" :headers="headers" class="text-no-wrap rounded-0" density="default">

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

        <!-- 👉 Add New Role -->
        <addNewLeadSourceDrawer v-model:isDrawerOpen="isAddNewLeadSourceDrawerVisible"
            @leadsource-data="addNewLeadSource" ref="addNewLeadSourceDrawerRef" :errors="errors" />

        <!-- 👉 Edit User -->
        <EditLeadSourceDrawer v-model:isDrawerOpen="isEditLeadSourceDrawerVisible" @leadsource-data="editleadsource"
            :leadsource="selectedLeadSource" ref="editLeadSourceDrawerRef" :errors="errors" />

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

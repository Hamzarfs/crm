<script setup lang="ts">

import AddNewRoleDrawer from '@/components/roles/AddNewRoleDrawer.vue';
import EditRoleDrawer from '@/components/roles/EditRoleDrawer.vue';

const selectedRole = ref({
    name: '',
})
let roleToDelete: number
let roleToUpdateIndex: number


// Add a ref for the AddNewUserDrawer & editUserDrawerRef component
const addNewRoleDrawerRef = ref()
const editRoleDrawerRef = ref()
const dataTableRef = ref()
// Headers
const headers = [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'title' },
    { title: 'Actions', key: 'actions', sortable: false },
]

// 👉 Fetching roles
const { roles } = await $api('roles')
const rolesData = ref(roles)


const isAddNewRoleDrawerVisible = ref(false)
const isEditRoleDrawerVisible = ref(false)
const isSnackBarVisible = ref(false)
const isDeleteDialogVisible = ref(false)
const roleResponsemessage = ref('')

// 👉 Add new role
const addNewRole = async (roleData: any) => {
    const { success, message, role } = await $api('/roles', {
        method: 'POST',
        body: roleData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    if (success) {
        isSnackBarVisible.value = true
        rolesData.value = [...rolesData.value, role]
        roleResponsemessage.value = message
        addNewRoleDrawerRef.value.closeNavigationDrawer()
        nextTick(() => {
            dataTableRef.value.$el.querySelector('.v-table__wrapper').scrollTop = dataTableRef.value.$el.querySelector('.v-table__wrapper').scrollHeight
        })
    }
}

// 👉 Edit role
const editRole = async (roleData: any) => {
    const { success, message, role } = await $api(`roles/${roleData.id}`, {
        method: 'PUT',
        body: roleData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })
    if (success) {
        isSnackBarVisible.value = true
        rolesData.value[roleToUpdateIndex] = role
        roleResponsemessage.value = message
        editRoleDrawerRef.value.closeNavigationDrawer()
    }
}

const openEditRoleForm = (role: any) => {
    selectedRole.value = role
    roleToUpdateIndex = rolesData.value.indexOf(role)
    isEditRoleDrawerVisible.value = true
}


// 👉 Delete role
const deleteRole = async () => {
    const { success, message } = await $api(`roles/${roleToDelete}`, {
        method: 'DELETE',
    })

    isDeleteDialogVisible.value = false

    isSnackBarVisible.value = true
    roleResponsemessage.value = message
    if (success) {
        rolesData.value = rolesData.value.filter((role: any) => role.id !== roleToDelete)
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
                <span>Roles</span>
                <VSpacer />
                <VBtn @click="isAddNewRoleDrawerVisible = true" prepend-icon="ri-user-add-fill">
                    Add New Role
                </VBtn>
            </VCardTitle>

            <VDivider />

            <!-- SECTION datatable -->
            <VDataTable hover fixed-header style="max-height: 600px;" :items="rolesData" item-value="id"
                ref="dataTableRef" :headers="headers" class="text-no-wrap rounded-0" density="default">

                <!-- Actions -->
                <template #item.actions="{ item }: { item: any }">
                    <IconBtn size="small" @click="openEditRoleForm(item)" color="primary"
                        :disabled="item.id >= 1 && item.id <= 8">
                        <VIcon icon="ri-edit-box-line" />
                        <VTooltip activator="parent" location="top">
                            Edit
                        </VTooltip>
                    </IconBtn>

                    <IconBtn size="small" @click="isDeleteDialogVisible = true; roleToDelete = item.id" color="error"
                        :disabled="item.id >= 1 && item.id <= 8">
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
        <AddNewRoleDrawer v-model:isDrawerOpen="isAddNewRoleDrawerVisible" @role-data="addNewRole"
            ref="addNewRoleDrawerRef" :errors="errors" />

        <!-- 👉 Edit Role -->
        <EditRoleDrawer v-model:isDrawerOpen="isEditRoleDrawerVisible" @role-data="editRole" :role="selectedRole"
            ref="editRoleDrawerRef" :errors="errors" />

        <VSnackbar v-model="isSnackBarVisible">
            {{ roleResponsemessage }}
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
                    Are you sure you want to delete this role?
                </VCardText>

                <VCardText class="d-flex align-center justify-center gap-4">
                    <VBtn variant="elevated" @click="deleteRole()" color="error">
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

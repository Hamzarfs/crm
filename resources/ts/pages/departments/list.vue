<script setup lang="ts">

    import AddNewDepartmentDrawer from '@/components/departments/AddNewDepartmentDrawer.vue';
    import EditDepartmentDrawer from '@/components/departments/EditDepartmentDrawer.vue';


    const selectedDepartment = ref({
        name: '',
    })
    let departmentToDelete: number
    let departmentToUpdateIndex: number


    // Add a ref for the AddNewUserDrawer & editUserDrawerRef component
    const addNewDepartmentDrawerRef = ref()
    const editDepartmentDrawerRef = ref()

    const dataTableRef = ref()

    // Headers
    const headers = [
        { title: 'ID', key: 'id' },
        { title: 'Name', key: 'title' },
        { title: 'Leader', key: 'leader' },
        { title: 'Actions', key: 'actions', sortable: false },
    ]

    // 👉 Fetching roles
    const { departments } = await $api('departments')
    const { users } = await $api('users')
    const departmentsData = ref(departments)

    const isAddNewDepartmentDrawerVisible = ref(false)
    const isEditDepartmentDrawerVisible = ref(false)
    const isSnackBarVisible = ref(false)
    const isDeleteDialogVisible = ref(false)
    const departmentResponsemessage = ref('')

    // 👉 Add new department
    const addNewDepartment = async (departmentData: any) => {
        const { success, message, department } = await $api('/departments', {
            method: 'POST',
            body: departmentData,
            onResponseError({ response }) {
                errors.value = response._data.errors
            },
        })

        if (success) {
            isSnackBarVisible.value = true
            departmentsData.value = [...departmentsData.value, department]
            departmentResponsemessage.value = message
            addNewDepartmentDrawerRef.value.closeNavigationDrawer()
            nextTick(() => {
                dataTableRef.value.$el.querySelector('.v-table__wrapper').scrollTop = dataTableRef.value.$el.querySelector('.v-table__wrapper').scrollHeight
            })
        }
    }

    // 👉 Edit department
    const editDepartment = async (departmentData: any) => {
        const { success, message, department } = await $api(`departments/${departmentData.id}`, {
            method: 'PUT',
            body: departmentData,
            onResponseError({ response }) {
                errors.value = response._data.errors
            },
        })
        if (success) {
            isSnackBarVisible.value = true
            departmentsData.value[departmentToUpdateIndex] = department
            departmentResponsemessage.value = message
            editDepartmentDrawerRef.value.closeNavigationDrawer()
        }
    }

    const openEditDepartmentForm = (department: any) => {
        selectedDepartment.value = department
        departmentToUpdateIndex = departmentsData.value.indexOf(department)
        isEditDepartmentDrawerVisible.value = true
    }

    // 👉 Delete department
    const deleteDepartment = async () => {
        const { success, message } = await $api(`departments/${departmentToDelete}`, {
            method: 'DELETE',
        })

        isDeleteDialogVisible.value = false

        isSnackBarVisible.value = true
        departmentResponsemessage.value = message
        if (success) {
            departmentsData.value = departmentsData.value.filter((department: any) => department.id !== departmentToDelete)
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
                <span>Departments</span>
                <VSpacer />
                <VBtn @click="isAddNewDepartmentDrawerVisible = true" prepend-icon="ri-user-add-fill">
                    Add New Department
                </VBtn>
            </VCardTitle>

            <VDivider />

            <!-- SECTION datatable -->
            <VDataTable hover fixed-header style="max-height: 600px;" :items="departmentsData" item-value="id"
                ref="dataTableRef" :headers="headers" class="text-no-wrap rounded-0" density="default">

                <!-- Actions -->
                <template #item.actions="{ item }: { item: any }">
                    <IconBtn size="small" @click="openEditDepartmentForm(item)" color="primary"
                        :disabled="item.id >= 1 && item.id <= 6">
                        <VIcon icon="ri-edit-box-line" />
                        <VTooltip activator="parent" location="top">
                            Edit
                        </VTooltip>
                    </IconBtn>

                    <IconBtn size="small" @click="isDeleteDialogVisible = true; departmentToDelete = item.id"
                        color="error" :disabled="item.id >= 1 && item.id <= 6">
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
        <AddNewDepartmentDrawer v-model:isDrawerOpen="isAddNewDepartmentDrawerVisible"
            @department-data="addNewDepartment" ref="addNewDepartmentDrawerRef" :errors="errors" :users="users" />

        <!-- 👉 Edit User -->
        <EditDepartmentDrawer v-model:isDrawerOpen="isEditDepartmentDrawerVisible" @department-data="editDepartment"
            :department="selectedDepartment" ref="editDepartmentDrawerRef" :errors="errors" :users="users" />

        <VSnackbar v-model="isSnackBarVisible">
            {{ departmentResponsemessage }}
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
                    Are you sure you want to delete this department?
                </VCardText>

                <VCardText class="d-flex align-center justify-center gap-4">
                    <VBtn variant="elevated" @click="deleteDepartment()" color="error">
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

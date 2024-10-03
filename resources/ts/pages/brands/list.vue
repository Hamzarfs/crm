<script setup lang="ts">

import AddNewBrandDrawer from '@/components/brands/AddNewBrandDrawer.vue';
import EditBrandDrawer from '@/components/brands/EditBrandDrawer.vue';


const selectedBrand = ref({
    name: '',
})
let brandToDelete: number
let brandToUpdateIndex: number


// Add a ref for the AddNewBrandDrawer & editBrandDrawerRef component
const addNewBrandDrawerRef = ref()
const editBrandDrawerRef = ref()

const dataTableRef = ref()

// Headers
const headers = [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'name' },
    { title: 'Actions', key: 'actions', sortable: false },
]

const isAddNewBrandDrawerVisible = ref(false)
const isEditBrandDrawerVisible = ref(false)
const isSnackBarVisible = ref(false)
const isDeleteDialogVisible = ref(false)
const brandResponsemessage = ref('')

// 👉 Fetching brands
const { brands } = await $api('brands')
const brandsData = ref(brands)

// 👉 Add new brand
const addNewbrand = async (brandData: any) => {
    const { success, message, brand } = await $api('/brands', {
        method: 'POST',
        body: brandData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })

    if (success) {
        isSnackBarVisible.value = true
        brandsData.value = [...brandsData.value, brand]
        brandResponsemessage.value = message
        addNewBrandDrawerRef.value.closeNavigationDrawer()
        nextTick(() => {
            dataTableRef.value.$el.querySelector('.v-table__wrapper').scrollTop = dataTableRef.value.$el.querySelector('.v-table__wrapper').scrollHeight
        })
    }
}

// 👉 Edit brand
const editbrand = async (brandData: any) => {
    const { success, message, brand } = await $api(`brands/${brandData.id}`, {
        method: 'PUT',
        body: brandData,
        onResponseError({ response }) {
            errors.value = response._data.errors
        },
    })
    if (success) {
        isSnackBarVisible.value = true
        brandsData.value[brandToUpdateIndex] = brand
        brandResponsemessage.value = message
        editBrandDrawerRef.value.closeNavigationDrawer()
    }
}

const openeditbrandForm = (brand: any) => {
    selectedBrand.value = brand
    brandToUpdateIndex = brandsData.value.indexOf(brand)
    isEditBrandDrawerVisible.value = true
}

// 👉 Delete brand
const deleteBrand = async () => {
    const { success, message } = await $api(`brands/${brandToDelete}`, {
        method: 'DELETE',
    })

    isDeleteDialogVisible.value = false

    isSnackBarVisible.value = true
    brandResponsemessage.value = message

    if (success) {
        brandsData.value = brandsData.value.filter((brand: any) => brand.id !== brandToDelete)
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
                <span>Brands</span>
                <VSpacer />
                <VBtn @click="isAddNewBrandDrawerVisible = true" prepend-icon="ri-user-add-fill">
                    Add New Brand
                </VBtn>
            </VCardTitle>

            <VDivider />

            <!-- SECTION datatable -->
            <VDataTable hover fixed-header style="max-height: 600px;" :items="brandsData" item-value="id"
                ref="dataTableRef" :headers="headers" class="text-no-wrap rounded-0" density="default">

                <!-- Actions -->
                <template #item.actions="{ item }: { item: any }">
                    <IconBtn size="small" @click="openeditbrandForm(item)" color="primary">
                        <VIcon icon="ri-edit-box-line" />
                        <VTooltip activator="parent" location="top">
                            Edit
                        </VTooltip>
                    </IconBtn>

                    <IconBtn size="small" @click="isDeleteDialogVisible = true; brandToDelete = item.id" color="error">
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
        <AddNewBrandDrawer v-model:isDrawerOpen="isAddNewBrandDrawerVisible" @brand-data="addNewbrand"
            ref="addNewBrandDrawerRef" :errors="errors" />

        <!-- 👉 Edit User -->
        <editBrandDrawer v-model:isDrawerOpen="isEditBrandDrawerVisible" @brand-data="editbrand" :brand="selectedBrand"
            ref="editBrandDrawerRef" :errors="errors" />

        <VSnackbar v-model="isSnackBarVisible">
            {{ brandResponsemessage }}
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
                    Are you sure you want to delete this brand?
                </VCardText>

                <VCardText class="d-flex align-center justify-center gap-4">
                    <VBtn variant="elevated" @click="deleteBrand()" color="error">
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

<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import type { VForm } from 'vuetify/components/VForm';

interface Emit {
    (e: 'update:isDrawerOpen', value: boolean): void
    (e: 'userData', value: any): void
}

interface Props {
    isDrawerOpen: boolean
    status: []
    roles: []
    departments: []
    errors: Record<string, string | undefined>
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()


const isFormValid = ref(false)
const refForm = ref<VForm>()
const name = ref('')
const email = ref('')
const department = ref()
const phone = ref('')
const role = ref()
const status = ref()

const userRoles = props.roles.map((r: any) => ({ title: r.title, value: r.id }))
const departments = props.departments.map((d: any) => ({ title: d.title, value: d.id }))

// Add a new ref for API success
// const apiSuccess = ref(false)

// 👉 drawer close
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
            // apiSuccess.value = false // Reset API success status
            emit('userData', {
                name: name.value,
                email: email.value,
                phone: phone.value,
                role: role.value,
                department: department.value,
                status: status.value,
            })
        }
    })
}

// Add a new method to handle API response
// const handleApiResponse = (success: boolean) => {
//     apiSuccess.value = success
//     if (success) {
//         closeNavigationDrawer()
//     }
// }

defineExpose({
    closeNavigationDrawer
})

const handleDrawerModelValueUpdate = (val: boolean) => {
    emit('update:isDrawerOpen', val)
}
</script>

<template>
    <VNavigationDrawer temporary :width="400" location="end" class="scrollable-content"
        :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">

        <!-- 👉 Title -->
        <AppDrawerHeaderSection title="Add Employee" @cancel="closeNavigationDrawer" />

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard flat>
                <VCardText>
                    <!-- 👉 Form -->
                    <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                        <VRow>
                            <!-- 👉 Full name -->
                            <VCol cols="12">
                                <VTextField v-model="name" :rules="[requiredValidator]" label="Full Name"
                                    :error-messages="props.errors.name" placeholder="John Doe" />
                            </VCol>

                            <!-- 👉 Email -->
                            <VCol cols="12">
                                <VTextField v-model="email" :rules="[requiredValidator, emailValidator]" label="Email"
                                    :error-messages="props.errors.email" placeholder="johndoe@email.com" />
                            </VCol>

                            <!-- 👉 Contact -->
                            <VCol cols="12">
                                <VTextField v-model="phone" type="number" :rules="[numberValidator]"
                                    label="Phone Number" placeholder="03001234567" />
                            </VCol>

                            <!-- 👉 Department -->
                            <VCol cols="12">
                                <VSelect v-model="department" label="Select Department" placeholder="Select Department"
                                    :rules="[requiredValidator]" :items="departments" />
                            </VCol>

                            <!-- 👉 Role -->
                            <VCol cols="12">
                                <VSelect v-model="role" label="Select Role" placeholder="Select Role"
                                    :rules="[requiredValidator]" :items="userRoles" />
                            </VCol>

                            <!-- 👉 Status -->
                            <VCol cols="12">
                                <VSelect v-model="status" label="Select Status" placeholder="Select Status"
                                    :rules="[requiredValidator]" :items="props.status" />
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

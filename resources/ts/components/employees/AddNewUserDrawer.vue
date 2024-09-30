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
    errors: Record<string, any>
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
const optionalDetails = ref({
    biometricId: '',
    educationDetails: '',
    salary: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    vehiclePlateNumber: '',
    bloodGroup: '',

})

const userRoles = props.roles.map((r: any) => ({ title: r.title, value: r.id }))
const departments = props.departments.map((d: any) => ({ title: d.title, value: d.id }))


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
            emit('userData', {
                name: name.value,
                email: email.value,
                phone: phone.value,
                role: role.value,
                department: department.value,
                status: status.value,
                details: optionalDetails.value
            })
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
    <VNavigationDrawer temporary :width="1600" location="end" class="scrollable-content"
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
                            <VCol cols="3">
                                <h1 class="mb-4">Required Fields</h1>
                                <VRow>
                                    <!-- 👉 Full name -->
                                    <VCol cols="12">
                                        <VTextField v-model="name" :rules="[requiredValidator]" label="Full Name"
                                            :error-messages="props.errors.name" placeholder="John Doe" />
                                    </VCol>

                                    <!-- 👉 Email -->
                                    <VCol cols="12">
                                        <VTextField v-model="email" :rules="[requiredValidator, emailValidator]"
                                            label="Email" :error-messages="props.errors.email"
                                            placeholder="johndoe@email.com" />
                                    </VCol>

                                    <!-- 👉 Contact -->
                                    <VCol cols="12">
                                        <VTextField v-model="phone" type="text"
                                            :rules="[requiredValidator, phoneNumberValidator]" label="Phone Number"
                                            placeholder="03001234567" />
                                    </VCol>

                                    <!-- 👉 Department -->
                                    <VCol cols="12">
                                        <VSelect v-model="department" label="Select Department"
                                            placeholder="Select Department" :rules="[requiredValidator]"
                                            :items="departments" />
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

                                </VRow>
                            </VCol>

                            <VDivider vertical />

                            <VCol cols="9">
                                <h1 class="mb-4">Optional Fields</h1>
                                <VRow>
                                    <VCol cols="4">
                                        <VRow>
                                            <!-- 👉 Biometric ID -->
                                            <VCol cols="12">
                                                <VTextField v-model="optionalDetails.biometricId" label="Biometric ID"
                                                    placeholder="Biometric ID" />
                                            </VCol>

                                            <!-- 👉 Education Details -->
                                            <VCol cols="12">
                                                <VTextField v-model="optionalDetails.educationDetails"
                                                    label="Education Details" placeholder="Education Details" />
                                            </VCol>

                                            <!-- 👉 Salary -->
                                            <VCol cols="12">
                                                <VTextField v-model="optionalDetails.salary" label="Salary"
                                                    placeholder="Salary" />
                                            </VCol>

                                            <!-- 👉 Emergency Contact Name -->
                                            <VCol cols="12">
                                                <VTextField v-model="optionalDetails.emergencyContactName"
                                                    label="Emergency Contact Name"
                                                    placeholder="Emergency Contact Name" />
                                            </VCol>

                                            <!-- 👉 Emergency Contact Number -->
                                            <VCol cols="12">
                                                <VTextField v-model="optionalDetails.emergencyContactNumber"
                                                    label="Emergency Contact Number"
                                                    placeholder="Emergency Contact Number" />
                                            </VCol>

                                            <!-- 👉 Vehicle Plate Number -->
                                            <VCol cols="12">
                                                <VTextField v-model="optionalDetails.vehiclePlateNumber"
                                                    label="Vehicle Plate Number" placeholder="Vehicle Plate Number" />
                                            </VCol>

                                            <!-- 👉 Blood Group -->
                                            <VCol cols="12">
                                                <VTextField v-model="optionalDetails.bloodGroup" label="Blood Group"
                                                    placeholder="Blood Group" />
                                            </VCol>
                                        </VRow>
                                    </VCol>

                                    <VCol cols="4">
                                        <VRow>

                                        </VRow>
                                    </VCol>

                                    <VCol cols="4">
                                        <VRow>

                                        </VRow>
                                    </VCol>
                                </VRow>
                            </VCol>
                        </VRow>

                        <VRow>
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

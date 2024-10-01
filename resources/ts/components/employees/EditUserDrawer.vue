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
    user: Record<string, any>
}


const props = defineProps<Props>()
const emit = defineEmits<Emit>()


const isFormValid = ref(false)
const refForm = ref<VForm>()
const name = ref(props.user.name)
const email = ref(props.user.email)
const department = ref(props.user.department?.id)
const phone = ref(props.user.phone)
const role = ref(props.user.roles?.id)
const status = ref(props.user.status?.value)
const optionalDetails = ref({
    biometricId: props.user.details?.biometricId,
    educationDetails: props.user.details?.educationDetails,
    salary: props.user.salary?.value,
    emergencyContactName: props.user.emergencyContactName?.value,
    emergencyContactNumber: props.user.emergencyContactNumber?.value,
    vehiclePlateNumber: props.user.vehiclePlateNumber?.value,
    bloodGroup: props.user.bloodGroup?.value,
    allergyOrDisease: props.user.allergyOrDisease?.value,
    shiftTimings: props.user.shiftTimings?.value,
    experienceDetails: props.user.experienceDetails?.value,
    designation: props.user.designation?.value,
    homeAddress: props.user.homeAddress?.value,
    maritalStatus: props.user.maritalStatus?.value,
    workEmail: props.user.workEmail?.value,
    workEmailPassword: props.user.workEmailPassword?.value,
    companyEmail: props.user.companyEmail?.value,
    companyEmailPassword: props.user.companyEmailPassword?.value,
    pcPassword: props.user.pcPassword?.value,
    pcDetails: props.user.pcDetails?.value,
    anyPaidPlatform: props.user.anyPaidPlatform?.value,
    idAndPasswordOfAnyPaidPlatforms: props.user.idAndPasswordOfAnyPaidPlatforms?.value,
    peripheralDevices: props.user.peripheralDevices?.value,
    jobType: props.user.jobType?.value,
    firstSalaryIncrement: props.user.firstSalaryIncrement?.value,
    secondSalaryIncrement: props.user.secondSalaryIncrement?.value,
    thirdSalaryIncrement: props.user.thirdSalaryIncrement?.value,

})
// const biometricId = ref(props.user.status?.value)
// const educationDetails = ref(props.user.educationDetails?.value);
// const salary = ref(props.user.salary?.value);
// const emergencyContactName = ref(props.user.emergencyContactName?.value);
// const emergencyContactNumber = ref(props.user.emergencyContactNumber?.value);
// const vehiclePlateNumber = ref(props.user.vehiclePlateNumber?.value);
// const bloodGroup = ref(props.user.bloodGroup?.value);
// const allergyOrDisease = ref(v);
// const shiftTimings = ref(props.user.shiftTimings?.value);
// const experienceDetails = ref(props.user.experienceDetails?.value);
// const designation = ref(props.user.designation?.value);
// const homeAddress = ref(props.user.homeAddress?.value);
// const maritalStatus = ref(props.user.maritalStatus?.value);
// const workEmail = ref(props.user.workEmail?.value);
// const workEmailPassword = ref(props.user.workEmailPassword?.value);
// const companyEmail = ref(props.user.companyEmail?.value);
// const companyEmailPassword = ref(props.user.companyEmailPassword?.value);
// const pcPassword = ref(props.user.pcPassword?.value);
// const pcDetails = ref(props.user.pcDetails?.value);
// const anyPaidPlatform = ref(props.user.anyPaidPlatform?.value);
// const idAndPasswordOfAnyPaidPlatforms = ref(props.user.idAndPasswordOfAnyPaidPlatforms?.value);
// const peripheralDevices = ref(props.user.peripheralDevices?.value);
// const jobType = ref(props.user.jobType?.value);
// const firstSalaryIncrement = ref(props.user.firstSalaryIncrement?.value);
// const secondSalaryIncrement = ref(props.user.secondSalaryIncrement?.value);
// const thirdSalaryIncrement = ref(props.user.thirdSalaryIncrement?.value);





const userRoles = props.roles.map((r: any) => ({ title: r.title, value: r.id }))
const departments = props.departments.map((d: any) => ({ title: d.title, value: d.id }))

watch(() => props.user, newVal => {
    name.value = newVal.name
    email.value = newVal.email
    department.value = newVal.department?.id
    phone.value = newVal.phone
    role.value = newVal.role?.id
    status.value = newVal.status?.value

    optionalDetails.value.biometricId = newVal.details?.biometricId

}, {
    immediate: true,
    deep: true
})


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
                id: props.user.id,
                name: name.value,
                email: email.value,
                phone: phone.value,
                role: role.value,
                department: department.value,
                status: status.value,
                details: optionalDetails.value,
                // biometricId: status.value,
                // educationDetails: educationDetails.value,
                // salary: salary.value,
                // emergencyContactName: emergencyContactName.value,
                // emergencyContactNumber: emergencyContactNumber.value,
                // vehiclePlateNumber: vehiclePlateNumber.value,
                // bloodGroup: bloodGroup.value,
                // allergyOrDisease: allergyOrDisease.value,
                // shiftTimings: shiftTimings.value,
                // experienceDetails: experienceDetails.value,
                // designation: designation.value,
                // homeAddress: homeAddress.value,
                // maritalStatus: maritalStatus.value,
                // workEmail: workEmail.value,
                // workEmailPassword: workEmailPassword.value,
                // companyEmail: companyEmail.value,
                // companyEmailPassword: companyEmailPassword.value,
                // pcPassword: pcPassword.value,
                // pcDetails: pcDetails.value,
                // anyPaidPlatform: anyPaidPlatform.value,
                // idAndPasswordOfAnyPaidPlatforms: idAndPasswordOfAnyPaidPlatforms.value,
                // peripheralDevices: peripheralDevices.value,
                // jobType: jobType.value,
                // firstSalaryIncrement: firstSalaryIncrement.value,
                // secondSalaryIncrement: secondSalaryIncrement.value,
                // thirdSalaryIncrement: thirdSalaryIncrement.value,
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
        <AppDrawerHeaderSection title="Edit Employee" @cancel="closeNavigationDrawer" />

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard flat>
                <VCardText>
                    <!-- 👉 Form -->
                    <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                        <VRow>

                            <VCol cols="12" sm="6" md="4" lg="3">
                                <VRow>
                                    <VCol cols="12">
                                        <h1 class="mb-4">Required Fields</h1>
                                    </VCol>
                                </VRow>

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
                                    <VTextField v-model="phone" type="number"
                                        :rules="[requiredValidator, numberValidator]" label="Phone Number"
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

                            </VCol>

                            <VCol cols="12" sm="6" md="4" lg="3">
                                <VRow>
                                    <VCol cols="12">
                                        <h1 class="mb-4">Additional Details</h1>
                                    </VCol>
                                </VRow>

                                <!-- 👉 Biometric ID -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.biometricId" label="Biometric ID"
                                        placeholder="Biometric ID" />
                                </VCol>

                                <!-- 👉 Education Details -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.educationDetails" label="Education Details"
                                        placeholder="Education Details" />
                                </VCol>

                                <!-- 👉 Salary -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.salary" label="Salary" placeholder="Salary" />
                                </VCol>

                                <!-- 👉 Emergency Contact Name -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.emergencyContactName"
                                        label="Emergency Contact Name" placeholder="Emergency Contact Name" />
                                </VCol>

                                <!-- 👉 Emergency Contact Number -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.emergencyContactNumber"
                                        label="Emergency Contact Number" placeholder="Emergency Contact Number" />
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

                                <!-- 👉 Any allergy or disease -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.allergyOrDisease"
                                        label="Any allergy or disease" placeholder="Any allergy or disease" />
                                </VCol>
                                <!-- 👉 Any allergy or disease -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.shiftTimings" label="Shift Timings"
                                        placeholder="Shift Timings" />
                                </VCol>
                            </VCol>

                            <VCol cols="12" sm="6" md="4" lg="3">

                                <!-- 👉 Experience Details -->
                                <VCol cols="12" class="mt-9">
                                    <VTextField v-model="optionalDetails.experienceDetails" label="Experience Details"
                                        placeholder="Experience Details" />
                                </VCol>

                                <!-- 👉 Designation -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.designation" label="Designation"
                                        placeholder="Designation" />
                                </VCol>

                                <!-- 👉 Home Address -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.homeAddress" label="Home Address"
                                        placeholder="Home Address" />
                                </VCol>

                                <!-- 👉 Marital Status -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.maritalStatus" label="Marital Status"
                                        placeholder="Marital Status" />
                                </VCol>

                                <!-- 👉 Work Email -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.workEmail" label="Work Email"
                                        placeholder="Work Email" />
                                </VCol>

                                <!-- 👉 Work Email Password -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.workEmailPassword" label="Work Email Password"
                                        placeholder="Work Email Password" />
                                </VCol>

                                <!-- 👉 Company Email -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.companyEmail" label="Company Email"
                                        placeholder="Company Email" />
                                </VCol>

                                <!-- 👉 Company Email Password -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.companyEmailPassword"
                                        label="Company Email Password" placeholder="Company Email Password" />
                                </VCol>

                                <!-- 👉 PC Password -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.pcPassword" label="PC Password"
                                        placeholder="PC Password" />
                                </VCol>



                            </VCol>

                            <VCol cols="12" sm="6" md="4" lg="3" class="mt-9">

                                <!-- 👉 PC Details -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.pcDetails" label="PC Details"
                                        placeholder="PC Details" />
                                </VCol>

                                <!-- 👉 Any Paid Platform -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.anyPaidPlatform" label="Any Paid Platform"
                                        placeholder="Any Paid Platform" />
                                </VCol>

                                <!-- 👉 ID and Password of Any Paid Platforms -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.idAndPasswordOfAnyPaidPlatforms"
                                        label="ID and Password of Any Paid Platforms"
                                        placeholder="ID and Password of Any Paid Platforms" />
                                </VCol>

                                <!-- 👉 Peripheral Devices -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.peripheralDevices" label="Peripheral Devices"
                                        placeholder="Peripheral Devices" />
                                </VCol>

                                <!-- 👉 Job Type -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.jobType" label="Job Type"
                                        placeholder="Job Type" />
                                </VCol>

                                <!-- 👉 First Salary Increment -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.firstSalaryIncrement"
                                        label="First Salary increment (Amount & Month)"
                                        placeholder="First Salary Increment" />
                                </VCol>

                                <!-- 👉 Second Salary Increment -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.secondSalaryIncrement"
                                        label="Second Salary increment (Amount & Month)"
                                        placeholder="Second Salary increment (Amount & Month)" />
                                </VCol>

                                <!-- 👉 Third Salary Increment -->
                                <VCol cols="12">
                                    <VTextField v-model="optionalDetails.thirdSalaryIncrement"
                                        label="Third Salary increment (Amount & Month)"
                                        placeholder="Third Salary Increment" />
                                </VCol>

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

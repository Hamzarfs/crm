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
    const name = ref(undefined)
    const email = ref(undefined)
    const department = ref(undefined)
    const phone = ref(undefined)
    const role = ref(undefined)
    const status = ref(undefined)
    const optionalDetails = ref({
        biometricId: undefined,
        educationDetails: undefined,
        salary: undefined,
        emergencyContactName: undefined,
        emergencyContactNumber: undefined,
        vehiclePlateNumber: undefined,
        bloodGroup: undefined,
        allergyOrDisease: undefined,
        shiftTimings: undefined,
        experienceDetails: undefined,
        designation: undefined,
        homeAddress: undefined,
        maritalStatus: undefined,
        workEmail: undefined,
        workEmailPassword: undefined,
        companyEmail: undefined,
        companyEmailPassword: undefined,
        pcPassword: undefined,
        pcDetails: undefined,
        anyPaidPlatform: undefined,
        idAndPasswordOfAnyPaidPlatforms: undefined,
        peripheralDevices: undefined,
        jobType: undefined,
        joiningDate: undefined,
        firstSalaryIncrement: undefined,
        secondSalaryIncrement: undefined,
        thirdSalaryIncrement: undefined,

    })

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
        optionalDetails.value.educationDetails = newVal.details?.educationDetails
        optionalDetails.value.salary = newVal.details?.salary
        optionalDetails.value.emergencyContactName = newVal.details?.emergencyContactName
        optionalDetails.value.emergencyContactNumber = newVal.details?.emergencyContactNumber
        optionalDetails.value.vehiclePlateNumber = newVal.details?.vehiclePlateNumber
        optionalDetails.value.bloodGroup = newVal.details?.bloodGroup
        optionalDetails.value.allergyOrDisease = newVal.details?.allergyOrDisease
        optionalDetails.value.shiftTimings = newVal.details?.shiftTimings
        optionalDetails.value.experienceDetails = newVal.details?.experienceDetails
        optionalDetails.value.designation = newVal.details?.designation
        optionalDetails.value.homeAddress = newVal.details?.homeAddress
        optionalDetails.value.maritalStatus = newVal.details?.maritalStatus
        optionalDetails.value.workEmail = newVal.details?.workEmail
        optionalDetails.value.workEmailPassword = newVal.details?.workEmailPassword
        optionalDetails.value.companyEmail = newVal.details?.companyEmail
        optionalDetails.value.companyEmailPassword = newVal.details?.companyEmailPassword
        optionalDetails.value.pcPassword = newVal.details?.pcPassword
        optionalDetails.value.pcDetails = newVal.details?.pcDetails
        optionalDetails.value.anyPaidPlatform = newVal.details?.anyPaidPlatform
        optionalDetails.value.idAndPasswordOfAnyPaidPlatforms = newVal.details?.idAndPasswordOfAnyPaidPlatforms
        optionalDetails.value.peripheralDevices = newVal.details?.peripheralDevices
        optionalDetails.value.jobType = newVal.details?.jobType
        optionalDetails.value.joiningDate = newVal.details?.joiningDate
        optionalDetails.value.firstSalaryIncrement = newVal.details?.firstSalaryIncrement
        optionalDetails.value.secondSalaryIncrement = newVal.details?.secondSalaryIncrement
        optionalDetails.value.thirdSalaryIncrement = newVal.details?.thirdSalaryIncrement
    }, {
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

        <PerfectScrollbar :options="{ wheelPropagation: false, suppressScrollX: true }">
            <VCard flat>
                <VCardText>
                    <!-- 👉 Form -->
                    <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                        <VRow>
                            <VCol cols="12" sm="12" md="4" lg="3" class="mt-2 ">
                                <VRow>
                                    <VCol cols="12">
                                        <h1>Required Fields</h1>
                                    </VCol>


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

                            <VCol cols="12" sm="6" md="4" lg="3" class="mt-2">
                                <VRow>
                                    <VCol cols="12">
                                        <h1>Additional Details</h1>
                                    </VCol>

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
                                        <VTextField v-model="optionalDetails.salary" label="Salary"
                                            placeholder="Salary" />
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
                                </VRow>
                            </VCol>

                            <VCol cols="12" sm="6" md="4" lg="3">
                                <VRow>
                                    <!-- 👉 Experience Details -->
                                    <VCol cols="12" class="mt-13">
                                        <VTextField v-model="optionalDetails.experienceDetails"
                                            label="Experience Details" placeholder="Experience Details" />
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
                                        <VTextField v-model="optionalDetails.workEmailPassword"
                                            label="Work Email Password" placeholder="Work Email Password" />
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
                                </VRow>
                            </VCol>

                            <VCol cols="12" sm="6" md="4" lg="3" class="mt-13">
                                <VRow>
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
                                        <VTextField v-model="optionalDetails.peripheralDevices"
                                            label="Peripheral Devices" placeholder="Peripheral Devices" />
                                    </VCol>

                                    <!-- 👉 Job Type -->
                                    <VCol cols="12">
                                        <VTextField v-model="optionalDetails.jobType" label="Job Type"
                                            placeholder="Job Type" />
                                    </VCol>

                                    <!-- 👉 Joining Date -->
                                    <VCol cols="12">
                                        <AppDateTimePicker v-model="optionalDetails.joiningDate" label="Joining Date"
                                            placeholder="Joining Date" clearable :config="{ dateFormat: 'd-m-Y' }" />
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
                                </VRow>
                            </VCol>

                            <!-- 👉 Submit and Cancel -->
                            <VCol cols="12" class="d-flex justify-end">
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

<style lang="css" scoped></style>

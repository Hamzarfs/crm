<script setup lang="ts">
import type { VForm } from 'vuetify/components/VForm';

interface Emit {
    (e: 'update:isDrawerOpen', value: boolean): void
    (e: 'customerData', value: any): void
}

interface Props {
    isDrawerOpen: boolean
    errors: Record<string, string | undefined>
    customer: Record<string, any>
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()


const isFormValid = ref(false)
const refForm = ref<VForm>()
const first_name = ref(props.customer.first_name)
const last_name = ref(props.customer.last_name)
const email = ref(props.customer.email)
const contact = ref(props.customer.contact)
const area = ref(props.customer.area)
const zip = ref(props.customer.zip)
const country = ref(props.customer.country)

watch(() => props.customer, newVal => {
    first_name.value = newVal.first_name
    last_name.value = newVal.last_name
    email.value = newVal.email
    contact.value = newVal.contact
    area.value = newVal.area
    zip.value = newVal.zip
    country.value = newVal.country
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
            emit('customerData', {
                first_name: first_name.value,
                last_name: last_name.value,
                email: email.value,
                contact: contact.value,
                area: area.value,
                zip: zip.value,
                country: country.value,
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
    <VNavigationDrawer temporary :width="400" location="end" :model-value="props.isDrawerOpen"
        @update:model-value="handleDrawerModelValueUpdate">

        <!-- 👉 Title -->
        <AppDrawerHeaderSection title="Edit Customer" @cancel="closeNavigationDrawer" />

        <VDivider />

        <VCard flat>
            <VCardText>
                <!-- 👉 Form -->
                <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                    <VRow>
                        <!-- 👉 First Name -->
                        <VCol cols="12">
                            <VTextField v-model="first_name" :rules="[requiredValidator]" label="First Name"
                                :error-messages="props.errors.first_name" placeholder="First name" />
                        </VCol>

                        <!-- 👉 Last Name -->
                        <VCol cols="12">
                            <VTextField v-model="last_name" :rules="[requiredValidator]" label="Last Name"
                                :error-messages="props.errors.last_name" placeholder="Last name" />
                        </VCol>

                        <!-- 👉 Email -->
                        <VCol cols="12">
                            <VTextField v-model="email" :rules="[requiredValidator, emailValidator]"
                                label="Email Address" :error-messages="props.errors.email"
                                placeholder="Email address" />
                        </VCol>

                        <!-- 👉 Contact -->
                        <VCol cols="12">
                            <VTextField v-model="contact" :rules="[requiredValidator, phoneNumberValidator]"
                                label="Contact number" :error-messages="props.errors.contact"
                                placeholder="Customer name" />
                        </VCol>

                        <!-- 👉 Area -->
                        <VCol cols="12">
                            <VTextField v-model="area" :rules="[requiredValidator]" label="Area"
                                :error-messages="props.errors.area" placeholder="Area" />
                        </VCol>

                        <!-- 👉 ZIP -->
                        <VCol cols="12">
                            <VTextField v-model="zip" :rules="[requiredValidator]" label="ZIP code"
                                :error-messages="props.errors.zip" placeholder="ZIP code" />
                        </VCol>

                        <!-- 👉 Country -->
                        <VCol cols="12">
                            <VTextField v-model="country" :rules="[requiredValidator]" label="Country"
                                :error-messages="props.errors.country" placeholder="Country" />
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

    </VNavigationDrawer>
</template>

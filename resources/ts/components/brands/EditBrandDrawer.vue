<script setup lang="ts">
    import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
    import type { VForm } from 'vuetify/components/VForm';

    interface Emit {
        (e: 'update:isDrawerOpen', value: boolean): void
        (e: 'brandData', value: any): void
    }

    interface Props {
        isDrawerOpen: boolean
        errors: Record<string, string | undefined>
        brand: Record<string, any>
        currencies: Record<string, string>[]
        countries: string[]
    }

    const props = defineProps<Props>()
    const emit = defineEmits<Emit>()


    const isFormValid = ref(false)
    const refForm = ref<VForm>()
    const brand = ref<Record<string, any>>({
        name: '',
        slug: '',
        url: '',
        fb_url: '',
        ig_url: '',
        phone: '',
        whatsapp: '',
        chat_support: '',
        country: undefined,
        currency: undefined,
    })


    watch(() => props.brand, newVal => {
        brand.value.name = newVal.name
        brand.value.slug = newVal.slug
        brand.value.url = newVal.url
        brand.value.fb_url = newVal.fb_url
        brand.value.ig_url = newVal.ig_url
        brand.value.phone = newVal.phone
        brand.value.whatsapp = newVal.whatsapp
        brand.value.chat_support = newVal.chat_support
        brand.value.country = newVal.country ?? undefined
        brand.value.currency = newVal.currency_id
    }, {
        deep: true
    })


    // 👉 drawer close
    const closeNavigationDrawer = () => {
        emit('update:isDrawerOpen', false)
        Object.assign(props.errors, {
            name: undefined,
            slug: undefined,
            url: undefined,
            fb_url: undefined,
            ig_url: undefined,
            phone: undefined,
            whatsapp: undefined,
            chat_support: undefined,
            country: undefined,
            currency: undefined,
        })
        nextTick(() => {
            props.errors.name = ''
            refForm.value?.reset()
            refForm.value?.resetValidation()
        })
    }

    const onSubmit = () => {
        refForm.value?.validate().then(({ valid }) => {
            if (valid) {
                emit('brandData', brand.value)
            }
        })
    }

    defineExpose({
        closeNavigationDrawer
    })

    const handleDrawerModelValueUpdate = (val: boolean) => {
        emit('update:isDrawerOpen', val)
    }

    watch(
        () => [brand.value.name, brand.value.slug], // Watch both name & slug
        ([newName, newSlug], [oldName, oldSlug]) => {
            if (newName !== oldName) {
                brand.value.slug = slugify(newName as string);
            } else if (newSlug !== oldSlug) {
                brand.value.slug = slugify(newSlug);
            }
        }
    )

</script>

<template>
    <VNavigationDrawer class="scrollable-content" temporary :width="400" location="end"
        :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">

        <!-- 👉 Title -->
        <AppDrawerHeaderSection title="Edit Brand" @cancel="closeNavigationDrawer" />

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard flat>
                <VCardText>
                    <!-- 👉 Form -->
                    <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                        <VRow>
                            <!-- 👉 Name -->
                            <VCol cols="12">
                                <VTextField v-model="brand.name" :rules="[requiredValidator]" label="Brand Name"
                                    clearable :error-messages="props.errors.name" placeholder="Brand Name" />
                            </VCol>

                            <!-- 👉 Slug -->
                            <VCol cols="12">
                                <VTextField v-model="brand.slug" :rules="[requiredValidator]" label="Slug" clearable
                                    :error-messages="props.errors.slug" placeholder="Slug" />
                            </VCol>

                            <!-- 👉 URL -->
                            <VCol cols="12">
                                <VTextField v-model="brand.url" :rules="[requiredValidator, urlValidator]"
                                    label="Brand URL" clearable :error-messages="props.errors.url"
                                    placeholder="Brand URL" />
                            </VCol>

                            <!-- 👉 FB URL -->
                            <VCol cols="12">
                                <VTextField v-model="brand.fb_url" :rules="[facebookUrlValidator]" label="Brand FB URL"
                                    clearable :error-messages="props.errors.fb_url" placeholder="Brand FB URL" />
                            </VCol>

                            <!-- 👉 IG URL -->
                            <VCol cols="12">
                                <VTextField v-model="brand.ig_url" :rules="[instagramUrlValidator]" label="Brand IG URL"
                                    clearable :error-messages="props.errors.ig_url" placeholder="Brand IG URL" />
                            </VCol>

                            <!-- 👉 Phone -->
                            <VCol cols="12">
                                <VTextField v-model="brand.phone" :rules="[requiredValidator, phoneNumberValidator]"
                                    label="Brand Phone Number" :error-messages="props.errors.phone" clearable
                                    placeholder="Brand Phone Number" />
                            </VCol>

                            <!-- 👉 Whatsapp -->
                            <VCol cols="12">
                                <VTextField v-model="brand.whatsapp" :rules="[phoneNumberValidator]"
                                    label="Brand Whatsapp Number" :error-messages="props.errors.whatsapp" clearable
                                    placeholder="Brand Whatsapp Number" />
                            </VCol>

                            <!-- 👉 Chat Support -->
                            <VCol cols="12">
                                <VTextField v-model="brand.chat_support" label="Chat Support service"
                                    :error-messages="props.errors.chat_support" placeholder="Chat Support service"
                                    clearable />
                            </VCol>

                            <!-- 👉 Country -->
                            <VCol cols="12">
                                <VSelect v-model="brand.country" :items="props.countries" label="Country"
                                    :error-messages="props.errors.country" placeholder="Country"
                                    :rules="[requiredValidator]" clearable />
                            </VCol>

                            <!-- 👉 Currencies -->
                            <VCol cols="12">
                                <VSelect v-model="brand.currency" :items="props.currencies" label="Currency"
                                    :error-messages="props.errors.currency" placeholder="Currency"
                                    :rules="[requiredValidator]" clearable />
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

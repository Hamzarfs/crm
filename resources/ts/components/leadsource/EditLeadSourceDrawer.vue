<script setup lang="ts">
import type { VForm } from 'vuetify/components/VForm';

interface Emit {
    (e: 'update:isDrawerOpen', value: boolean): void
    (e: 'leadsourceData', value: any): void
}

interface Props {
    isDrawerOpen: boolean
    errors: Record<string, string | undefined>
    leadsource: Record<string, any>

}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()


const isFormValid = ref(false)
const refForm = ref<VForm>()
const name = ref(props.leadsource.name)


watch(() => props.leadsource, newVal => {
    name.value = newVal.name

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
            emit('leadsourceData', {
                id: props.leadsource.id,
                name: name.value,

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
        <AppDrawerHeaderSection title="Edit Lead Source" @cancel="closeNavigationDrawer" />

        <VDivider />

        <VCard flat>
            <VCardText>
                <!-- 👉 Form -->
                <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                    <VRow>
                        <!-- 👉 Name -->
                        <VCol cols="12">
                            <VTextField v-model="name" :rules="[requiredValidator]" label="Name"
                                :error-messages="props.errors.name" placeholder="Lead Source Name" />
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

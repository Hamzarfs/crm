<script setup lang="ts">
import type { VForm } from 'vuetify/components/VForm';

interface Emit {
    (e: 'update:isDrawerOpen', value: boolean): void
    (e: 'departmentData', value: any): void
}

interface Props {
    isDrawerOpen: boolean
    errors: Record<string, string | undefined>
    department: Record<string, any>
    users: any
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()


const isFormValid = ref(false)
const refForm = ref<VForm>()
const name = ref(props.department.name)
const leader = ref(props.department.leader_id)

watch(() => props.department, newVal => {
    name.value = newVal.title
    leader.value = newVal.leader_id
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
            emit('departmentData', {
                id: props.department.id,
                name: name.value,
                leader_id: leader.value,
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

const users = props.users.map((u: any) => ({ title: u.name, value: u.id }))

</script>

<template>
    <VNavigationDrawer temporary :width="400" location="end" :model-value="props.isDrawerOpen"
        @update:model-value="handleDrawerModelValueUpdate">

        <!-- 👉 Title -->
        <AppDrawerHeaderSection title="Edit Department" @cancel="closeNavigationDrawer" />

        <VDivider />

        <VCard flat>
            <VCardText>
                <!-- 👉 Form -->
                <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                    <VRow>
                        <!-- 👉 Name -->
                        <VCol cols="12">
                            <VTextField v-model="name" :rules="[requiredValidator]" label="Name"
                                :error-messages="props.errors.name" placeholder="Department Name" />
                        </VCol>

                        <!-- 👉 Leader -->
                        <VCol cols="12">
                            <VAutocomplete v-model="leader" :items="users" :rules="[requiredValidator]" label="Leader"
                                :error-messages="props.errors.leader_id" placeholder="Select Leader" />
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

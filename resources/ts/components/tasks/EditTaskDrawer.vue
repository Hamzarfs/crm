<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import type { VForm } from 'vuetify/components/VForm';

interface Emit {
    (e: 'update:isDrawerOpen', value: boolean): void
    (e: 'taskData', value: any): void
}

interface Props {
    isDrawerOpen: boolean
    users: Record<number, any>[]
    statuses: Record<string, string>[]
    errors: any | any[]
    task: Record<string, any>
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const isFormValid = ref(false)
const refForm = ref<VForm>()
const title = ref(props.task.title)
const description = ref(props.task.description)
const deadline = ref(parseDate(props.task.deadline))
const assigned_to = ref(props.task.assigned_to?.id)
const status = ref(props.task.status)


// 👉 drawer close
const closeNavigationDrawer = () => {
    emit('update:isDrawerOpen', false)
    nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
    })
}

watch(() => props.task, newVal => {
    if (newVal) {
        title.value = newVal.title
        description.value = newVal.description
        deadline.value = parseDate(newVal.deadline)
        assigned_to.value = newVal.assigned_to?.id
        status.value = newVal.status
    }
}, {
    immediate: true,
    deep: true
})

const onSubmit = () => {
    refForm.value?.validate().then(({ valid }) => {
        if (valid) {
            emit('taskData', {
                id: props.task.id,
                title: title.value,
                description: description.value,
                deadline: deadline.value,
                assigned_to: assigned_to.value,
                status: status.value,
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
    <VNavigationDrawer temporary :width="600" location="end" class="scrollable-content"
        :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">

        <!-- 👉 Title -->
        <AppDrawerHeaderSection title="Edit Task" @cancel="closeNavigationDrawer" />

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard flat>
                <VCardText>
                    <!-- 👉 Form -->
                    <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                        <VRow>
                            <!-- 👉 Title -->
                            <VCol cols="12">
                                <VTextField v-model="title" :rules="[requiredValidator]" label="Title"
                                    :error-messages="props.errors.title" placeholder="Title" />
                            </VCol>

                            <!-- 👉 Description -->
                            <VCol cols="12">
                                <VTextarea v-model="description" label="Description" placeholder="Description"
                                    :rules="[requiredValidator]" :error-messages="props.errors.description" auto-grow />
                            </VCol>

                            <!-- 👉 Deadline -->
                            <VCol cols="12">
                                <AppDateTimePicker v-model="deadline" label="Deadline" placeholder="Deadline" clearable
                                    :config="{ dateFormat: 'd-m-Y', minDate: new Date(deadline) }"
                                    clear-icon="ri-close-fill" :error-messages="props.errors.deadline"
                                    :rules="[requiredValidator]" />
                            </VCol>

                            <!-- 👉 Assigned To -->
                            <VCol cols="12">
                                <VAutocomplete v-model="assigned_to" label="Assigned To" placeholder="Assigned To"
                                    :items="props.users" auto-select-first clearable chips
                                    :error-messages="props.errors.assigned_to" :rules="[requiredValidator]" />
                            </VCol>

                            <!-- 👉 Status -->
                            <VCol cols="12">
                                <VSelect v-model="status" label="Select status" placeholder="Select status"
                                    :error-messages="props.errors.status" :rules="[requiredValidator]"
                                    :items="props.statuses" />
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

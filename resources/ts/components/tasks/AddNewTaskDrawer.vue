<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import type { VForm } from 'vuetify/components/VForm';

interface Emit {
    (e: 'update:isDrawerOpen', value: boolean): void
    (e: 'taskData', value: FormData): void
}

interface Props {
    isDrawerOpen: boolean
    users: Record<number, any>[]
    statuses: Record<number, any>[]
    errors: any
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()


const isFormValid = ref(false)
const refForm = ref<VForm>()
const title = ref('')
const description = ref('')
const deadline = ref()
const assigned_to = ref()
const status = ref('pending')
const files = ref([])

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
            const formData = new FormData()

            // Append non-file data
            formData.append('title', title.value)
            formData.append('description', description.value)
            formData.append('deadline', deadline.value)
            formData.append('assigned_to', assigned_to.value)
            formData.append('status', status.value)

            // Append files
            files.value.length && files.value.forEach((file: File, index: number) => {
                formData.append(`files[${index}]`, file)
            })

            emit('taskData', formData)
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
        <AppDrawerHeaderSection title="Add New Task" @cancel="closeNavigationDrawer" />

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
                                    :config="{ dateFormat: 'd-m-Y', minDate: new Date() }" clear-icon="ri-close-line"
                                    :error-messages="props.errors.deadline" :rules="[requiredValidator]" />
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

                            <!-- 👉 Files -->
                            <VCol cols="12">
                                <VFileInput v-model="files" label="Select files" placeholder="Select files" multiple
                                    prepend-icon="" append-icon="$file" chips show-size clearable
                                    :error-messages="props.errors.files" :rules="[fileValidator]"
                                    accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt" counter
                                    :counter-size-string="String(files?.length)" />
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

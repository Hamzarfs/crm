<script setup lang="ts">
import { mergeProps } from 'vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import type { VForm } from 'vuetify/components/VForm';

// Get currently logged in user data
const userData = useCookie('userData').value

interface Props {
    isDrawerOpen: boolean
    task: Record<string, any>
    statuses: Record<string, string>[]
    errors: any
    resolveTaskStatusColor: (status: string) => string
}

interface Emit {
    (e: 'update:isDrawerOpen', value: boolean): void
    (e: 'comment-data', value: FormData): void
    (e: 'status-update', value: { id: number, status: string }): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const handleDrawerModelValueUpdate = (val: boolean) => {
    emit('update:isDrawerOpen', val)
    !val && nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
    })
}

// 👉 drawer close
const closeNavigationDrawer = () => {
    emit('update:isDrawerOpen', false)
    nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
    })
}

const downloadFile = async (file: any, index: number) => {
    const fileBlob = await $api(`/tasks/files/${file.id}`, {
        responseType: 'blob'
    })
    const url = URL.createObjectURL(new Blob([fileBlob]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `File ${index + 1}.${extractFileExtension(file.file)}`)
    document.body.appendChild(link)
    link.click()
    link.parentNode?.removeChild(link)
}

const files = ref([])
const refForm = ref<VForm>()
const isFormValid = ref(false)

const onSubmit = (e: SubmitEvent) => {
    refForm.value?.validate()
        .then(async ({ valid: isValid }) => {
            if (isValid) {
                const data = new FormData(e.target as HTMLFormElement)

                emit('comment-data', data)
            }
        })
}

defineExpose({
    commentForm: refForm
})

</script>

<template>
    <VNavigationDrawer temporary :width="600" location="end" class="scrollable-content"
        :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">

        <!-- 👉 Title -->
        <AppDrawerHeaderSection :title="props.task.title" @cancel="closeNavigationDrawer" />

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard flat>
                <VCardText>
                    <VRow>
                        <!-- 👉 Assigned to -->
                        <VCol cols="12">
                            <div class="d-flex align-center">
                                <h3 class="text-h6">Assigned to</h3>
                                <VSpacer />
                                <div class="d-flex align-center">
                                    <VAvatar size="small" color="primary" variant="tonal" class="me-2">
                                        {{ getInitials(props.task.assigned_to?.name) }}
                                    </VAvatar>
                                    <span class="text-body-1 font-weight-medium">
                                        {{ props.task.assigned_to?.name }}
                                    </span>
                                </div>
                            </div>
                        </VCol>

                        <VDivider />

                        <!-- 👉 Status -->
                        <VCol cols="12">
                            <div class="d-flex align-center">
                                <h3 class="text-h6">Status</h3>
                                <VSpacer />
                                <VMenu v-if="userData.id === props.task.assigned_to?.id"
                                    transition="slide-y-transition">
                                    <template #activator="{ props: menuProps }">
                                        <VTooltip location="top">
                                            <template #activator="{ props: tooltipProps }">
                                                <VChip v-bind="mergeProps(menuProps, tooltipProps)" elevation="5"
                                                    :color="resolveTaskStatusColor(props.task.status)" size="small"
                                                    class="text-uppercase">
                                                    {{ statuses.find(
                                                        (status: any) => status.value === props.task.status)?.title }}
                                                </VChip>
                                            </template>
                                            <span>Click to update status</span>
                                        </VTooltip>
                                    </template>

                                    <VList>
                                        <VListItem v-for="status in statuses" :key="status.value" :value="status.value"
                                            @click="emit('status-update', { id: props.task.id, status: status.value })">
                                            {{ status.title }}
                                        </VListItem>
                                    </VList>
                                </VMenu>

                                <VChip v-else :color="resolveTaskStatusColor(props.task.status)" size="small"
                                    class="text-uppercase" elevation="5">
                                    {{ statuses.find((status: any) => status.value === props.task.status)?.title }}
                                    <!-- {{ slugToTitleCase(item.status) }} -->
                                </VChip>
                            </div>
                        </VCol>

                        <VDivider />

                        <!-- 👉 Deadline -->
                        <VCol cols="12">
                            <div class="d-flex align-center">
                                <h3 class="text-h6">Deadline</h3>
                                <VSpacer />
                                <VChip :color="checkDeadlineStatus(props.task.deadline) === 'exceeded' ? 'error' :
                                    checkDeadlineStatus(props.task.deadline) === 'approaching' ? 'success' : 'warning'"
                                    elevation="5" size="small" class="font-weight-medium">
                                    {{ parseDate(props.task.deadline) }}
                                </VChip>
                            </div>
                        </VCol>

                        <VDivider />

                        <template v-if="props.task.files?.length > 0">
                            <!-- 👉 Files -->
                            <VCol cols="12">
                                <h3 class="text-h6">Files</h3>
                                <div class="d-flex flex-wrap">
                                    <VChip class="me-2 mb-2" v-for="(file, i) in props.task.files" :key="file.id"
                                        style="width: fit-content;" elevation="5" variant="elevated"
                                        prepend-icon="$file" color="primary" @click="downloadFile(file, i)">
                                        {{ `File ${i + 1}.${extractFileExtension(file.file)}` }}
                                    </VChip>
                                </div>
                            </VCol>

                            <VDivider />
                        </template>

                        <!-- 👉 Description -->
                        <VCol cols="12">
                            <h3 class="text-h6 mb-3">Description</h3>
                            <p>{{ props.task.description }}</p>
                        </VCol>

                        <VDivider />

                        <!-- 👉 Comments -->
                        <VCol cols="12">
                            <h3 class="text-h6 mb-3">Comments</h3>

                            <template v-if="props.task.comments?.length > 0">
                                <!-- 👉 Comments -->
                                <div v-for="(comment, i) in props.task.comments" :key="comment.id" class="mb-5">
                                    <div class="d-flex mb-3 gap-3">
                                        <VAvatar color="primary" variant="tonal">
                                            {{ getInitials(comment.created_by?.name) }}
                                        </VAvatar>
                                        <div>
                                            <div class="text-body-1 font-weight-medium">
                                                {{ comment.created_by?.name }}
                                            </div>
                                            <div class="text-body-1 text-caption">{{ comment.created_at }}</div>
                                        </div>
                                    </div>

                                    <p class="text-body-1">{{ comment.comment }}</p>

                                    <div v-if="comment.files?.length > 0">
                                        <VChip class="me-2 mb-2" v-for="(file, i) in comment.files" :key="file.id"
                                            style="width: fit-content;" elevation="5" variant="elevated"
                                            prepend-icon="$file" color="primary" @click="downloadFile(file, i)">
                                            {{ `File ${i + 1}.${extractFileExtension(file.file)}` }}
                                        </VChip>
                                    </div>
                                    <VDivider class="my-3" v-if="i !== props.task.comments.length - 1" />
                                </div>
                            </template>

                            <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
                                <VRow>
                                    <!-- 👉 Comment -->
                                    <VCol cols="12">
                                        <VTextarea label="Comment" placeholder="Comment" name="comment"
                                            :rules="[requiredValidator]" auto-grow rows="2" />
                                    </VCol>

                                    <!-- 👉 Files -->
                                    <VCol cols="12">
                                        <VFileInput v-model="files" label="Select files" placeholder="Select files"
                                            clearable multiple prepend-icon="" append-icon="$file" chips show-size
                                            :rules="[fileValidator]" counter color="primary"
                                            :counter-size-string="String(files?.length)" name="files[]"
                                            accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt" />
                                    </VCol>

                                    <!-- 👉 Submit and Cancel -->
                                    <VCol cols="12">
                                        <VBtn type="submit" class="me-4">
                                            Submit
                                        </VBtn>
                                        <VBtn type="reset" variant="outlined" color="error"
                                            @click="closeNavigationDrawer">
                                            Cancel
                                        </VBtn>
                                    </VCol>
                                </VRow>
                            </VForm>
                        </VCol>
                    </VRow>
                </VCardText>
            </VCard>
        </PerfectScrollbar>
    </VNavigationDrawer>
</template>

<script setup lang="ts">
    import { useAuthStore } from '@/@core/stores/auth';



    const props = defineProps<{
        task: Record<any, any>
    }>()

    const openEditTaskDrawer = inject<any>('openEditTaskDrawer')
    const openDeleteTaskDialog = inject<any>('openDeleteTaskDialog')

    const authStore = useAuthStore()

    // Get currently logged in user data
    const userData = authStore.user

    const moreOptions = [
        {
            title: 'Edit',
            onClick: () => {
                openEditTaskDrawer(props.task)
            },
        },
        {
            title: 'Delete',
            onClick: () => {
                openDeleteTaskDialog(props.task.id)
            },
        },
    ]

</script>

<template>
    <VCard v-if="props.task" :ripple="false" :link="false" class="kanban-card position-relative mb-3"
        :id="props.task.id" :data-status="props.task.status">
        <VCardText class="d-flex flex-column gap-2">
            <div class="d-flex justify-space-between align-centera">
                <p class="text-h5 text-high-emphasis mb-0">
                    {{ props.task.title }}
                </p>

                <VMenu v-if="userData?.role.value === 'admin' || props.task.creator.id === userData?.id">
                    <template #activator="{ props: p, isActive }">
                        <VIcon v-bind="p" icon="ri-more-2-line" class="more-options"
                            :style="isActive ? 'opacity: 1' : ''" size="20" @click.stop />
                    </template>
                    <VList :items="moreOptions" item-props />
                </VMenu>
            </div>

            <!-- footer  -->
            <div class="">
                <div v-if="props.task.creator" class="d-flex align-center justify-space-between">
                    <div>Created by:</div>

                    <VAvatar size="30" color="primary" style="font-size: 10px;">
                        {{ getInitials(props.task.creator.name) }}
                        <VTooltip activator="parent">
                            {{ props.task.creator.name }}
                        </VTooltip>
                    </VAvatar>
                </div>

                <div v-if="props.task.assignee" class="d-flex align-center justify-space-between mt-1">
                    <div>Assigned to:</div>

                    <VAvatar size="30" color="primary" style="font-size: 10px;">
                        {{ getInitials(props.task.assignee.name) }}
                        <VTooltip activator="parent">
                            {{ props.task.assignee.name }}
                        </VTooltip>
                    </VAvatar>
                </div>
            </div>
        </VCardText>
    </VCard>
</template>

<style lang="scss" scoped>
    .kanban-card {
        cursor: grab;

        :active {
            cursor: grabbing;
        }

        &[style^="z-index"] {
            cursor: grabbing !important;
        }

        .more-options {
            opacity: 0;
        }

        &:hover .more-options {
            opacity: 1;
        }
    }
</style>

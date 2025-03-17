<script setup lang="ts">


const props = defineProps<{
    item: Record<any, any>
    boardId: number
    boardName: string
}>()

const emit = defineEmits<{
    (e: 'deleteKanbanItem', value: number): void
}>()

</script>

<template>
    <VCard v-if="item" :ripple="false" :link="false" class="kanban-card position-relative">
        <VCardText class="d-flex flex-column gap-2">
            <div class="d-flex align-start gap-2">
                <!-- @TODO -->
                <div class="d-flex flex-wrap gap-2">
                    <VChip size="small" color="primary">
                        New
                    </VChip>
                    <VChip size="small" color="secondary">
                        New
                    </VChip>
                </div>
            </div>

            <!-- Lead title -->
            <p class="text-h5 text-high-emphasis mb-0">
                {{ item.customer.name }}
            </p>

            <!-- footer  -->
            <div class="">
                <div v-if="item.created_by" class="d-flex align-center justify-space-between">
                    <div>Created by:</div>

                    <VAvatar size="30" color="primary" style="font-size: 10px;">
                        {{ getInitials(item.created_by.name) }}
                        <VTooltip activator="parent">
                            {{ item.created_by.name }}
                        </VTooltip>
                    </VAvatar>
                </div>

                <div v-if="item.assigned_to" class="d-flex align-center justify-space-between mt-1">
                    <div>Assigned to:</div>

                    <VAvatar size="30" color="primary" style="font-size: 10px;">
                        {{ getInitials(item.assigned_to.name) }}
                        <VTooltip activator="parent">
                            {{ item.assigned_to.name }}
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

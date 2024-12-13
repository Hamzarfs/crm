<script setup lang="ts">

import VueDraggable from 'vuedraggable';



const props = defineProps<{
    boardName: string
    boardId: string | number | undefined
    kanbanItems: Record<any, any>[]
}>()

const tasks = ref(props.kanbanItems)

watch(() => props.kanbanItems, newTasks => {
    tasks.value = newTasks
})

const emit = defineEmits<{
    (e: 'updateTaskStatus', value: { id: number, status: string, newStatus: string }): void
    (e: 'selectTaskToView', value: Record<string, any>): void
}>()


</script>

<template>
    <div class="kanban-board">
        <!-- 👉 board heading and title -->
        <div class="kanban-board-header pb-4">
            <div class="d-flex align-center justify-space-between ">
                <h4 class="text-lg font-weight-medium text-truncate">
                    {{ props.boardName }}
                </h4>
            </div>
        </div>

        <!-- 👉 draggable task start here -->
        <VueDraggable :list="tasks" itemKey="id" group="status" class="h-100" :id="props.boardId"
            @end="e => $emit('updateTaskStatus', { id: e.item.id, status: e.item.dataset.status, newStatus: e.to.id })">
            <template #item="{ element }">
                <TaskKanbanCard :task="element" @click="$emit('selectTaskToView', element)" />
            </template>
        </VueDraggable>
    </div>
</template>

<style lang="scss"></style>

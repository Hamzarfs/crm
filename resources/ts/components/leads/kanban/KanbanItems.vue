<script setup lang="ts">

    import { animations, handleEnd } from '@formkit/drag-and-drop';
    import { useDragAndDrop } from '@formkit/drag-and-drop/vue';
    import { VForm } from 'vuetify/components/VForm';


    const $toast = useToast()


    const props = defineProps<{
        kanbanIds: number[]
        boardName: string
        boardId: string | number | undefined
        kanbanItems: Record<any, any>[]
        unassignedLeads: Record<any, any>[]
    }>()

    const emit = defineEmits<{
        (e: 'renameBoard', value: Record<string, any>): void
        (e: 'deleteBoard', value: number): void
        (e: 'addNewItem', value: any): void
        (e: 'editItem', value: any | undefined): void
        (e: 'updateItemsState', value: any): void
        (e: 'deleteItem', value: number): void
        (e: 'rmLeadFromUnassignedLeads', value: Record<string, any>): void
        (e: 'selectLeadToViewDetails', value: Record<string, any>): void
    }>()

    const [refKanbanBoard, leads] = useDragAndDrop(props.kanbanItems, {
        plugins: [animations()],
        draggable: child => child.classList.contains('kanban-card'),
        sortable: false,
        group: 'pipelines',
        handleEnd: async (data) => {
            const { success, message } = await $api(`leads/${data.draggedNode.el.id}/update-pipeline-stage`, {
                method: 'PATCH',
                body: {
                    stage: data.currentParent.el.id
                },
            })

            if (success)
                $toast.success(message)
            else
                $toast.error(message ?? 'Something went wrong. Please try again or contact support.')

            handleEnd(data)
        },
    })

    const localBoardName = ref(props.boardName)
    const isAddNewFormVisible = ref(false)
    const isBoardNameEditing = ref(false)
    const refForm = ref<VForm>()
    const newLeadToAssign = ref<any>(undefined)
    const refKanbanBoardTitle = ref<VForm>()


    const boardActions = [
        {
            title: 'Rename',
            prependIcon: 'ri-pencil-line',
            onClick: () => { isBoardNameEditing.value = true },
        },
        {
            title: 'Delete',
            prependIcon: 'ri-delete-bin-line',
            onClick: () => (emit('deleteBoard', props.boardId as number)),
        },
    ]

    // 👉 emit rename board event
    const renameBoard = () => {
        refKanbanBoardTitle.value?.validate().then(valid => {
            if (valid.valid) {
                emit('renameBoard', {
                    id: props.boardId,
                    name: localBoardName.value,
                })
                isBoardNameEditing.value = false
            }
        })
    }

    // 👉 emit add new item event
    const addNewItem = async () => {
        const { success, message } = await $api(`leads/${newLeadToAssign.value.id}/update-pipeline-stage`, {
            method: 'PATCH',
            body: {
                stage: props.boardId
            },
        })

        if (success) {
            props.kanbanItems.push(newLeadToAssign.value)
            emit('rmLeadFromUnassignedLeads', newLeadToAssign.value)
            newLeadToAssign.value = undefined
            isAddNewFormVisible.value = false
            $toast.success(message)
        } else
            $toast.error(message ?? 'Something went wrong. Please try again or contact support.')
    }

    const deleteItem = (item: number) => {
        emit('deleteItem', item)
    }

    // 👉 reset add new item form when esc or close
    const hideAddNewForm = () => {
        isAddNewFormVisible.value = false
        refForm.value?.reset()
    }

    // close board name form when you loose focus from the form
    onClickOutside(refKanbanBoardTitle, () => {
        isBoardNameEditing.value = false
    })
    onClickOutside(refKanbanBoard, () => {
        isAddNewFormVisible.value = false
        newLeadToAssign.value = undefined
    })

    // 👉 reset board rename form when esc or close
    const hideResetBoardNameForm = () => {
        isBoardNameEditing.value = false
        localBoardName.value = props.boardName
    }

    // 👉 submit form on enter and new line on shift-enter
    const handleEnterKeydown = (event: { key: string; shiftKey: any }) => {
        if (event.key === 'Enter' && !event.shiftKey)
            addNewItem()
    }

</script>

<template>
    <div class="kanban-board">
        <!-- 👉 board heading and title -->
        <div class="kanban-board-header pb-4">
            <VForm v-if="isBoardNameEditing" ref="refKanbanBoardTitle" @submit.prevent="renameBoard">
                <VTextField v-model="localBoardName" density="compact" autofocus variant="underlined"
                    :rules="[requiredValidator]" hide-details class="border-0" @keydown.esc="hideResetBoardNameForm">
                    <template #append-inner>
                        <div class="d-flex align-center gap-1 h-100">
                            <VIcon size="small" variant="text" color="success" icon="ri-check-line"
                                class="cursor-pointer" @click="renameBoard" />

                            <VIcon size="small" variant="text" color="error" icon="ri-close-line" class="cursor-pointer"
                                @click="hideResetBoardNameForm" />
                        </div>
                    </template>
                </VTextField>
            </VForm>

            <div v-else class="d-flex align-center justify-space-between ">
                <h4 class="text-lg font-weight-medium text-truncate">
                    {{ boardName }}
                </h4>

                <MoreBtn class="more-btn" size="x-small" icon-size="20" :menu-list="boardActions" item-props />
            </div>
        </div>

        <!-- 👉 draggable task start here -->
        <div ref="refKanbanBoard" class="kanban-board-drop-zone rounded d-flex flex-column gap-4"
            :id="(props.boardId as string)" :class="leads.length ? 'mb-4' : ''">
            <template v-for="lead in leads" :key="lead.id">
                <KanbanCard :item="lead" :board-id="(props.boardId as number)" :board-name="props.boardName"
                    :id="lead.id" @delete-kanban-item="deleteItem" @click="emit('selectLeadToViewDetails', lead)" />
            </template>

            <!-- 👉 Add new Form -->
            <div class="add-new-form">
                <h6 class="text-base font-weight-regular cursor-pointer ms-4"
                    @click="isAddNewFormVisible = !isAddNewFormVisible">
                    <VIcon size="15" icon="ri-add-line" /> Add New Lead
                </h6>

                <VForm v-if="isAddNewFormVisible" ref="refForm" class="mt-4" validate-on="submit"
                    @submit.prevent="addNewItem">
                    <div class="mb-4">
                        <VAutocomplete v-model="newLeadToAssign" :items="props.unassignedLeads" clearable
                            :menu-props="{ attach: refKanbanBoard }" density="compact" :rules="[requiredValidator]"
                            :placeholder="`Add lead to ${props.boardName}`" autofocus
                            @keydown.enter="handleEnterKeydown" @keydown.esc="hideAddNewForm">
                            <template #item="{ item, props }">
                                <VListItem v-bind="props" :title="item.value.customer.name"
                                    :subtitle="`ID: ${item.value.id}`" />
                            </template>

                            <template #selection="{ item }">
                                {{ item.value.customer.name }}
                            </template>
                        </VAutocomplete>
                    </div>
                    <div class="d-flex gap-4 flex-wrap">
                        <VBtn size="small" type="submit">
                            Add
                        </VBtn>
                        <VBtn size="small" variant="outlined" color="secondary" @click="hideAddNewForm">
                            Cancel
                        </VBtn>
                    </div>
                </VForm>
            </div>
        </div>
    </div>

</template>

<style lang="scss"></style>

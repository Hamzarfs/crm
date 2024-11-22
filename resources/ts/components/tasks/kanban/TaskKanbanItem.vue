<script setup lang="ts">



const $toast = useToast()


const props = defineProps<{
    boardName: string
    boardId: string | number | undefined
    kanbanItems: Record<any, any>[]
}>()

const emit = defineEmits<{
    (e: 'deleteBoard', value: number): void
    (e: 'addNewItem', value: any): void
    (e: 'editItem', value: any | undefined): void
    (e: 'updateItemsState', value: any): void
    (e: 'deleteItem', value: number): void
}>()

// const [refKanbanBoard, tasks] = useDragAndDrop(props.kanbanItems, {
//     plugins: [animations()],
//     draggable: child => child.classList.contains('kanban-card'),
//     sortable: false,
//     group: 'statuses',
//     // handleEnd: async (data) => {
//     //     const { success, message } = await $api(`leads/${data.targetData.node.data.value.id}/update-pipeline-stage`, {
//     //         method: 'PATCH',
//     //         body: {
//     //             stage: data.targetData.parent.el.id
//     //         },
//     //     })

//     //     if (success)
//     //         $toast.success(message)
//     //     else
//     //         $toast.error(message ?? 'Something went wrong. Please try again or contact support.')

//     //     handleEnd(data)
//     // },
// })

// watch(() => props.kanbanItems, newValue => {
//     console.log(newValue);
//     remapNodes(refKanbanBoard.value as any)

// }, {
//     deep: true
// })

const isViewTaskDetailsDrawerVisible = ref(false)
const selectedTask = ref<any>(undefined)

const boardActions = [
    {
        title: 'Rename',
        prependIcon: 'ri-pencil-line',
        onClick: () => { },
    },
    {
        title: 'Delete',
        prependIcon: 'ri-delete-bin-line',
        onClick: () => (emit('deleteBoard', props.boardId as number)),
    },
]


// 👉 emit add new item event
// const addNewItem = async () => {
//     const { success, message } = await $api(`leads/${newLeadToAssign.value.id}/update-pipeline-stage`, {
//         method: 'PATCH',
//         body: {
//             stage: props.boardId
//         },
//     })

//     if (success) {
//         props.kanbanItems.push(newLeadToAssign.value)
//         emit('rmLeadFromUnassignedLeads', newLeadToAssign.value)
//         newLeadToAssign.value = undefined
//         isAddNewFormVisible.value = false
//         $toast.success(message)
//     } else
//         $toast.error(message ?? 'Something went wrong. Please try again or contact support.')
// }

// const deleteItem = (item: number) => {
//     emit('deleteItem', item)
// }

// 👉 reset add new item form when esc or close
// const hideAddNewForm = () => {
//     isAddNewFormVisible.value = false
//     refForm.value?.reset()
// }

// close board name form when you loose focus from the form
// onClickOutside(refKanbanBoardTitle, () => {
//     isBoardNameEditing.value = false
// })
// onClickOutside(refKanbanBoard, () => {
//     isAddNewFormVisible.value = false
//     newLeadToAssign.value = undefined
// })

// 👉 reset board rename form when esc or close
// const hideResetBoardNameForm = () => {
//     isBoardNameEditing.value = false
//     localBoardName.value = props.boardName
// }

// 👉 submit form on enter and new line on shift-enter
// const handleEnterKeydown = (event: { key: string; shiftKey: any }) => {
//     if (event.key === 'Enter' && !event.shiftKey)
//         addNewItem()
// }

</script>

<template>
    <div class="kanban-board">
        <!-- 👉 board heading and title -->
        <div class="kanban-board-header pb-4">
            <div class="d-flex align-center justify-space-between ">
                <h4 class="text-lg font-weight-medium text-truncate">
                    {{ boardName }}
                </h4>

                <MoreBtn class="more-btn" size="x-small" icon-size="20" :menu-list="boardActions" item-props />
            </div>
        </div>

        <!-- 👉 draggable task start here -->
        <!-- <VueDraggable v-model="props.kanbanItems">

        </VueDraggable> -->

    </div>

    <!-- <ViewLeadDetailsDrawer v-model:is-drawer-open="isViewLeadDetailsDrawerVisible" v-model:lead="selectedLead" /> -->
</template>

<style lang="scss"></style>

<script setup lang="ts">

    import { VForm } from 'vuetify/components';


    const $toast = useToast()

    const props = defineProps<{
        kanbanData: any[]
    }>()

    const emit = defineEmits<{
        (e: 'addNewBoard', value: string): void
        (e: 'renameBoard', value: Record<string, any>): void
        (e: 'deleteBoard', value: number): void
        (e: 'addNewItem', value: any): void
        (e: 'editItem', value: any): void
        (e: 'deleteItem', value: number): void
        (e: 'updateItemsState', value: any): void
        (e: 'updateBoardState', value: number[]): void
        (e: 'addLeadToPipeline', value: Record<string, any>): void
    }>()

    const isAddNewBoardFormVisible = ref(false)
    const isViewLeadDetailsDrawerVisible = ref(false)
    const selectedLead = ref<any>(undefined)


    const refAddNewBoard = ref<VForm>()

    const boardTitle = ref<string>('')

    // 👉 Add new board function that emit the name and id of new board
    const addNewBoard = () => {
        refAddNewBoard.value?.validate().then(valid => {
            if (valid.valid) {
                emit('addNewBoard', boardTitle.value)
                isAddNewBoardFormVisible.value = false
                boardTitle.value = ''
            }
        })
    }

    // 👉 emit delete board event
    const deleteBoard = (boardId: number) => {
        emit('deleteBoard', boardId)
    }

    // 👉 emit rename board event
    const renameBoard = ({ id, name }: any) => {
        emit('renameBoard', { id, name })
    }

    // 👉  delete kanban item
    const deleteKanbanItemFn = (item: number) => {
        emit('deleteItem', item)
    }

    const hideAddNewForm = () => {
        isAddNewBoardFormVisible.value = false
        refAddNewBoard.value?.reset()
    }

    // close add new item form when you loose focus from the form
    onClickOutside(refAddNewBoard, hideAddNewForm)

    const { leads: unassignedLeads } = await $api('leads/without-pipeline-stage')

    const rmLeadFromUnassignedLeads = (lead: any) => {
        const index = unassignedLeads.findIndex((l: any) => l.id == lead.id)
        unassignedLeads.splice(index, 1)
    }

    const selectLeadToViewDetails = (lead: any) => {
        selectedLead.value = lead
        isViewLeadDetailsDrawerVisible.value = true
    }



</script>

<template>
    <div class="kanban-main-wrapper d-flex gap-4 h-100">
        <!-- 👉 kanban render  -->
        <div ref="kanbanWrapper" class="d-flex ga-4">
            <template v-for="pipeline in props.kanbanData" :key="pipeline.id">
                <!-- 👉 kanban render -->
                <KanbanItems :kanban-ids="pipeline.itemsIds" :board-name="pipeline.title" :board-id="pipeline.id"
                    :kanban-items="pipeline.items" @delete-board="deleteBoard" @rename-board="renameBoard"
                    @delete-item="deleteKanbanItemFn" @rm-lead-from-unassigned-leads="rmLeadFromUnassignedLeads"
                    @select-lead-to-view-details="selectLeadToViewDetails" :unassigned-leads="unassignedLeads" />
            </template>
        </div>

        <!-- 👉 add new form  -->
        <div class="add-new-form text-no-wrap" style="inline-size: 10rem;">
            <h6 class="text-lg font-weight-medium cursor-pointer"
                @click="isAddNewBoardFormVisible = !isAddNewBoardFormVisible">
                <VIcon size="18" icon="ri-add-line" /> Add New
            </h6>

            <!-- 👉 Form -->
            <VForm v-if="isAddNewBoardFormVisible" ref="refAddNewBoard" class="mt-4" validate-on="submit"
                @submit.prevent="addNewBoard">
                <div class="mb-4">
                    <VTextField v-model="boardTitle" density="compact" :rules="[requiredValidator]" autofocus
                        placeholder="Add Board Title" @keydown.esc="hideAddNewForm" />
                </div>
                <div class="d-flex gap-3">
                    <VBtn size="small" type="submit">
                        Add
                    </VBtn>
                    <VBtn size="small" variant="tonal" color="secondary" type="reset" @click="hideAddNewForm">
                        Cancel
                    </VBtn>
                </div>
            </VForm>
        </div>

        <!-- View lead details drawer -->
        <ViewLeadDetailsDrawer v-model:is-drawer-open="isViewLeadDetailsDrawerVisible" v-model:lead="selectedLead" />

    </div>
</template>

<style lang="scss">
    @use "@styles/variables/_vuetify.scss" as vuetify;

    .kanban-main-wrapper {
        overflow: auto hidden;
        margin-inline-start: -0.6rem;
        min-block-size: calc(100vh - 10.5rem);
        padding-inline-start: 0.6rem;

        .kanban-board {
            inline-size: 16.875rem;
            min-inline-size: 16.875rem;

            .kanban-board-drop-zone {
                min-block-size: 100%;
            }
        }

        .add-new-form {
            .v-field__field {
                border-radius: vuetify.$border-radius-root;
                background-color: rgb(var(--v-theme-surface));
            }
        }
    }
</style>

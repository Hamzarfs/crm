<script setup lang="ts">
    const $toast = useToast()

    const { pipelineStages: _pipelineStages } = await $api('lead-stages')
    const pipelineStages = ref(_pipelineStages)

    // 👉 Adding new pipeline
    const addNewPipeline = async (newPipelineName: string) => {
        const { success, message, pipelineStage } = await $api('lead-stages', {
            method: 'POST',
            body: { name: newPipelineName },
            onResponseError({ response }) {
                response._data.errors.name.forEach((msg: string) => $toast.error(msg))
            },
        })

        if (success) {
            pipelineStages.value.push(pipelineStage)
            $toast.success(message)
        } else
            $toast.error(message ?? "Something went wrong! Please try again or contact the support team.")
    }

    // 👉 Delete pipeline
    const deletePipeline = async (id: number) => {
        const { success, message } = await $api(`lead-stages/${id}`, {
            method: 'DELETE',
        })

        if (success) {
            const index = pipelineStages.value.findIndex((stage: any) => stage.id == id)
            pipelineStages.value.splice(index, 1)
            $toast.success(message)
        } else
            $toast.error(message ?? "Something went wrong! Please try again or contact the support team.")
    }

    // 👉 Rename pipeline
    const renamePipeline = async ({ id, name }: any) => {
        const { success, message, pipelineStage } = await $api(`lead-stages/${id}`, {
            method: 'PUT',
            body: { name },
            onResponseError({ response }) {
                $toast.error(response._data?.errors?.name[0])
            },
        })

        if (success) {
            const index = pipelineStages.value.findIndex((stage: any) => stage.id == id)
            pipelineStages.value[index] = pipelineStage
            $toast.success(message)
        } else
            $toast.error(message ?? "Something went wrong! Please try again or contact the support team.")
    }

    // 👉 Delete lead
    // const deleteLead = async (leadId: number) => {
    //     const { success, message } = await $api(`leads/${leadId}`, {
    //         method: 'DELETE',
    //     })

    //     if (success) {
    //         const pipelineIndex = pipelineStages.value.findIndex((stage: any) => stage.items.find((lead: any) => lead.id == leadId))
    //         const leadIndex = pipelineStages.value[pipelineIndex].items.findIndex((lead: any) => lead.id == leadId)
    //         pipelineStages.value[pipelineIndex].items.splice(leadIndex, 1)
    //         $toast.success(message)
    //     } else
    //         $toast.error(message ?? "Something went wrong! Please try again or contact the support team.")
    // }

</script>

<template>
    <VBtn prepend-icon="ri-list-ordered" class="mb-3" :to="{ name: 'leads' }">List View</VBtn>

    <KanbanBoard :kanban-data="pipelineStages" @add-new-board="addNewPipeline" @delete-board="deletePipeline"
        @rename-board="renamePipeline" />
</template>

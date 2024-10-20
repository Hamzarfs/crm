<script setup lang="ts">

import { PerfectScrollbar } from 'vue3-perfect-scrollbar';



interface Props {
    isDrawerOpen: boolean
    lead: Record<string, any>
}

interface Emits {
    (e: 'update:isDrawerOpen', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// 👉 Drawer close
const closeNavigationDrawer = () => {
    emit('update:isDrawerOpen', false)
}

const handleDrawerModelValueUpdate = (val: boolean) => {
    emit('update:isDrawerOpen', val)
}

</script>

<template>
    <VNavigationDrawer temporary :width="600" location="start" class="scrollable-content"
        :model-value="props.isDrawerOpen" @update:model-value="handleDrawerModelValueUpdate">

        <!-- 👉 Title -->
        <AppDrawerHeaderSection title="Lead Details" @cancel="closeNavigationDrawer" />

        <VDivider />

        <PerfectScrollbar :options="{ wheelPropagation: false }">
            <VCard flat>
                <VCardText>

                </VCardText>
            </VCard>
        </PerfectScrollbar>
    </VNavigationDrawer>
</template>

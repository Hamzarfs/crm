<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

const router = useRouter()

// TODO: Get type from backend
const userData = useCookie<any>('userData')

const logout = async () => {
    try {
        const res = await $api('/auth/logout', {
            method: 'POST'
        })

        // Remove "accessToken" from cookie
        useCookie('accessToken').value = null

        // Remove "userData" from cookie
        userData.value = null

        // Redirect to login page
        router.push({ name: 'login' })
    }
    catch (err) {
        console.log(err)
    }
}

const userProfileList = [
    { type: 'divider' },
    {
        type: 'navItem',
        icon: 'ri-user-line',
        title: 'Profile',
        to: { name: 'apps-user-view-id', params: { id: 21 } },
    },
    {
        type: 'navItem',
        icon: 'ri-settings-4-line',
        title: 'Settings',
        to: { name: 'pages-account-settings-tab', params: { tab: 'account' } },
    },
    {
        type: 'navItem',
        icon: 'ri-file-text-line',
        title: 'Billing Plan',
        to: { name: 'pages-account-settings-tab', params: { tab: 'billing-plans' } },
        badgeProps: { color: 'error', content: '4' },
    },
    { type: 'divider' },
    {
        type: 'navItem',
        icon: 'ri-money-dollar-circle-line',
        title: 'Pricing',
        to: { name: 'pages-pricing' },
    },
    {
        type: 'navItem',
        icon: 'ri-question-line',
        title: 'FAQ',
        to: { name: 'pages-faq' },
    },
    { type: 'divider' },

]
</script>

<template>
    <VBadge v-if="userData" dot bordered location="bottom right" offset-x="3" offset-y="3" color="success">
        <VAvatar class="cursor-pointer" size="38" :color="!(userData && userData.avatar) ? 'primary' : undefined">
            {{ getInitials(userData.name) }}

            <!-- SECTION Menu -->
            <VMenu activator="parent" min-width="230" max-width="265" location="bottom end" offset="15px">
                <VList>
                    <VListItem>
                        <div class="d-flex gap-2 align-center">
                            <VListItemAction>
                                <VBadge dot location="bottom right" offset-x="3" offset-y="3" color="success">
                                    <VAvatar :color="!(userData && userData.avatar) ? 'primary' : undefined">
                                        {{ getInitials(userData.name) }}
                                    </VAvatar>
                                </VBadge>
                            </VListItemAction>

                            <div>
                                <h6 class="text-h6 font-weight-medium">
                                    {{ userData.name }}
                                </h6>
                                <VListItemSubtitle class="text-uppercase text-disabled font-weight-bold">
                                    {{ userData.role.title }}
                                </VListItemSubtitle>
                                <VListItemSubtitle v-if="userData.role.value !== 'admin'"
                                    class="text-uppercase text-disabled font-weight-bold">
                                    {{ userData.department.title }}
                                </VListItemSubtitle>
                            </div>
                        </div>
                    </VListItem>

                    <PerfectScrollbar :options="{ wheelPropagation: false }">
                        <template v-for="item in userProfileList" :key="item.title">
                            <VListItem v-if="item.type === 'navItem'" :to="item.to">
                                <template #prepend>
                                    <VIcon :icon="item.icon" size="22" />
                                </template>

                                <VListItemTitle>{{ item.title }}</VListItemTitle>

                                <template v-if="item.badgeProps" #append>
                                    <VBadge inline v-bind="item.badgeProps" />
                                </template>
                            </VListItem>

                            <VDivider v-else class="my-1" />
                        </template>

                        <VListItem>
                            <VBtn block color="error" size="small" append-icon="ri-logout-box-r-line" @click="logout">
                                Logout
                            </VBtn>
                        </VListItem>
                    </PerfectScrollbar>
                </VList>
            </VMenu>
            <!-- !SECTION -->
        </VAvatar>
    </VBadge>
</template>

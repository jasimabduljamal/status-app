<template>
    <div>
        <Header />
        <div class="page-layout">
            <div>
                <SideNavBar />
            </div>
            <div class="view">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SideNavBar from '@/components/SideNavBar.vue'
import Header from '@/components/Header.vue'
import { onMounted } from 'vue'

onMounted(() => {})
</script>
<style scoped>
.page-layout {
    display: flex;
}

.view {
    margin-top: 70px;
    width: 100%;
}
</style>

<script setup lang="ts">
const toggleNavbar = () => {
    const navElement = document.getElementById('navbar')
    if (!navElement) return
    if (navElement.style.display === 'none') {
        navElement.style.position = 'relative'
        navElement.style.display = 'block'
    } else {
        navElement.style.display = 'none'
    }
}
</script>

<template>
    <header>
        <button class="hamburger-menu" @click="toggleNavbar">
            <font-awesome-icon class="hamburger-icon" :icon="['fas', 'bars']" />
        </button>
    </header>
</template>

<style scoped>
.hamburger-menu {
    position: fixed;
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    margin-left: 14px;
    padding-top: 22px;
    z-index: 999;
}

.hamburger-icon {
    color: var(--icon-color);
    padding: 3px;
}
</style>

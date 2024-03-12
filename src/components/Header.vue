<script setup lang="ts">
const toggleNavbar = () => {
    const navElement = document.getElementById('navbar')
    if (!navElement) return
    // if (navElement.style.width === 'none') {
    //     navElement.style.position = 'relative'
    //     navElement.style.display = 'block'
    // } else {
    //     navElement.style.display = 'none'
    // }
    if (window.innerWidth <= 992) {
        navElement.style.position = 'fixed'
    } else {
        navElement.style.position = 'relative'
    }
    if (navElement.offsetWidth === 0) {
        navElement.style.width = '200px'
        navElement.style.borderRightWidth = '1px'
    } else {
        navElement.style.borderRightWidth = '0px'
        navElement.style.width = '0px'
    }
}
</script>

<template>
    <header>
        <div class="header">
            <font-awesome-icon class="hamburger-icon" :icon="['fas', 'bars']" @click="toggleNavbar"/>
            <p>Status&nbsp;App</p>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: var(--bg-secondary);
    border-bottom: 1px solid var(--bg-tertiary);
}

.header {
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 22px;
}

.header p {
    font-size: 16px;
    font-weight: bold;
    color: var(--text-color);
    margin-left: 10px;
}

.hamburger-menu {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0px;
    text-decoration: none;
}

.hamburger-icon {
    color: var(--icon-color);
    cursor: pointer;
}
</style>

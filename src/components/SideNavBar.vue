<script setup lang="ts"></script>

<template>
    <nav id="navbar">
        <div class="nav-heading">Status App</div>

        <div class="nav-links">
            <a class="nav-menu-items" :href="'/monitor'">
                <font-awesome-icon class="nav-menu-icon" :icon="['fas', 'globe']" />
                <span class="nav-menu-name">Monitor</span>
            </a>
            <a class="nav-menu-items" :href="'/monitor'">
                <font-awesome-icon class="nav-menu-icon" :icon="['fas', 'bars-progress']" />
                <span class="nav-menu-name">System</span>
            </a>
            <a class="nav-menu-items" :href="'/monitor'">
                <font-awesome-icon class="nav-menu-icon" :icon="['fas', 'code']" />
                <span class="nav-menu-name">Code</span>
            </a>
        </div>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary);
    height: 100vh;
    width: 200px;
    border-right: 1px solid var(--bg-tertiary);
    overflow-x: hidden;
    transition: 0.5s;
}

.hamburger-menu {
    position: fixed;
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    margin-left: 14px;
    padding-top: 23px;
    z-index: 999;
}

.hamburger-icon {
    color: var(--icon-color);
    padding: 3px;
}

@media only screen and (max-width: 992px) {
    nav {
        width: 0px;
    }
}

.nav-heading {
    padding: 20px 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--text-color);
    margin-left: 46px;
}

.nav-links {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}

.nav-menu-items {
    color: white;
    text-decoration: none;
    margin: 0 10px 10px 0;
    padding: 5px 0 5px 10px;
    display: flex;
    align-items: center;
    border-radius: 8px;
}

.nav-menu-items:hover {
    background-color: var(--bg-separator);
}

.nav-menu-icon {
    color: var(--icon-color);
}

.nav-menu-name {
    margin-left: 10px;
    font-size: var(--font-size);
    color: var(--text-color);
}
</style>

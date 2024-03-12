<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGlobe, faBarsProgress, faComputer, faCode, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { onMounted } from 'vue'

// onMounted(() => {
//     const arrow = document.querySelectorAll('.arrow')
//     console.log('arrows are: ', arrow)
//     for (var i = 0; i < arrow.length; i++) {
//         arrow[i].addEventListener('click', (e) => {
//             if (!e) return
//             const arrowParent = e.target!.parentElement!.parentElement //selecting main parent of arrow
//             console.log('event target: ', arrowParent)
//             arrowParent.classList.toggle('showMenu')
//         })
//     }
// })

const showSubMenu = (menu: string, arrow: string) => {
    const submenu = document.getElementById(menu)
    const arrowIcon = document.getElementById(arrow)
    if (!arrowIcon) return
    arrowIcon.classList.toggle('show-sub-menu')
    if (!submenu) return
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none'
    } else {
        submenu.style.display = 'block'
    }
}
</script>

<template>
    <nav id="navbar">
        <ul class="nav-links">
            <li>
                <router-link class="nav-menu-items" to="/monitor">
                    <font-awesome-icon class="nav-menu-icon" :icon="faGlobe" />
                    <span class="nav-menu-name">Monitor</span>
                </router-link>
            </li>
            <li>
                <router-link class="nav-menu-items" to="/system">
                    <font-awesome-icon class="nav-menu-icon" :icon="faBarsProgress" />
                    <span class="nav-menu-name">System</span>
                </router-link>
            </li>
            <li>
                <div @click.stop="showSubMenu('submenus', 'submenu-arrow')" style="cursor: pointer">
                    <a class="nav-menu-items sub-menu-present">
                        <div style="display: flex; align-items: center">
                            <font-awesome-icon class="nav-menu-icon" :icon="faComputer" />
                            <span class="nav-menu-name">Sub&nbsp;Heading</span>
                        </div>
                        <font-awesome-icon id="submenu-arrow" class="nav-menu-icon sub-menu-icon" :icon="faChevronDown" />
                    </a>
                </div>
                <ul id="submenus">
                    <li>
                        <router-link class="sub-menu-items" to="/submenu/1"><span style="font-size: var(--font-size)">HTML&nbsp;&&nbsp;CSS</span></router-link>
                    </li>
                    <li>
                        <router-link class="sub-menu-items" to="/submenu/2"><span style="font-size: var(--font-size)">JavaScript</span></router-link>
                    </li>
                    <li>
                        <router-link class="sub-menu-items" to="/submenu/3"><span style="font-size: var(--font-size)">PHP&nbsp;&&nbsp;MySQL</span></router-link>
                    </li>
                </ul>
            </li>
            <li>
                <router-link class="nav-menu-items" to="/code">
                    <font-awesome-icon class="nav-menu-icon" :icon="faCode" />
                    <span class="nav-menu-name">Code</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
#navbar {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary);
    height: 100vh;
    width: 200px;
    border-right: 1px solid var(--bg-tertiary);
    overflow-x: hidden;
    transition: all 0.5s ease;
    padding-top: 10px;
}

@media only screen and (max-width: 992px) {
    #navbar {
        width: 0px;
        border-right-width: 0px;
    }
}

.nav-links {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    padding-left: 0;
}

.nav-links li {
    list-style: none;
}

.nav-menu-items {
    color: white;
    text-decoration: none;
    margin: 0 10px 10px 0;
    padding: 5px 0 5px 10px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    position: relative;
}

.nav-menu-items:hover,
.router-link-active, .sub-menu-items:hover {
    background-color: var(--bg-separator);
}

.sub-menu-present {
    justify-content: space-between;
    padding-right: 10px;
    -webkit-user-select: none;
    user-select: none;
}

.nav-menu-icon {
    color: var(--icon-color);
}

.show-sub-menu {
    transform: rotate(-180deg);
}

#submenus {
    display: none;
    padding-left: 26px;
    margin-right: 10px;
}

#submenu-arrow {
    transition: all 0.5s ease;
}

.sub-menu-items {
    color: white;
    text-decoration: none;
    margin-bottom: 5px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    position: relative;
    transition: all 0.3s ease;
}

.nav-menu-name {
    margin-left: 10px;
    font-size: var(--font-size);
    color: var(--text-color);
}
</style>

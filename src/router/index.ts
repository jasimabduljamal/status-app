import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Dashboard.vue')
        },
        {
            path: '/monitor',
            name: 'monitor',
            component: () => import('@/views/Dashboard.vue')
        },
        {
            path: '/system',
            name: 'system',
            component: () => import('@/views/Dashboard.vue')
        },
        {
            path: '/code',
            name: 'code',
            component: () => import('@/views/Dashboard.vue')
        },
        {
            path: '/submenu/:id',
            name: 'code',
            component: () => import('@/views/Dashboard.vue')
        }
    ]
})

export default router

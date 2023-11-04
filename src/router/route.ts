import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('../views/Home.vue') },
    { path: '/about', component: () => import('../views/About.vue') },
    { path: '/:pathMatch(.*)', component: () => import('../components/ErrorPage.vue') }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: () => import('./components/Root.vue'/* webpackChunkName: "js/chunk-root-admin" */)},
    { path: '/login', component: () => import('./components/login/login.vue' /* webpackChunkName: "js/chunk-login-page" */)},
    { path : '/dashboard', component: () => import('./components/base/Dashboard.vue' /* webpackChunkName: "js/chunk-dashboard-page" */)},
    { path : '/register', component: () => import('./components/login/register.vue' /* webpackChunkName: "js/chunk-register-page" */)},
]

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',
});

export default router;
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: () => import('./components/Root.vue'/* webpackChunkName: "js/chunk-root-admin" */)},
    { path: '/login', component: () => import('./components/login/login.vue' /* webpackChunkName: "js/chunk-login-page" */)},
    { path : '/dashboard', component: () => import('./components/base/Dashboard.vue' /* webpackChunkName: "js/chunk-dashboard-page" */),meta: {requiresAuth: true},},
    { path : '/register', component: () => import('./components/login/register.vue' /* webpackChunkName: "js/chunk-register-page" */)},
    // {path : '/reward', component: () => import('./components/main/Reward/Reward.vue' /* webpackChunkName: "js/chunk-dashboard-reward" */)}
]

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',
});


router.beforeEach(async(to,from,next) => {
    const userId = localStorage.getItem('userid');
    if(to.matched.some(route => route.meta.requiresAuth)){
        if(!userId){
            next({path: '/login', replace:true})
            return
        }
    }
    else if(to.path === "/login" || to.path === "/register"){
        if(userId){
            //
        }
    }
    next();
})

export default router;
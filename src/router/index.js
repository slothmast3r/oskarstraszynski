import Router from 'vue-router'
import Vue from 'vue'
import EmailFormContact from "../components/EmailFormContact";

Vue.use(Router)

const routes = [
    {
        path: '/home',
        name: 'Home'
    },
    {
        path: '/aboutMe',
        name: 'AboutMe',
    },
    {
        path: '/contact',
        name: 'Contact',
    }
]

const router = new Router({
    mode: 'history',
    routes // short for `routes: routes`
})

router.afterEach((to,from)=>{

    let navName = to.name
    if(navName) navName = ' | ' + navName
    else navName = ''
    document.title = 'Oskar Str.'+ navName
})
export default router

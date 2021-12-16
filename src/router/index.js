import Router from 'vue-router'
import Vue from 'vue'
import EmailFormContact from "../components/EmailFormContact";


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

Vue.use(Router)

const routes = [
    { path: '/home', name: 'Home', component: Foo },
    { path: '/aboutMe', name: 'About me', component: Bar },
    {
        path: '/contact',
        name: 'Contact',
        component: EmailFormContact
    }
]

const router = new Router({
    mode: 'history',
    routes // short for `routes: routes`
})

router.afterEach((to,from)=>{
    document.title = 'Oskar Str. | '+to.name
})
export default router

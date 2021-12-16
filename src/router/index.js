import Router from 'vue-router'
import Vue from 'vue'
import EmailFormContact from "../components/EmailFormContact";


const Foo = { template: '<div style="height: 100px; width: 100px; background: blue"">foo</div>' }
const Bar = { template: '<div>bar</div>' }

Vue.use(Router)

const routes = [
    { path: '/foo', name: 'Foo', component: Foo },
    { path: '/bar', name: 'Bar', component: Bar },
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

export default router

import Router from 'vue-router'
import Vue from 'vue'


const Foo = { template: '<div style="height: 100px; width: 100px; background: blue"">foo</div>' }
const Bar = { template: '<div>bar</div>' }

Vue.use(Router)

const routes = [
    { path: '/foo', name: 'Foo', component: Foo },
    { path: '/bar', name: 'Bar', component: Bar }
]

const router = new Router({
    mode: 'history',
    routes // short for `routes: routes`
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import test from './views/test.vue'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'default',
    //   component: Home,
    // },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    // {
    //   path: '/',
    //   name: 'default',
    //   redirect: '/Home',
    // },
    // {
    //   path: '/Home',
    //   component: Home
    // }
  ]
})

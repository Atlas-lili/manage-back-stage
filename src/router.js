import Vue from 'vue'
import Router from 'vue-router'
import createStore from './store'

import Login from './views/Login/Login.vue'
import Sys from './views/Sys/Sys.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Login',
      beforeEnter (to, from, next) { // beforeEach和beforeResolve之间
        const store = createStore()
        store.dispatch('updateUser')
        if(sessionStorage.getItem('ms_username')){
          next({path: '/Sys/readme'})
        } else {
          next()
        }
      },
      component: Login
    },
    {
      path: '/Sys',
      component: Sys,
      beforeEnter (to, from, next) { // beforeEach和beforeResolve之间
        const store = createStore()
        store.dispatch('updateUser')
        if(sessionStorage.getItem('ms_username')){
          next()
        } else {
          next({path: '/Login'})
        }
      },
      children: [{
        path: 'readme',
        component: () => import('./views/Sys/routes/ReadMe')
      }, {
        path: 'basetable',
        component: () => import('./views/Sys/routes/BaseTable')
      }, {
        path: 'vuetable',
        component: () => import('./views/Sys/routes/VueTable')
      }, {
        path: 'baseform',
        component: () => import('./views/Sys/routes/BaseForm')
      }, {
        path: 'vueeditor',
        component: () => import('./views/Sys/routes/VueEditor')
      }, {
        path: 'markdown',
        component: () => import('./views/Sys/routes/MarkDown')
      }]
    },
    {
      path: '*',
      redirect: '/Login'
      // redirect: '/Sys/readme'
    }
    // ,
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

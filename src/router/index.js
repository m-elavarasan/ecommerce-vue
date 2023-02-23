import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/pages/Login/LoginView.vue'
import Dashbaord from '@/pages/Dashbaord/Dashbaord.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashbaord',
    component:Dashbaord,
  },
  {
    path: '/login',
    name: 'login',
    component:LoginView,
  },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/pages/Login/LoginView.vue'
import Dashboard from '@/pages/Dashboard/Dashboard.vue'


Vue.use(VueRouter)
function guardMyroute(to, from, next)
{
 let isAuthenticated= false;
 if(localStorage.getItem('isLogined',true)){
  isAuthenticated = true;
 }
 else{
  isAuthenticated= false;
 }
  if(isAuthenticated) 
 {
  next();
 } 
 else
 {
  next('/login');
 }
}

const routes = [
  {
    path: '/login',
    name: 'login',
    component:LoginView,
  },
  {
    path: "/",
    name: "dashboard",
    beforeEnter : guardMyroute,
    meta: {title: 'Dashboard'},
    component: Dashboard,
  }
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

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)
/* eslint-disable */

const checkAuth = (to, from, next) => {
    var exp = new Date(localStorage.getItem('token-exp'))
    var today = new Date()

    if (localStorage.getItem('token') != '' && exp > today) {
      next()
      return
    }
    next('/login')
}


export default new Router({
    routes: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/login',
          name: 'Login',
          component: Login,
        },
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard,
          beforeEnter: checkAuth
        }
    ]
})

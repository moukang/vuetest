import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ElementUI from 'element-ui';
import Login from '../views/Login'

Vue.use(VueRouter)
Vue.use(ElementUI);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router

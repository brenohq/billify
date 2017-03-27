import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './App'

import Login from './components/login.vue'
import Houses from './components/houses.vue'
import Bills from './components/bills.vue'
import Person from './components/person.vue'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/login',
  component: Login
}, {
  path: '/person',
  component: Person
}, {
  path: '/houses',
  Component: Houses
}, {
  path: '/bills',
  component: Bills
}]

const router = new VueRouter({
  routes
})

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red'
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app')

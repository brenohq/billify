import Vue from 'vue'
import VueRouter from 'vue-router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './App'
import Houses from './components/houses.vue'
import Bills from './components/bills.vue'
import Person from './components/person.vue'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [{
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

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/'
import App from './App.vue'
import A from './components/A.vue'

Vue.component(A.name, A)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

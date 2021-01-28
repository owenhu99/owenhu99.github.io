import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import Routes from './router/routes'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})

new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')

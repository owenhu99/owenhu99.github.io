import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import vuetify from './plugins/vuetify'
import Routes from './router/routes'
import {Swiper as SwiperClass, Pagination, Navigation, Mousewheel, Autoplay} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

import 'swiper/swiper-bundle.min.css'

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
const {Swiper, SwiperSlide} = getAwesomeSwiper(SwiperClass)

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMeta)

const router = new VueRouter({
  routes: Routes
})

new Vue({
  vuetify,
  Swiper,
  SwiperSlide,
  render: h => h(App),
  router: router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'
import 'swiper/css/swiper.css'
import  './mock/mockServer'

Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  router,//所有组件都可以直接访问￥router和$route
  store //$store
}).$mount('#app')

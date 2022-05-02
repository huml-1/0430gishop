import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  router,//所有组件都可以直接访问￥router和$route
}).$mount('#app')

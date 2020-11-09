import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Http from './service/http.js'//全局注册Http
import Test from './service/test.js'
Vue.config.productionTip = false
Vue.prototype.$Http = Http //将Http挂载在Vue实例上（全局可用）
Vue.prototype.$Test = Test
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

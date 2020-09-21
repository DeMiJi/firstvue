import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import echarts from 'echarts'
import axios from 'axios'



// 引入echarts
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
//引入axios
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

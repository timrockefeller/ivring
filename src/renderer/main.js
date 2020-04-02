import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import './utils/scrollbar.js'
import ElementUI from 'element-ui'
// import Client from './utils/client.js'
import LPCore from './utils/LPCore.js'
// import Echarts from 'echarts'
// Vue.prototype.echarts = Echarts

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// Plugins
Vue.use(LPCore)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')


import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
import storage from 'store'
import VCharts from 'v-charts'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$storage = storage
Vue.use(elementui)
Vue.use(VCharts)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
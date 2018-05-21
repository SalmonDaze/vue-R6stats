
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import elementui from 'element-ui'
import store from './store/index'
import storage from 'store'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$storage = storage
Vue.use(elementui)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
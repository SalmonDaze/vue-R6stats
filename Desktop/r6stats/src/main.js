
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import elementui from 'element-ui'
import store from './store/index'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(elementui)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import navHeader from '../components/navHeader.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: navHeader,
    }
  ]
})

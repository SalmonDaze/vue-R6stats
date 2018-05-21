import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import navHeader from '../components/navHeader.vue'
import index from '../components/index.vue'
import playerDetail from '../components/playerDetail.vue'
import playerData from '../components/playerData.vue'
import about from '../components/about.vue'
import favorite from '../components/favorite.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path:'/player',
      name:'player',
      component: playerDetail,
      children:[{
          path:'playerData',
          name:'playerData',
          components:{
            default:playerData,
          }
        }]
    },
    {
      path:'/about',
      name:'about',
      component:about,
    },
    {
      path:'/favorite',
      name:'favorite',
      component:favorite,
    }
  ]
})

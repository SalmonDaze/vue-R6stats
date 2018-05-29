import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import navHeader from '../components/navHeader.vue'
import index from '../components/index.vue'
import playerDetail from '../components/playerDetail.vue'
import playerData from '../components/playerData.vue'
import about from '../components/about.vue'
import favorite from '../components/favorite.vue'
import leaderboard from '../components/leaderboard.vue'
import operator from '../components/operator.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vue-R6stats/',
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
          component:playerData,
          
        },
        {
          path:'operator',
          name:'operator',
          component:operator
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
    },
    {
      path:'/leaderboard',
      name:'leaderboard',
      component:leaderboard
    }
  ]
})

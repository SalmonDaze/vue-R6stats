import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        playerId:'/',
        platform:'/',
        playername:'/',
        playerDetail:[],
        content:{
            data:{
                stats:{
                    general:{
                    }
                },
                lastPlayed:{
                    ranked:'/',
                    causual:'/',
                },
                level:'/',
                rank:{
                    apac:{}
                }
            },
        },
    },
    mutations:{
        initData(state){
            state.content = {}
        }
    },
    actions:{
        initData({commit}){
            commit('initData')
        }
    }
})
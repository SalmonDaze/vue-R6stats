<template>
    <div class="favorite-container">
        <nav-header page-title='我的收藏'></nav-header>
        <div class='fac'>
            <ul class="favorite-list">
                <li v-for="user in userContent" @click='linkUser(user.id)'>
                    <div class="favorite-list-container">
                        <div class='favorite-userHead'>
                            <img :src='user.avatar'>
                            <span class='favorite-name'>
                                {{user.name}}
                            </span>
                            <p class='favorite-platform'>
                                平台:{{user.platform}}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import navHeader from './navHeader.vue'
import {mapState} from 'vuex'
export default{
    components:{
        navHeader,
    },
    data(){
        return{
            userContent:this.$storage.get('user'),
        }
    },
    computed:mapState({
        content:state=>state.content,
        platform:state=>state.platform,
        playername:state=>state.playername,
    }),
    methods:{
        linkUser(userId){
            this.$router.push({
                path:'/player/playerData',
                query:{
                    id:userId
                }
            })
            this.$store.dispatch('initData')
        }
    }
}
</script>
<style>
.fac{
    width:50%;
}
.favorite-platform{
    position: relative;
    top:-25px;
    left:110px;
    font-size:1.2rem;
}
.favorite-name{
    font-size:1.5rem;
    position:relative;
    left:25px;
    top:-40px;
}
.favorite-container{
    width:100%;
    float:left;
}
.favorite-list{
    width:150%;
    position:relative;
    right: 0;
    left: 0;
    bottom: 0;
    margin:0 auto;
    top:50px;
    list-style-type: none;
}
.favorite-list li{
    margin-top:30px;
    margin-left:20px;
    width:100%;
}
.favorite-list-container{
    height: 100px;
    background: rgba(240,240,240);
    border-radius:5px;
    width:90%;
}
.favorite-userHead img{
    width:80px;
    height: 80px;
    position: relative;
    top:10px;
    left:10px;
}
</style>

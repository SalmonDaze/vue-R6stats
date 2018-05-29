<template>
    <div class="lb-container" v-loading.fullscreen ='loading'
        element-loading-text="少女祈祷中..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 1)">
        <nav-header page-title='排行榜' :show-favorite="false"></nav-header>
        <div class="lb-select">
            <el-select v-model="platform" placeholder="pc" @change='getData'>
                <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
                </el-option>
            </el-select>
            <el-select v-model="region" placeholder="亚太地区" @change='getData'>
                <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <div class='lb-tabs'>
                <span>Rank</span>
                <span style='margin-left:40px;'>玩家</span>
                <span style='margin-left:280px;'>Rate</span>
            </div>
            <div class="lb-player">
                <ul>
                    <li v-for='(player,index) in leaderboard.data' :key='player.id' @click='linkUser(player.id)'>
                        <span style='float:left;font-size:1.3rem;padding-left:10px;padding-top:20px;width:20px;'>{{index+1}}</span>
                        <div class='lb-player-container'>
                            <img :src=getavatar(player.id) :onerror="errorImg01"><span class='lb-player-container-name'>{{player.name}}</span>
                            <span class='lb-player-container-rate'>{{player.value.toFixed(2)}}</span>
                        </div>
                    </li>
                </ul>
            </div>
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
    computed:mapState({
        leaderboard:state=>state.leaderboard,
    }),
    data(){
        return{
            platform:'pc',
            region:'apac_skill_adjusted',
            options1: [{
            value: 'pc',
            label: 'PC'
        }, {
            value: 'ps4',
            label: 'PS4'
        }, {
            value: 'xbox',
            label: 'XBOX'
        }],
        options2: [{
            value: 'apac_skill_adjusted',
            label: '亚太地区'
        }, {
            value: 'emea_skill_adjusted',
            label: '欧洲、中东、非洲'
        }, {
            value: 'ncsa_skill_adjusted',
            label: '北美地区'
        }],
        errorImg01:'this.src="' + require('../assets/default.jpg') + '"',
        loading:true,
        }
    },
    methods:{
        getData(){
            this.$http({
                method: "GET",
                url: `https://r6db.com/api/v2/leaderboards`,
                params:{
                    stat:this.region,
                    platform:this.platform   
                },
                headers: {
                    'x-app-id': '5e23d930-edd3-4240-b9a9-723c673fb649',
                    'accept': 'application/json',
                }
            }).then((res)=>{
                this.$store.state.leaderboard = res
                this.loading= false
            })
        },
        getavatar(playerId){
            return `https://uplay-avatars.s3.amazonaws.com/${playerId}/default_146_146.png`
        },
        linkUser(userId){
            this.$router.push({
                path:'/player/playerData',
                query:{
                    id:userId
                }
            })
        },
    },
    created(){
        this.getData('apac_skill_adjusted','pc')
    }
}
</script>
<style >
.lb-tabs{
    margin-top:15px;
    font-weight: 550;
}
.lb-container{
    width:100%
}
.lb-select{
    width:460px;
    position:absolute;
    top:60px;
    left:0px;
    right:0px;
    margin:0 auto;
    bottom:0px;
}
.lb-player ul{
    list-style-type: none;
}
.lb-player ul li{
    margin-top:20px;
}
.lb-player ul li img{
    width:70px;
    height: 70px;
    margin-left:40px;
}
.lb-player-container-name{
    width:180px;
    height: 30px; 
    position: absolute;
    margin-top:20px;
    font-size:1.2rem;
    margin-left:20px;
}
.lb-player-container-rate{
    width:70px;
    height: 30px; 
    position: absolute;
    margin-top:20px;
    font-size:1.2rem;
    margin-left:250px;
}
</style>

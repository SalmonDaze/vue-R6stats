<template>
    <div class='player' v-loading ='loading'>
        <nav-header :page-title="`${playername}的战绩`"></nav-header>
        <div class='player-container'>
            <div class='player-detail'>
                <img class='player-avatar' :src='avatar'>
                <div class='player-name'><span>{{playername}}</span><div class='player-level'>{{content.data.level}}</div></div>
                <div class='player-rank'>
                    <div class='player-h'>MMR</div><span class='player-hData'>{{parseInt(content.data.rank.apac.mmr)}}</span>
                    <div class='player-h'>Rank</div><span class='player-hData'>#{{(content.data.lastPlayed.ranked)}}</span>
                </div>
                <div  class='player-zl'> 
                    <ul>
                        <li><i class="el-icon-time">游戏时间</i><p style='text-align:center'>{{getGameTime(content.data.stats.general.timePlayed)}}小时</p></li>
                        <li><i class="el-icon-location">平台</i><p style='text-align:center'>{{platform.toUpperCase()}}</p></li>
                        <li><i class="el-icon-view">K/D</i><p style='text-align:center'>{{(content.data.stats.general.kills/content.data.stats.general.deaths).toFixed(2)}}</p></li>
                        <li><i class="el-icon-star-off">胜率</i><p style='text-align:center'>{{(content.data.stats.general.won/content.data.stats.general.lost).toFixed(2)}}</p></li>
                    </ul>
                </div>
            </div>
                <div class='player-tabs'>
                        <router-link :to='{name:"playerData"}'>数据总览</router-link>
                        <router-link to=''>干员数据</router-link>
                        <router-link to=''>段位信息</router-link>
                </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import navHeader from './navHeader.vue'
import {mapState} from 'vuex'
export default{
    data(){
        return{
            loading:false,
            avatar:`https://uplay-avatars.s3.amazonaws.com/${this.$store.state.playerId}/default_146_146.png`,
        }
    },
    components:{
        navHeader,
    },
    computed:mapState({
        content:state=>state.content,
        platform:state=>state.platform,
        playername:state=>state.playername,
    }),
    mounted(){
        this.$router.push({
                name:'playerData',
            })
    },
    methods:{
        getData(){
            this.$http({
                method: "GET",
                url: `https://r6db.com/api/v2/players/${this.$route.query.id}`,
                headers: {
                    'x-app-id': '5e23d930-edd3-4240-b9a9-723c673fb649',
                    'accept': 'application/json',
                }
            }).then((res)=>{
                this.$store.state.content = res
                console.log(JSON.stringify(res))
            })
        },
        getGameTime(time){
            return (time/3600).toFixed(1)
        }
    },
    created(){
        this.getData()
    },
}
</script>
<style>
.player-rank{
    float:left;
    margin-top:20px;
}
.player-hData{
    float:left;
    color:white;
    font-size:1.5rem;
    margin-left:10px;
    margin-top:10px;
}
.player-h{
    float:left;
    color:rgb(219, 219, 36);
    font-weight: bolder;
    margin-left:20px;
    margin-top:20px;
}
i{
    font-size:1.2rem;
    font-weight: 600;
}
.player-zl{
    color:rgba(223,223,223,1);
    margin-top:90px;
}
.player-zl ul{
    list-style: none;
}
.player-zl ul li{
    float:left;
    margin-left:45px;
    line-height: 30px;
}
.player-level{
    background:url(../assets/level.png);
    width:50px;
    height: 45px;
    background-size:100% 100%;
    font-size:1.10rem;
    color:white;
    text-align: center;
    line-height: 50px;
    font-weight: 500;
    float:right;
    margin-right: 60px;
    margin-top:-5px;
}
.player{
    width:100%;
    height:1000px;
    background-color: black;
}
.player-tabs{
    position:absolute;
    margin:0 auto;  
    left:0;  
    right:0; 
    width:500px;
}
.player-tabs a{
    color:white;
    text-decoration: none;
    font-size:1.1rem;
    font-weight: 550;
    margin-left:70px;
    margin-top:50px;
}

.player-data{
    width:100%;
    height: 300px;
    position:fixed;
    margin:0 auto;  
    left:0;  
    right:0; 
}
.player-detail{
    margin:0 auto;
    width:500px;
    height:250px;
    z-index: -0;
    background: url(../assets/bg.png);
    background-size:550px;
    background-repeat: no-repeat;
    background-position: -70px -100px;
    padding-top:10px;
}
.player-container{
    float:left;
    margin-top:50px;
    width:100%;
}
.player-name{
    font-size:2rem;
    font-weight:500;
    margin-left:210px;
    color:white;
    margin-top:20px;
    display: block;
}
.player-avatar{
    margin-top:20px;
    width:100px;
    height: 100px;
    border-radius: 5px;
    border:3px solid grey;
    float:left;
    margin-left:50px;
}
.player-platform{
    font-size:1.5rem;
    color:white;
    font-weight: bold;
    margin-left:180px;
}
</style>

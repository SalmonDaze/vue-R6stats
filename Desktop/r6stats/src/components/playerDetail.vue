<template>
    <div class='player' v-loading ='loading'
        element-loading-text="少女祈祷中..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 1)">
        <nav-header :page-title="`${content.data.name}的战绩`" :is-favorated='favorite' :show-favorite='s' @changefavor='favorite=!favorite'></nav-header>
        <div class='player-container'>
            <div class='player-detail'>
                <img class='player-avatar' :src='avatar' :onerror="this.errorImg01">
                <div class='player-name'><span>{{content.data.name}}</span><div class='player-level'>{{content.data.level}}</div>
                
                </div>
                <div class='player-rank'>
                    <div class='player-h'>MMR</div><span class='player-hData' style='width:50px;text-align:center;'>{{parseInt(content.data.rank.apac.mmr) | mmrfilters }}</span>
                    <div class='player-h' style='margin-left:20px;'>Rank</div><span class='player-hData' style='width:80px;text-align:center;'>{{(rank)}}</span>
                </div>
                <div  class='player-zl'> 
                    <ul>
                        <li><i class="el-icon-time">游戏时间</i><p style='text-align:center'>{{getGameTime(content.data.stats.general.timePlayed)}}小时</p></li>
                        <li><i class="el-icon-location">平台</i><p style='text-align:center'>{{String(content.data.platform).toUpperCase()}}</p></li>
                        <li><i class="el-icon-view">K/D</i><p style='text-align:center'>{{(content.data.stats.general.kills/content.data.stats.general.deaths).toFixed(2)}}</p></li>
                        <li><i class="el-icon-star-off">胜率</i><p style='text-align:center'>{{(content.data.stats.general.won/content.data.stats.general.lost).toFixed(2)}}</p></li>
                    </ul>
                </div>
                </div>
                    <div class='player-tabs'>
                        <button v-for='tab in buttontabs' :key='tab.value' :class="['tab-button',{active:currentTabComponent == tab.value}]" @click='currentTabComponent = tab.value'
                        >{{tab.name}}</button>
                    </div>
                </div>
                <component
                    :is="currentTabComponent"
                    class="tab"
                ></component>
        
    </div>
</template>
<script>
import playerData from './playerData.vue'
import operator from './operator.vue'
import navHeader from './navHeader.vue'
import {mapState} from 'vuex'
const rankLabels = {0:'-',1:'紫铜IV',2:'紫铜III',3:'紫铜II',4:'紫铜I',5:'青铜IV',6:'青铜III',7:'青铜II',8:'青铜I',9:'白银IV',10:'白银III',
11:'白银II',12:'白银I',13:'黄金IV',14:'黄金III',15:'黄金II',16:'黄金I',17:'铂金III',18:'铂金II',19:'铂金I',20:'钻石'}
export default{
    data(){
        return{
            loading:true,
            avatar:'',
            favorite:false,
            query:this.$route.query.id,
            s:true,
            errorImg01:'this.src="' + require('../assets/default.jpg') + '"',
            currentTabComponent : playerData,
            buttontabs:[{
                name:'数据总览',
                value:'playerData'}
            ,{
                name:'干员数据',
                value:'operator'}
            ,{
                name:'段位信息',
                value:'rankInfo'}],
        }
    },
    filters:{
        mmrfilters:function(mmr){
            if(mmr == 2500)
                return '-'
            else
                return mmr
        }
    },
    components:{
        navHeader,
        playerData,
        operator,
    },
    computed:mapState({
        content:state=>state.content,
        rank:function(){
            return rankLabels[this.$store.state.content.data.rank.apac.rank]
        }
    }),
    mounted(){
        this.getData()
        console.log(JSON.stringify(this.$store.state.KD))
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
            }).then(()=>{
                
                this.checkFavorite()
            })
        },
        getGameTime(time){
            return (time/3600).toFixed(1)
        },
        checkFavorite(){
            let arr = this.$storage.get('user')
            for(let i in arr){
                if(arr[i].name==this.$store.state.content.data.name){
                    this.favorite = true
                }
            }
        },
    },
    created(){
        this.avatar = `https://uplay-avatars.s3.amazonaws.com/${this.query}/default_146_146.png`
        
    },
    watch:{
        content:function(){
            this.loading = false
        },
    }
}
</script>
<style >
.qqw{
    width:100%;
    height: 500px;
}
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
    margin-left:60px;
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
    background-color:black;
}
.player-tabs{
    position: relative;
    left:60px;
    right:0;
    bottom:0;
    margin:0 auto;
    width:500px;
    }
    .tab-button.active{
        background: rgb(65, 65, 65);
    }
.player-tabs button{
    padding: 6px 10px;
    width:130px;
    height: 40px;
    border: 1px solid rgb(14, 14, 14);
    cursor: pointer;
    background: #141414;
    color:white;
}
.plaer-tabs button:active {
  background: #ffffff;
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
    height:300px;
    background: black;
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

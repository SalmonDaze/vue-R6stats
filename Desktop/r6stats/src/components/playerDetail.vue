<template>
    <div class='player-bg'>
    <div class='player' v-loading ='loading'>
        <nav-header :page-title="`${this.$store.state.playername}的战绩`"></nav-header>
        <div class='player-container'>
            <div class='player-detail'>
                <img class='player-avatar' :src='avatar'></div>
                <div class='player-name'><span>{{this.$store.state.playername}}</span><div class='player-level'>{{content.data.level}}</div></div>
                <div><span class='player-platform'>{{this.$store.state.platform}}</span></div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import navHeader from './navHeader.vue'
export default{
    data(){
        return{
            loading:false,
            avatar:`https://uplay-avatars.s3.amazonaws.com/${this.$store.state.playerId}/default_146_146.png`,
            content:{
                data:{
                    level:''
                },
            },
        }
    },
    components:{
        navHeader,
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
                this.content = res
                console.log(this.content)
            })
        }
    },
    created(){
        this.getData()
    },
}
</script>
<style>
.player-bg{
    background: black;
    width: 100%;
    height: 1000px;
}
.player-level{
    background:url(../assets/level.png);
    width:50px;
    height: 45px;
    background-size:100% 100%;
    position:fixed;
    left:300px;
    top:63px;
    font-size:1.2rem;
    color:white;
    text-align: center;
    line-height: 50px;
    font-weight: 300;
}
.player{
    position: fixed;
    width:100%;
    height:500px;
    background: url(../assets/bg.png);
    background-size:700px 400px;
    background-repeat: no-repeat;
    background-position: -90px -60px;
}
.player-container{
    position:fixed;
    margin:0 auto;  
    left:0;  
    right:0; 
    width:95%;
    height: 1000px;
}
.player-name{
    font-size:2rem;
    margin-top:20px;
    font-weight:500;
    margin-left:130px;
    color:white;
}
.player-avatar{
    margin-top:20px;
    width:100px;
    height: 100px;
    border-radius: 5px;
    border:3px solid grey;
}
.player-platform{
    font-size:1.5rem;
    color:grey;
    font-weight: bold;
    margin-left:10px;
}
</style>

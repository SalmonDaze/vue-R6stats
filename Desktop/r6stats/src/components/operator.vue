<template>
    <div class='operator-container'>
        <div class="operator">
            <div class='operator-tabs'>
                <span style='margin-left:50px;'>干员</span>
                <span style='margin-left:45px'>胜利</span>
                <span style='margin-left:35px'>失败</span>
                <span style='margin-left:35px'>胜率</span>
                <span style='margin-left:35px'>杀敌</span>
                <span style='margin-left:30px'>死亡</span>
                <span style='margin-left:50px'>K/D</span>
            </div>
            <ul>
                <li v-for='operator in operatorInfo' :key='operator.name'>
                    <div class='opr opr-name'>
                        {{operator.name}}
                    </div>
                    <div class='opr opr-won'>
                        {{operator.won}}
                    </div>
                    <div class='opr opr-lost'>
                        {{operator.lost}}
                    </div>
                    <div class='opr opr-winrate'>
                        {{operator.won+operator.lost==0?'0':String((operator.won/(operator.won+operator.lost))*100).slice(0,5)}}%
                    </div>
                    <div class='opr opr-kills'>
                        {{operator.kills}}
                    </div>
                    <div class='opr opr-deaths'>
                        {{operator.deaths}}
                    </div>
                    <div class='opr opr-kd'>
                        {{String(operator.kills/operator.deaths).slice(0,4)}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
        computed:mapState({
            content:state=>state.content,
        }),
        data(){
            return{
                operatorInfo:[{
                        won:'',
                        lost:'',
                        kills:'',
                        deaths:'',
                        timePlayed:'',
                        name:'',
                        logo:'',
                        }],
            }
        },
        methods:{
            operatorArr(){
                let operatorArray = []
                for(let opr in this.$store.state.content.data.stats.operator){
                    if(this.$store.state.content.data.stats.operator[opr].name.slice(0,7)!='Recruit'){
                        operatorArray.push({
                            won:this.$store.state.content.data.stats.operator[opr].won,
                            lost:this.$store.state.content.data.stats.operator[opr].lost,
                            kills:this.$store.state.content.data.stats.operator[opr].kills,
                            deaths:this.$store.state.content.data.stats.operator[opr].deaths,
                            timePlayed:this.$store.state.content.data.stats.operator[opr].timePlayed,
                            name:this.$store.state.content.data.stats.operator[opr].name,
                            logo:`../assets/operator_logo/${this.$store.state.content.data.stats.operator[opr].name}.png`
                            })
                    }
                }
                this.operatorInfo = operatorArray
            },
        },
        created(){
            this.operatorArr()
        }
}
</script>
<style>
.operator-tabs{
    color:white;
    position: absolute;
    left:0;
    right: 0;
    bottom:0;
    margin:0 auto;
    top:-35px;
    width:520px;
    font-size:0.8rem;
}
.operator-container{
    float:left;
    width:100%;
    height: 2750px;
    background: black;
    margin-top: -1px;
}
.operator{
    width:80%;
    position: relative;
    left:0;
    right: 0;
    bottom:0;
    margin:0 auto;
    margin-top:50px;
}
.operator ul{
    list-style-type: none;
    margin-top:20px;
    margin-left:20px;
}
.operator ul li{
    color:white;
    width:520px;
    height: 70px;
    left:0;
    right:0;
    margin:0 auto;
    top:10px;
    position: relative;
}
.operator ul li .opr-name{
    font-size:0.8rem;
    text-align: center;
}
.operator ul li img{
    width:60px;
    height: 50px;
    margin-top:10px;
    margin-left:10px;
    float:left;
}
.opr{
    margin-left:10px;
    margin-top:25px;
    width:60px;
    float:left;
    font-size:0.9rem;
}
.opr-name{
    text-align:center;
}
.opr-won{
    float:left;
    width:50px;
    text-align: right;
}
.opr-lost{
    float:left;
    width:55px;
    text-align: right;
}
.opr-winrate{
    float:left;
    width:60px;
    text-align: right;
}
.opr-kills{
    float:left;
     text-align: right;
     width:48px;
}
.opr-deaths{
    float:left;
    text-align: center;
    width:90px;
}
.opr-kd{
    float:left;
    text-align: center;
    width:50px;
}
.high-rate{
    color:green;
}
.low-rate{
    color:red;
}
</style>

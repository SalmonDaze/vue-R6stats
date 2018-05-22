<template>
    <div class='operator-container'>
        <div class="operator">
            <div class='operator-tabs'>
                <span style='margin-left:80px;'>干员</span>
                <span style='margin-left:40px'>胜利</span>
                <span style='margin-left:40px'>失败</span>
                <span style='margin-left:40px'>胜率</span>
                <span style='margin-left:40px'>杀敌</span>
                <span style='margin-left:40px'>死亡</span>
                <span style='margin-left:40px'>K/D</span>
            </div>
            <ul>
                <li>
                    <div>
                        <img src='../assets/operator_logo/IQ.png'>
                        <div class='opr-name'>
                            <div style='float:left;width:40px;'>IQ</div>
                            <div class='opr-won'>{{content.data.stats.operator.iq.won}}</div>
                            <div class='opr-lost'>{{content.data.stats.operator.iq.lost}}</div>
                            <div class='opr-winrate'>{{String(content.data.stats.operator.iq.won/(content.data.stats.operator.iq.won+content.data.stats.operator.iq.lost)*100).slice(0,2)}}%</div>
                            <div class='opr-kills'>{{content.data.stats.operator.iq.kills}}</div>
                            <div class='opr-deaths'>{{content.data.stats.operator.iq.deaths}}</div>
                            <div class='opr-kd'>{{String(content.data.stats.operator.iq.kills/content.data.stats.operator.iq.deaths).slice(0,4)}}</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <img src='../assets/operator_logo/ash.png'>
                        <div class='opr-name'>
                            <span>Ash</span>
                            <span style='margin-left:50px'>{{content.data.stats.operator.ash.won}}</span>
                            <span style='margin-left:50px'>{{content.data.stats.operator.ash.lost}}</span>
                            <span style='margin-left:30px'>{{String(content.data.stats.operator.ash.won/(content.data.stats.operator.ash.won+content.data.stats.operator.ash.lost)*100).slice(0,5)}}%</span>
                            <span style='margin-left:20px'>{{content.data.stats.operator.ash.kills}}</span>
                            <span style='margin-left:42px'>{{content.data.stats.operator.ash.deaths}}</span>
                            <span style='margin-left:35px'>{{String(content.data.stats.operator.ash.kills/content.data.stats.operator.ash.deaths).slice(0,4)}}</span>
                        </div>
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
    width:600px;
}
.operator-container{
    float:left;
    width:100%;
    height: 1000px;
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
}
.operator ul li{
    color:white;
    width:600px;
    height: 70px;
    background:rgb(48, 48, 48);
    left:0;
    right:0;
    margin:0 auto;
    position: relative;
    border-color:rgb(27, 27, 27);
}
.operator ul li img{
    width:60px;
    height: 50px;
    margin-top:10px;
    margin-left:10px;
    float:left;
}
.opr-name{
    margin-left:10px;
    margin-top:25px;
    float:left;
    font-size:1.3rem;
    background: black;
}
.opr-won{
    float:left;
    width:50px;
    text-align: center;
}
.opr-lost{
    float:left;
    width:60px;
    text-align: center;
}
.opr-winrate{
    float:left;
    width:90px;
    text-align: center;
}
.opr-kills{
    float:left;
     text-align: center;
     width:60px;
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
</style>

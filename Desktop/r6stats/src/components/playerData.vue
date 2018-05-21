<template>
    <div class="playerData">
        <div class='data-general'>
            <h3>概况</h3>
            <ul class='general-data'>
                <li><div class='data-container'><h4>击杀</h4><p class='general-value'>{{content.data.stats.general.kills}}</p></div></li>
                <li><div class='data-container'><h4>死亡</h4><p class='general-value'>{{content.data.stats.general.deaths}}</p></div></li>
                <li><div class='data-container'><h4>助攻</h4><p class='general-value'>{{content.data.stats.general.assists}}</p></div></li>
                <li><div class='data-container'><h4>爆头率</h4><p class='general-value'>{{(content.data.stats.general.headshot/content.data.stats.general.kills).toFixed(4)*100}}%</p></div></li>
                <li><div class='data-container'><h4>救助</h4><p class='general-value'>{{content.data.stats.general.revives}}</p></div></li>
                <li><div class='data-container'><h4>总局数</h4><p class='general-value'>{{content.data.stats.general.played}}</p></div></li>
                <li><div class='data-container'><h4>胜利</h4><p class='general-value'>{{content.data.stats.general.won}}</p></div></li>
                <li><div class='data-container'><h4>失败</h4><p class='general-value'>{{content.data.stats.general.lost}}</p></div></li>
                <li><div class='data-container'><h4>自杀</h4><p class='general-value'>{{content.data.stats.general.suicides}}</p></div></li>
                <li><div class='data-container'><h4>穿透击杀</h4><p class='general-value'>{{content.data.stats.general.penetrationKills}}</p></div></li>
                <li><div class='data-container'><h4>近战击杀</h4><p class='general-value'>{{content.data.stats.general.meleeKills}}</p></div></li>
                <li><div class='data-container'><h4>致盲击杀</h4><p class='general-value'>{{content.data.stats.general.blindKills}}</p></div></li>
                <li><div class='data-container'><h4>拯救人质</h4><p class='general-value'>{{content.data.stats.general.hostageRescue}}</p></div></li>
                <li><div class='data-container'><h4>保卫人质</h4><p class='general-value'>{{content.data.stats.general.hostageDefense}}</p></div></li>
            </ul>
        </div>
        <div class='data-general data-bomb'>
            <h3 style='color:#409EFF;border-bottom:1px solid #409EFF;'>炸弹模式</h3>
            <ul class='general-data'>
                <li><div class='data-container' style='background:#409EFF;'><h4>最高分数</h4><p class='general-value'>{{content.data.stats.bomb.bestScore}}</p></div></li>
                <li><div class='data-container'><h4>总局数</h4><p class='general-value'>{{content.data.stats.bomb.played}}</p></div></li>
                <li><div class='data-container'><h4>胜利</h4><p class='general-value'>{{content.data.stats.bomb.won}}</p></div></li>
                <li><div class='data-container'><h4>失败</h4><p class='general-value'>{{content.data.stats.bomb.lost}}</p></div></li>
            </ul>
        </div>
        <div class='data-general data-secure'>
            <h3 style='color:#67C23A;border-bottom:1px solid #67C23A;'>肃清威胁</h3>
            <ul class='general-data'>
                <li><div class='data-container' style='background:#67C23A;'><h4>最高分数</h4><p class='general-value'>{{content.data.stats.secure.bestScore}}</p></div></li>
                <li><div class='data-container'><h4>总局数</h4><p class='general-value'>{{content.data.stats.secure.played}}</p></div></li>
                <li><div class='data-container'><h4>胜利</h4><p class='general-value'>{{content.data.stats.secure.won}}</p></div></li>
                <li><div class='data-container'><h4>失败</h4><p class='general-value'>{{content.data.stats.secure.lost}}</p></div></li>
            </ul>
        </div>
        <div class='data-general data-secure'>
            <h3 style='color:#F56C6C;border-bottom:1px solid #F56C6C;'>解救人质</h3>
            <ul class='general-data'>
                <li><div class='data-container' style='background:#F56C6C;'><h4>最高分数</h4><p class='general-value'>{{content.data.stats.hostage.bestScore}}</p></div></li>
                <li><div class='data-container'><h4>总局数</h4><p class='general-value'>{{content.data.stats.hostage.played}}</p></div></li>
                <li><div class='data-container'><h4>胜利</h4><p class='general-value'>{{content.data.stats.hostage.won}}</p></div></li>
                <li><div class='data-container'><h4>失败</h4><p class='general-value'>{{content.data.stats.hostage.lost}}</p></div></li>
            </ul>
        </div>
        <div style='clear:both;'></div>
        <data-charts></data-charts>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import dataCharts from './dataCharts.vue'
export default{
computed:mapState({
        content:state=>state.content,
        platform:state=>state.platform,
        playername:state=>state.playername,
    }),
    components:{
        dataCharts,
    }
}
</script>
<style>
    .playerData{
        width:90%;
        height: 500px;
        border-color:red;
        position:absolute;
        margin:0 auto;  
        left:0;  
        right:0; 
        top:370px;
    }
    .data-general{
        width:450px;
        height: 340px;
        margin:0 auto;
        background: rgb(27, 27, 27);
        border-radius: 3px;
    }
    .data-secure{
        margin-top:20px;
        height: 150px;
    }
    .data-bomb{
        margin-top:20px;
        height: 150px;
    }
    .data-general h3{
        margin-left:25px;
        color:white;
        padding-top:20px;
        margin-right:320px;
        padding-bottom: 5px;
        border-bottom:1px solid grey;
    }
    .general-data{
        color:white;
        list-style-type: none;
        margin-top:20px;
        margin-left:5px;
    }
    .general-data li{
        float:left;
        text-align: center;
        background: rgb(44, 44, 44);
        margin-left:8px;
        margin-top:5px;
    }
    .data-container{
        background: rgb(44, 44, 44);
        width:100px;
        padding-top:5px;
        padding-bottom: 5px;
    }
    .general-value{
        margin-top:5px;
        font-size:1.05rem;
    }
</style>

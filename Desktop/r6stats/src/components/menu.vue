<template>
    <div class='menuContainer' :class="{'show':showMenus,'unshow':!showMenus}">
        <span class='menu-back' @click='unshow'><i class='el-icon-circle-close-outline' style='margin-right:10px;font-size:20px'></i>返回</span>
        <div class="menu-hr"></div>
        <ul class='menu-list'>
            <li @click='init'><router-link :to="{name:'index'}"><i class='el-icon-search menu-icon'></i>查询战绩</router-link></li>
            <li><router-link :to="{name:'leaderboard'}"><i class='el-icon-upload2 menu-icon'></i>排行榜</router-link></li>
            <li><router-link :to="{name:'favorite'}"><i class='el-icon-star-on menu-icon'></i>我的收藏</router-link></li>
        </ul>
        <div class="menu-hr menu-hr2"></div>
        <ul class='menu-list'>
            <li><router-link :to="{name:'about'}"><i class='el-icon-info menu-icon'></i>关于</router-link></li>
        </ul>
    </div>
</template>
<script>
export default{
    props:['showMenus'],
    data(){
        return{}
    },
    methods:{
        unshow(){
            this.$emit('unshow')
        },
        init(){
            this.$store.dispatch('initData')
        }
    }
}
</script>
<style >
.menu-icon{
    margin-right:20px;
    font-weight: bold;
}
.menuContainer{
    position:fixed;
    width:200px;
    height:100%;
    background:white;
    bottom:0px;
    left:-200px;
    z-index: 10;
    box-shadow: 1px 0px 0px rgba(0,0,0,0.25);
}
.menu-list{
    margin-left:-10px;
    list-style-type: none;
}
.menu-list li{
    margin-top:30px;
    margin-left:40px;
    font-weight: 600;
}
.menu-list li a{
    text-decoration: none;
    color:rgba(15,15,15,0.7);
    font-size:0.9rem;
}
.show{
    transition: all .3s ease;
    transform: translateX(200px);
}
.unshow{
    position:fixed;
    left:-200px;
    bottom:0px;
    transition: all .3s ease;
    transform: translateX(-200px);
}
.menu-back{
    font-size:1.1rem;
    position:absolute;
    left:30px;
    top:15px;
}
.menu-hr{
    width:80%;
    background:grey;
    height: 1px;
    margin-top:60px;
    margin-left:15px;
    opacity: 0.3;
}
.menu-hr2{
    margin-top:20px;
}
</style>
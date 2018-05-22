<template>
    <div class="about-container">
        <nav-header page-title='关于' style='position:fixed;'></nav-header>
        <div class='about'>
            <h3>关于项目</h3>
            <p>这是一个由<a href='http://apidocs.r6db.com/'>apidocs.r6db.com</a>提供API,基于Vue.js 2.0的项目</p>
        </div>
        <div class='about-hr'></div>
        <div class='about2'>
            <h3>关于作者</h3>
            <p>作者:<a href='https://github.com/SalmonDaze'>SalmonDaze的github主页</a></p>
            <p>项目源码:<a href='https://github.com/SalmonDaze/R6stats'>vue-r6stats</a></p>
            <p>希望喜欢的朋友可以帮我点个star : )</p>
        </div>
        <div class='about-hr'></div>
        <div class='about3'>
            <h3>项目反馈</h3>
            <p>反馈地址:<a href='https://github.com/SalmonDaze/R6stats/issues'>vue-r6stats/issues</a></p>
        </div>
        <div class='about-hr' style='margin-top:120px;'></div>
    </div>
</template>
<script>
import navHeader from './navHeader.vue'
export default{
    components:{
        navHeader,
    }
}
</script>
<style>
.about-container p{
    margin-top:20px;
}
.about{
    position:fixed;
    top:80px;
    left:30px;
    font-size:0.9rem;
}
.about2{
    position:fixed;
    top:190px;
    left:30px;
    font-size:0.9rem;
}
.about3{
    position:fixed;
    top:360px;
    left:30px;
    font-size:0.9rem;
}
.about-container a{
    text-decoration: none;
    color:#409EFF;
}
.about-hr{
    float:left;
    width:90%;
    background:grey;
    height: 1px;
    margin-top:170px;
    margin-left:15px;
    opacity: 0.3;
}
</style>

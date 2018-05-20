<template>
    <div class='menuContainer' :class="{'show':showMenus,'unshow':!showMenus}">
        <span>菜单</span>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
<script>
export default{
    props:['showMenus'],
    data(){
        return{}
    },
}
</script>
<style>
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
</style>
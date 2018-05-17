<template>
    <div class='menuContainer' :class="{'show':showMenus,'unshow':!showMenus}">

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
    background:skyblue;
    bottom:0px;
    left:-200px;
}
.show{
    transition: all .3s ease;
    transform: translateX(200px);
}
.unshow{
    transition: all .3s ease;
    transform: translateX(-200px);
}
</style>
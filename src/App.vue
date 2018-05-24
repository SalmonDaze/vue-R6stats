<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import navHeader from './components/navHeader.vue'
import navMenu from './components/menu.vue'
import index from './components/index.vue'
export default {
  name: 'App',
  components:{index},
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  padding:0px;
  margin:0px;
}
</style>

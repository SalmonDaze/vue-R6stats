<template>
  <div id="app">
    <nav-header></nav-header>
  </div>
</template>

<script>
import navHeader from './components/navHeader.vue'
import navMenu from './components/menu.vue'
export default {
  name: 'App',
  components:{navHeader,navMenu},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  padding:0px;
  margin:0px;
}
</style>

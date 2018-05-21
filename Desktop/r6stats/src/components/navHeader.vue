<template>
   <div class="nav">
  <transition name="fade"><div class='overlayer' v-show='show' @click='show=false'></div></transition>
    <div>
      <div class='nav-more' @click="showMenu">
        <i class="el-icon-menu"></i>
      </div>
      <div class='nav-title'>
        <span v-text='pageTitle'></span>
      </div>
      <div class='nav-login' @click='addFavorite'>
        <i class='el-icon-star-off' v-show='showFavorite'></i>
      </div>
    </div>
    <nav-menu :show-menus='show' @unshow='showMenu'></nav-menu>
    </div>
</template>

<script>
import navMenu from './menu.vue'
export default {
  name: 'navHeader',
  props:{
    pageTitle:String,
    showFavorite:Boolean,
  },
  data () {
    return {
      show:false,
    }
  },
  created(){
  },
  methods:{
    showMenu(){
      this.show = !this.show
    },
    addFavorite(){
      let arr = this.$storage.get('user')
      let obj = {
        name:this.$store.state.content.data.name,
        id:this.$store.state.content.data.id,
        avatar:`https://uplay-avatars.s3.amazonaws.com/${this.$route.query.id}/default_146_146.png`,
        platform:this.$store.state.content.data.platform,
      }
      arr.push(obj)
      this.$storage.set('user',arr)
    }
  },
  components:{
    navMenu
  }
}
</script>

<style scoped>
.overlayer{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index:5;
    opacity: 0.80;
    background: black;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.nav{
  position: fixed;
  z-index:5;
  width:100%;
  height:50px;
  background:rgba(255,255,255,255.95);
  box-shadow: 0 0 4px rgba(0,0,0,0.25);
}
.nav-more{
  margin-left:20px;
  width:40px;
  height:40px;
  position:absolute;
  top:15px;
}
.nav-title>span{
  display:block;
  position:relative;
  top:10px;
  width:100%;
  text-align:center;
  font-size:1.3rem;
}
.nav-login{
  float:right;
  margin-top:-10px;
  margin-right:20px;
}
.menu-shade{
    width:100%;
    height: 100%;
    background: black;
}
</style>

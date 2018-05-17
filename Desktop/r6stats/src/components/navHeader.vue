<template>
  <div class="nav">
    <div :class="{'nav-slide':show,'nav-fix':!show}">
      <div class='nav-more' @click="showMenu">
        <i class="el-icon-menu"></i>
      </div>
      <div class='nav-title'>
        <span>战绩查询</span>
      </div>
      <div class='nav-login'>
        <i class='el-icon-mobile-phone'></i>
      </div>
    </div>
    <nav-menu :show-menus='show'></nav-menu>
  </div>
</template>

<script>
import navMenu from './menu.vue'
export default {
  name: 'navHeader',
  props:{
    pageTitle:String,
  },
  data () {
    return {
      show:false,
    }
  },
  created(){
        this.$http({
          method: "GET",
          url: `https://r6db.com/api/v2/players?name=ryan&platform=pc`,
          headers: {
              'x-app-id': '5e23d930-edd3-4240-b9a9-723c673fb649',
              'accept': 'application/json'
          }
      }).then(function(res) {
          console.log(res)
      });
  },
  methods:{
    showMenu(){
      this.show = !this.show
    },
  },
  components:{
    navMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-fix{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: all .3s ease;
    z-index: 6;
}
.nav{
  width:100%;
  height:50px;
  background:rgba(255,255,255,255.95);
  box-shadow: 0 0 4px rgba(0,0,0,0.25);
}
.nav-slide{
  transition: all .3s ease;
  transform: translateX(200px);
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
</style>

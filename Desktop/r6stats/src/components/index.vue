<template>
    <div class='index'>
        <nav-header></nav-header>
        <img src='../assets/logo.png' class='logo'>
        <el-input placeholder="请输入Uplay名字" v-model="playerId" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择" class='el-server'>
            <el-option  label="PC" value="1"></el-option>
            <el-option  label="PS4" value="2"></el-option>
            <el-option  label="Xbox" value="3"></el-option>
            </el-select>
        </el-input>
        <el-button plain class='search-button' @click='search'>查找</el-button>
    </div>
</template>
<script>
import navHeader from './navHeader.vue'
export default{
    name:'index',
    components:{
        navHeader,
    },
    data(){
        return{
            select:'',
            playerId:'',
            server:'',
        }
    },
    methods:{
        search(){
            switch(this.select){
                case '1':
                this.server = 'pc'
                break;
                case '2':
                this.server = 'ps4'
                break;
                case '3':
                this.server = 'xbox'
                break;
                default:
                console.log('请选择正确区服')
                break;
            }
            this.$http({
                method: "GET",
                url: `https://r6db.com/api/v2/players?id=${this.playerId}`,
                headers: {
                    'x-app-id': '5e23d930-edd3-4240-b9a9-723c673fb649',
                    'accept': 'application/json',
                }
            }).then(function(res) {
                console.log(JSON.stringify(res))
            });
        }
    }
}
</script>
<style>
.logo{
    position: fixed;
    margin:0 auto;  
    left:0;  
    right:0; 
    top:100px;
}
.index{
    height: 100%;
    width:100%;
}
.el-server{
    width:100px;
}
.input-with-select{
    position: fixed;
    width:350px;
    margin:0 auto;  
    left:0;  
    right:0; 
    top:350px;
}
.search-button{
    position: fixed;
    width:120px;
    margin:0 auto;  
    left:0;  
    right:0; 
    top:400px;
}
</style>

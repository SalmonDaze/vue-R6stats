<template>
    <div class='index' v-loading.fullscreen="loading"
        element-loading-text="少女祈祷中..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
    >
        <nav-header page-title='战绩查询'></nav-header>
        <img src='../assets/logo.png' class='logo'>
        <el-input placeholder="请输入Uplay名字" v-model="name" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择" class='el-server'>
            <el-option  label="PC" value="1"></el-option>
            <el-option  label="PS4" value="2"></el-option>
            <el-option  label="Xbox" value="3"></el-option>
            </el-select>
        </el-input>
        <el-button plain class='search-button' @click='search'>查找</el-button>
        <el-alert
            v-show='showError'
            title="获取数据失败"
            type="error"
            :closable="false"
            class='search-error'
            center
            >
        </el-alert>
    </div>
</template>
<script>
import navHeader from './navHeader.vue'
import {mapState} from 'vuex'
export default{
    name:'index',
    components:{
        navHeader,
    },
    data(){
        return{
            name:'',
            select:'',
            content:[],
            showError:false,
            loading:false,
        }
    },
    computed:{
    },
    methods:{
        search(){
            this.showError = false
            this.$store.state.playername = this.name
            switch(this.select){
                case '1':
                this.platform = 'pc'
                break
                case '2':
                this.platform = 'ps4'
                break
                case '3':
                this.platform = 'xbox'
                break
                default:
                this.showError = true
                return
                break
            }
            this.loading = true
            this.$http({
                method: "GET",
                url: `https://r6db.com/api/v2/players/?name=${this.name}&platform=${this.platform}`,
                headers: {
                    'x-app-id': '5e23d930-edd3-4240-b9a9-723c673fb649',
                    'accept': 'application/json',
                }
            }).then((res)=>{
                this.$store.state.playerId = res.data[0].id
                this.$store.state.platform = this.platform
            }).then(()=>{
                this.$router.push({
                name:'player',
                query:{
                    id:this.$store.state.playerId
                }
            })
            }).catch((err)=>{
                this.showError = true
                this.loading = false;
            })
            
        },

    }
}
</script>
<style>
.search-error{
    position:fixed;
    width:200px;
    right:0px;
    top:470px;
    left:0px;
    margin:0 auto;
}
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

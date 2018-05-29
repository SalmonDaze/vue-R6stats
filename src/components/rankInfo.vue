<template>
    <div class="rank-container">
        <ul class='rank-season'>
            <li v-for='(rank,index) in rankArr'>
                <div>
                    <div class='rank-season-container rank-apac'>
                        <h2>第{{Trans[index+1]}}赛季</h2>
                        <h3>亚洲</h3>
                        <p>胜利 {{rank.apac.wins}}</p>
                        <p>失败 {{rank.apac.wins}}</p>
                        <p>MMR {{rank.apac.losses}}</p>
                        <p>段位 {{rank.apac.rankapac}}</p>
                    </div>
                    <div class='rank-season-container rank-emea'>
                        <h3>欧洲</h3>
                        <p>胜利 {{rank.emea.wins}}</p>
                        <p>失败 {{rank.emea.wins}}</p>
                        <p>MMR {{rank.emea.losses}}</p>
                        <p>段位 {{rank.emea.rankemea}}</p>
                    </div>
                    <div class='rank-season-container rank-ncsa'>
                        <h3>北美</h3>
                        <p>胜利 {{rank.ncsa.wins}}</p>
                        <p>失败 {{rank.ncsa.wins}}</p>
                        <p>MMR {{rank.ncsa.losses}}</p>
                        <p>段位 {{rank.ncsa.rankncsa}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
const rankLabels = {0:'-',1:'紫铜IV',2:'紫铜III',3:'紫铜II',4:'紫铜I',5:'青铜IV',6:'青铜III',7:'青铜II',8:'青铜I',9:'白银IV',10:'白银III',
11:'白银II',12:'白银I',13:'黄金IV',14:'黄金III',15:'黄金II',16:'黄金I',17:'铂金III',18:'铂金II',19:'铂金I',20:'钻石'}
const Trans = {1:'一',2:'二',3:'三',4:'四',5:'五',6:'六',7:'七',8:'八',9:'九',10:'十',11:'十一',}
export default{
    data(){
        return{
            rankArr:[],
            Trans : {1:'一',2:'二',3:'三',4:'四',5:'五',6:'六',7:'七',8:'八',9:'九',10:'十',11:'十一',}
        }
    },
    computed:{
    },
    methods:{
        rankArry(){
            let rankArry = []
            for(let rank in this.$store.state.content.data.seasonRanks){
                rankArry.push({
                    apac:{
                        mmr:this.$store.state.content.data.seasonRanks[rank].apac.mmr.toFixed(0),
                        rank:this.$store.state.content.data.seasonRanks[rank].apac.rank,
                        wins:this.$store.state.content.data.seasonRanks[rank].apac.wins,
                        losses:this.$store.state.content.data.seasonRanks[rank].apac.losses,
                        rankapac:rankLabels[this.$store.state.content.data.seasonRanks[rank].apac.rank],
                    },
                    emea:{
                        mmr:this.$store.state.content.data.seasonRanks[rank].emea.mmr.toFixed(0),
                        rank:this.$store.state.content.data.seasonRanks[rank].emea.rank,
                        wins:this.$store.state.content.data.seasonRanks[rank].emea.wins,
                        losses:this.$store.state.content.data.seasonRanks[rank].emea.losses,
                        rankemea:rankLabels[this.$store.state.content.data.seasonRanks[rank].emea.rank],
                    },
                    ncsa:{
                        mmr:this.$store.state.content.data.seasonRanks[rank].ncsa.mmr.toFixed(0),
                        rank:this.$store.state.content.data.seasonRanks[rank].ncsa.rank,
                        wins:this.$store.state.content.data.seasonRanks[rank].ncsa.wins,
                        losses:this.$store.state.content.data.seasonRanks[rank].ncsa.losses,
                        rankncsa:rankLabels[this.$store.state.content.data.seasonRanks[rank].ncsa.rank],
                    },
                    season : this.$store.state.content.data.seasonRanks[rank].season,
                    Tran:Trans[this.$store.state.content.data.seasonRanks[rank].season]
                    
                })
            }
            this.rankArr = rankArry
        }
    },
    created(){
        this.rankArry()
    },
    filters:{
        mmrFilters(mmr){
            if(mmr==25||mmr==2999){
                return '-'
            }
        },
    }
}
</script>
<style>
.rank-container{
    width:100%;
    background: black;
    height: 2800px;
    float:left;
    position: absolute;
    top:348px;
    left:0;
    right: 0;
    bottom:0;
    margin:0 auto;
    z-index: -1;
}
.rank-season{
    width:80%;
    position: absolute;
    top:8px;
    left:0;
    right: 0;
    bottom:0;
    margin:0 auto;
    list-style-type: none;
}
.rank-season li{
    height: 300px;
    margin-top:40px;
    background:rgb(39, 39, 39)
}
.rank-season li h3{
    color:white;
    margin-top:30px;
    margin-left:60px;
}
.rank-season li h2{
    color:white;
    margin-top:20px;
    margin-left:30px;
}
.rank-season-container{
    float:left;
}
.rank-season-container p{
    margin-right:70px;
    margin-top:15px;
    text-align:right;
}
.rank-apac{
    width:33%;
    height: 300px;
    color:white;
}
.rank-emea{
    margin-top:50px;
}
.rank-emea p{
    color:white;
    text-align:right;
    margin-left:50px;
}
.rank-ncsa{
    margin-top:50px;
}
.rank-ncsa p{
    color:white;
    text-align:right;
    margin-left:50px;
}
</style>

<template>
    <div class="rank-container">
        <div  class='rank-list'>
            <ul>
                <li>
                    <div class='rank-general'>
                        <span class='rank-title'>当前赛季</span>
                        <div class='rank-apac'>
                            <span class='rank-region'>APAC</span>
                            <span class='rank-mmr'>MMR {{String(this.$store.state.content.data.rank.apac.mmr).slice(0,4)}}</span>
                        </div>
                        <div class='rank-emea'></div>
                        <div class='rank-ncsa'></div>
                    </div>
                </li>
                <li v-for='rank in rankArr' :key='rank.season'>
                    <div class='rank-general'>
                        <span class='rank-title'>第{{rank.Tran}}赛季</span>
                        <div style='float:left;margin-top:50px;margin-left:-60px;'>APAC</div>
                        <div style='float:left;margin-top:90px;margin-left:-60px;'>MMR {{rank.apac.mmr | mmrFilters}}</div>
                        <div style='float:left;margin-top:120px;margin-left:-60px;'>段位 {{rank.apac.rankapac}}</div>
                        <div style='float:left;margin-top:150px;margin-left:-60px;'>胜利 {{rank.apac.wins}}</div>
                        <div style='float:left;margin-top:180px;margin-left:-60px;'>失败 {{rank.apac.losses}}</div>
                    </div>
                    <div class='rank-emea'>
                        <p style='float:left;margin-top:9px;margin-left:10px;'>非洲</p>
                        <div style='margin-top:30px;float:left;'>
                            <p>MMR {{rank.emea.mmr | mmrFilters}}</p>
                            <p>段位 {{rank.emea.rankapac}}</p>
                            <p>胜利 {{rank.emea.wins}}</p>
                            <p>失败 {{rank.apac.losses}}</p>
                        </div>
                    </div>
                    <div class='rank-ncsa'></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
const rankLabels = {0:'-',1:'紫铜IV',2:'紫铜III',3:'紫铜II',4:'紫铜I',5:'青铜IV',6:'青铜III',7:'青铜II',8:'青铜I',9:'白银IV',10:'白银III',
11:'白银II',12:'白银I',13:'黄金IV',14:'黄金III',15:'黄金II',16:'黄金I',17:'铂金III',18:'铂金II',19:'铂金I',20:'钻石'}
const Trans = {1:'一',2:'二',3:'三',4:'四',5:'五',6:'六',7:'七',8:'八',9:'九',10:'十',11:'十一',}
export default{
    data(){
        return{
            rankArr:[]
        }
    },
    computed:{
    }
    ,
    methods:{
        rankArry(){
            let rankArry = []
            for(let rank in this.$store.state.content.data.seasonRanks){
                rankArry.push({
                    apac:{
                        mmr:this.$store.state.content.data.seasonRanks[rank].apac.mmr,
                        rank:this.$store.state.content.data.seasonRanks[rank].apac.rank,
                        wins:this.$store.state.content.data.seasonRanks[rank].apac.wins,
                        losses:this.$store.state.content.data.seasonRanks[rank].apac.losses,
                        rankapac:rankLabels[this.$store.state.content.data.seasonRanks[rank].apac.rank],
                    },
                    emea:{
                        mmr:this.$store.state.content.data.seasonRanks[rank].emea.mmr,
                        rank:this.$store.state.content.data.seasonRanks[rank].emea.rank,
                        wins:this.$store.state.content.data.seasonRanks[rank].emea.wins,
                        losses:this.$store.state.content.data.seasonRanks[rank].emea.losses,
                        rankemea:rankLabels[this.$store.state.content.data.seasonRanks[rank].emea.rank],
                    },
                    ncsa:{
                        mmr:this.$store.state.content.data.seasonRanks[rank].ncsa.mmr,
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
.rank-list{
    width:500px;
    position: relative;
    left:0;
    right: 0;
    bottom:0;
    margin:0 auto;
    top:10px;
}
.rank-list ul{
    width: 100%;
    list-style-type: none;
}
.rank-list ul li{
    background: white;
    height: 250px;
    width:500px;
    background: rgb(31, 31, 31);
    color:white;
    margin-top:30px;
}
.rank-title{
    float:left;
    font-size:1.2rem;
    margin-left:30px;
    margin-top:10px;
}
.rank-apac{
    width:130px;
    height: 200px;
    position: relative;
    top:40px;
    left:30px;
    text-align: left;
}
.rank-apac .rank-region{
    width: 50px;
    position:relative;
    top:0px;
    left:-60px;
    font-size:1.2rem;
}
.rank-emea{
     width:130px;
    height: 200px;
    position: relative;
    left:190px;
    top:-160px;
}
.rank-ncsa{
    width:130px;
    height: 200px;
    position: relative;
    left:350px;
    top:-360px;
}
.rank-general{
    margin-left:20px;
}
</style>

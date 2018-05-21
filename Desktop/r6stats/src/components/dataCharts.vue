<template>
    <div class="charts-container">
        <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    </div>
</template>
<script>
export default{
    created: function () {
      this.chartData = {
        columns: ['日期', 'K/D'],
        rows: [
          { 'K/D': (this.$store.state.content.data.progressions[0].stats.casual.kills/this.$store.state.content.data.progressions[0].stats.casual.deaths).toFixed(2), '日期': '1月1日'},
          { 'K/D': (this.$store.state.content.data.progressions[1].stats.casual.kills/this.$store.state.content.data.progressions[1].stats.casual.deaths).toFixed(2), '日期': dateFil(this.$store.state.content.data.progressions[1].created_at)},
          { 'K/D': (this.$store.state.content.data.progressions[2].stats.casual.kills/this.$store.state.content.data.progressions[2].stats.casual.deaths).toFixed(2), '日期': '1月3日'},
          { 'K/D': (this.$store.state.content.data.progressions[3].stats.casual.kills/this.$store.state.content.data.progressions[3].stats.casual.deaths).toFixed(2), '日期': '1月4日'},
          { 'K/D': (this.$store.state.content.data.progressions[4].stats.casual.kills/this.$store.state.content.data.progressions[4].stats.casual.deaths).toFixed(2), '日期': '1月5日'},
          { 'K/D': (this.$store.state.content.data.progressions[5].stats.casual.kills/this.$store.state.content.data.progressions[5].stats.casual.deaths).toFixed(2), '日期': '1月6日'}
        ]
      }
      this.chartSettings = {
        metrics: ['K/D'],
        dimension: ['日期']
      }
    },
    methods:{
        dateFil(date){
            let month = ''
            let day = date.slice(8,10)
            if(date.slice(5,7)<10){
                month = '0' + date.slice(6,7) 
            }
            else{
                month = date.slice(5,7)
            }
            return date = month + '月' + day + '日'
        }
    }
}
</script>
<style>
.charts-container{
    margin-top:30px;
}
</style>

<template>
    <div class="charts-container">
        <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    </div>
</template>
<script>
export default{
    created: function () {
      this.chartData = {
        columns: ['日期', '成本', '利润', '占比', '其他'],
        rows: [
          { '成本': 1523, '日期': '1月1日'},
          { '成本': 1223, '日期': '1月2日'},
          { '成本': 2123, '日期': '1月3日'},
          { '成本': 4123, '日期': '1月4日'},
          { '成本': 3123, '日期': '1月5日'},
          { '成本': 7123, '日期': '1月6日'}
        ]
      }
      this.chartSettings = {
        metrics: ['成本'],
        dimension: ['日期']
      }
    }
}
</script>
<style>
.charts-container{
    margin-top:30px;
}
</style>

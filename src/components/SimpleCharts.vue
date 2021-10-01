<template>
  <div class="chart-wrap">
    <div ref="chart" class="chart"></div>
        <resize-observer @notify="handleResize"/>
  </div>
</template>

<script>

import * as echarts from 'echarts'



export default {
  name:'SimpleEcharts',
  props: {
    option: Object,
  },
  data() {
    return {
        chart: null,
        screenWidth: document.documentElement.clientWidth,
        screenHeight: document.documentElement.clientHeight,
    }
  },
  methods: {
      handleResize(){
          this.chart.resize()
      }
  },
  mounted(){

    this.chart = echarts.init(this.$refs.chart)
    console.log(this.$refs.chart.clientHeight)
    this.chart.setOption(this.option)

  },
  watch: {
      option: {
          deep: true,
          handler(newVal){
              this.chart.setOption(newVal)
          },
      },
      screenWidth(){
      },
      screenHeight(){
      },
  },
  beforeDestroy(){
      this.chart.dispose()
      this.chart = null
  },
};
</script>

<style>
.chart-wrap {
    width: 100%;
    height: 100%;
  }
.chart {
    width: 100%;
    height: 100%;
  }


</style>

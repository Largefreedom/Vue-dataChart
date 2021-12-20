<template>
  <div style="margin: 16px">
    <a-row :gutter="24">
      <!-- <a-col :sm="24" :md="24" :xl="12" :style="{ marginBottom: '24px' }">
        <a-card title="表1">
            <simple-charts :option="chart.salesOption" style="height: 400px;"/>
        </a-card>
      </a-col> -->
      <a-col :sm="24" :md="24" :xl="24" :style="{ marginBottom: '24px' }">
        <a-card title="表2">
            <simple-charts :option="chart.salesOption" style="height: 450px;"/>
        </a-card>
      </a-col>
    </a-row>

    <!-- <a-row :gutter="24">
      <a-col :sm="24" :md="24" :xl="24" :style="{ marginBottom: '24px' }">
        <a-card title="表2">
            <simple-charts :option="chart.pieOption" style="height: 600px;"/>
        </a-card>
      </a-col>
    </a-row> -->
  </div>
</template>
<script>
import SimpleCharts from '@/components/SimpleCharts.vue'

var itemStyle = {
    opacity: 0.8
};

var schema = [
  {name: 'Date',index: 0,text:'日期',unit:'天'},
    {name: 'CommentCounts',index: 1,text:'评论数',unit:'个'},
]

export default {
  name: 'Home',
  components: {
    SimpleCharts,
  },
  data() {
    return {
      chart: {
        salesOption: {

  
  xAxis: {
  name: '日期',
  type: 'category',

  splitLine:{
   show:true,
 }},
 title:{
    text: "吃瓜评论时间分布",
    left: 'center',
    top: 10,
    subtext:'公众号：《程序员大飞》',
 },
  yAxis: {
  name: '评论个数',

  splitLine:{
   show:true,
 }
  },
  tooltip:{
      padding: 5,
        borderWidth: 1,
        formatter: function (obj) {
          var value = obj.value;
          // prettier-ignore
          return schema[0].text + '：' + value[0] + '<br>'
                        + schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
        }
  },
  visualMap: [
        {
          show: false,
          dimension: 1,
          min:0,
          max:30,
           inRange: {
            color: (function () {
              // prettier-ignore
              var colors = ['#51689b', '#ce5c5c', '#fbc357', '#8fbf8f', '#659d84', '#fb8e6a', '#c77288', '#786090', '#91c4c5', '#6890ba'];
              return colors.concat(colors);
            })()
          }
        }
      ],
  series: [
    {
      // symbolSize: 20,
      itemStyle: itemStyle,
      data: [['2021-12-17 23:00:00', 103], ['2021-12-18 00:00:00', 35], ['2021-12-18 01:00:00', 6], ['2021-12-18 02:00:00', 2], ['2021-12-18 03:00:00', 1], ['2021-12-18 05:00:00', 2], ['2021-12-18 06:00:00', 2], ['2021-12-18 07:00:00', 1], ['2021-12-18 08:00:00', 1], ['2021-12-18 09:00:00', 1], ['2021-12-18 13:00:00', 1], ['2021-12-18 14:00:00', 1], ['2021-12-18 16:00:00', 1], ['2021-12-18 19:00:00', 1], ['2021-12-20 00:00:00', 100]],
      type: 'scatter',
      symbolSize: function(value) {
        return value[1]/0.5;
      }
    }
  ]
        },
        pieOption: {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  title: {
       text: "《长津湖》评论星级分布",
    left: 'center',
    top: 2,
    subtext:'公众号：《小张Python》',
  },
  legend: {
    top:40,
    right:130,
  
    width: 30,
    data: ['五星', '一星', '二星', '三星', '四星']
  },
  series: [
    {
      name: '星级分布',
      type: 'pie',
      radius: ['45%', '60%'],
      labelLine: {
        length: 30
      },
      label: {
        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        backgroundColor: '#F6F8FC',
        borderColor: '#8C8D8E',
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          a: {
            color: '#6E7079',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
          },
          b: {
            color: '#4C5058',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 33
          },
          per: {
            color: '#fff',
            backgroundColor: '#4C5058',
            padding: [3, 4],
            borderRadius: 4
          }
        }
      },
      data: [
        {'value': 36, 'name': '四星'},
{'value': 96, 'name': '五星'},
{'value': 50, 'name': '三星'},
{'value': 2, 'name': '一星'},
{'value': 25, 'name': '二星'},
      ]
    }
  ]
},

    },
    
    }
},
  methods: {

    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )
    },
  },
}
</script>

<style lang="less" scoped>
.extra-wrapper {
  line-height: 55px;
  padding-right: 24px;

  .extra-item {
    display: inline-block;
    margin-right: 24px;

    a {
      margin-left: 24px;
    }
  }
}

.antd-pro-pages-dashboard-analysis-twoColLayout {
  position: relative;
  display: flex;
  display: block;
  flex-flow: row wrap;
}

.antd-pro-pages-dashboard-analysis-salesCard {
  height: calc(100% - 24px);

  /deep/ .ant-card-head {
    position: relative;
  }
}

.dashboard-analysis-iconGroup {
  i {
    margin-left: 16px;
    color: rgba(0, 0, 0, .45);
    cursor: pointer;
    transition: color .32s;
    color: black;
  }
}

.analysis-salesTypeRadio {
  position: absolute;
  right: 54px;
  bottom: 12px;
}
</style>

 var myChart = echarts.init(document.getElementById('cuschina'));


 option = {
     tooltip: {
         trigger: 'item',
         formatter: '{b}'
     },
     series: [{
         name: '中国',
         type: 'map',
         mapType: 'china',
         selectedMode: false, //single 表示单选;multiple表示多选 默认flase不选
         itemStyle: {
             normal: {
                 label: {
                     show: false, //默认是否显示省份名称   
                     textStyle: {
                         color: "#c8cad7"
                     }
                 },
                 areaColor: '#0848b4', //地图板块颜色

                 borderWidth: 0.7, //边框的大小
                 //  borderColor: '#06327d',
                 borderColor: '#0b66ff',
                 color: '#1548b1'
             },
             emphasis: {
                 label: {
                     show: true, //选中状态是否显示省份名称
                 },
                 areaStyle: {
                     color: '#90c31d', //选中状态的地图板块颜色
                 },
             },
         },

         label: {
             normal: {
                 show: true
             },
             emphasis: {
                 show: true
             }
         },
         data: [{
             name: '广东',
             selected: true
         }]
     }]
 };

 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);
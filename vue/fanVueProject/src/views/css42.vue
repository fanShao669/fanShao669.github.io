<template>
	<div class="g-bd">
		<!-- 状态平滑的动画 -->
		<div class="panoramic" ></div>
	
		<router-link tag="span" to="/index">第43个动画</router-link>	
		<router-link tag="span" to="/css41">第41个动画</router-link>	
		<fanaside></fanaside>
		<div id="main"></div>
		<div class="main" @click="change"></div>
	</div>
</template>
<script>




	import fanaside  from '../components/fanaside.vue'
    // import rainbowFoot from '../components/rainbowFoot.vue'
    export default {
        data () {
            return {
                users:[
                	{name:'快车',tag:'1'},
                	{name:'出租车',tag:'2'},
                	{name:'顺风车',tag:'3'},
                	{name:'专车',tag:'4'},
                	{name:'自行车',tag:'5'},
                ],
                searchText:'',
                echartsdata:[
                	 {value:500, name:'视频广告'},
			         {value:500, name:'联盟广告'},
			         {value:500, name:'邮件营销'},
			         {value:500, name:'直接访问'},
			         {value:400, name:'搜索引擎'}
                ],
            }
        },
        mounted: function () {
        	this.$nextTick(function () {
        			var _this = this;
					// 基于准备好的dom，初始化echarts实例
					var myChart = echarts.init(document.getElementById('main'));
					// 绘制图表
					// myChart.setOption({
					//     title: { text: 'ECharts 入门示例' },
					//     tooltip: {},
					//     xAxis: {
					//         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
					//     },
					//     yAxis: {},
					//     series: [{
					//         name: '销量',
					//         type: 'bar',
					//         data: [5, 20, 36, 10, 10, 20]
					//     }]
					// });
					myChart.setOption({
						// xAxis: {
				  //           data: _this.echartsdata
				  //       },
					    series : [
					        {
					            name: '访问来源',
					            type: 'pie',
					            radius: '55%',
					            // roseType: 'angle',
					            data:_this.echartsdata
					        }
					    ]
					})
        	})
    
        },
        methods:{
            change:function(){
            	var _this = this;
            	console.log(_this.echartsdata);
            	_this.echartsdata = [
            	   {value:100, name:'视频广告'},
		           {value:5, name:'联盟广告'},
		           {value:200, name:'邮件营销'},
		           {value:500, name:'直接访问'},
		           {value:400, name:'搜索引擎'}
	            ]
            }
        },
        computed: {
        	
       
        },
        components: {
            fanaside,
        }, 
          
    }
</script>
<style>
	.g-bd{
		font-size: 20px;
		color:red;
	}

	@keyframes panoramic {
		to { background-position: 100% 0; }
	}

	#main{
		width: 100%;
		height: 300px;
		margin-top: 50px;
	}
	.main{
		width: 100%;
		height: 300px;
		background: red;
	}
	
	/*最初效果*/
/*	.panoramic {
		width: 150px; height: 150px;
		background: url('http://c3.staticflickr.com/3/2671/3904743709_74bc76d5ac_b.jpg');
		background-size: auto 100%;	
	}
	.panoramic:hover, .panoramic:focus {
		animation: panoramic 10s linear infinite alternate;
	}*/

	/*完美效果*/
	.panoramic {
		width: 150px; height: 150px;
		background: url('http://c3.staticflickr.com/3/2671/3904743709_74bc76d5ac_b.jpg');
		background-size: auto 100%;	
		animation: panoramic 10s linear infinite alternate;
		animation-play-state: paused;
	}

	.panoramic:hover, .panoramic:focus {
		animation-play-state: running;
	}

</style>
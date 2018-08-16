<template>
	<div class="echarts" ref="areaStack" id="areaStack" v-loading="fullScreenShow" element-loading-text="loading..."></div>
</template>

<script>
import Echarts from 'echarts';
import {mapGetters } from 'vuex'

export default {
	
  data(){
    return {
      echarts : null ,
      fullScreenShow : true,
      echartOption: {
      		color: ['#3398DB'],
		    title: {
		        text: '2017销售数据(年度)',
		        subtext: '此数据为虚构',
		        right:'3%'
		    },
		    tooltip : {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            label: {
		                backgroundColor: '#6a7985'
		            }
		        }
		    },
		    legend: {
		        data:['订单','店铺','销售额'],
		        left:'3%'
		        
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'订单',
		            type:'line',
		            symbol:'emptyCircle',
		            symbolSize :5,
		            smooth: true,
		            lineStyle:{
		            	normal:{
		            		color:'#FF4949'
		            	}
		            },
		            areaStyle: {
		            	normal: {
		            		color:'#D3DCE6'
		            	}
		            },
		            data:[1120, 1032, 301, 134, 90, 630, 120,54,300,200,500,100,0]
		        },
		        {
		            name:'销售额',
		            type:'bar',
		            smooth: true,
		            lineStyle:{
		            	normal:{
		            		color:'#20A0FF'
		            	}
		            },
		            areaStyle: {
		            	normal: {
		            		color:'#20A0FF'
		            	}
		            },
		            data:[20, 300, 191, 734, 290, 430, 1000,100,400,300,800,120]
		        },
		        {
		            name:'店铺',
		            type:'line',
		            smooth: true,
		            lineStyle:{
		            	normal:{
		            		color:'#F7BA2A'
		            	}
		            },
		            areaStyle: {
		            	normal: {
		            		color:'#F7BA2A',
		            		opacity:0
		            	}
		            },
		            data:[500, 700, 501, 154, 190, 330, 50,520,731,502,165,0]
		        }
		    ]
		}
    }
  },
  
  computed :{
  	 ...mapGetters({ globalTimer : 'echartloadingTime'})
  },
  
  methods:{
  	
  	getSize(){
  		let elemntChart = this.$refs.areaStack;
  		return{
  			x : Math.max( elemntChart.clientWidth, elemntChart.scrollWidth ) ,
  			y : Math.max( elemntChart.clientHeight, elemntChart.scrollHeight ),
  			chart : elemntChart
  		}
  	},
  	
  	reSize(){
  		//检测echarts是否在DOM上已经注册过
  		if( this.echarts ){
  			this.echarts.dispose();
  		}
		this.setSize();
  		this.echarts = Echarts.init( this.$refs.areaStack );
  		this.echarts.setOption( this.echartOption );
  	},
  	
  	setSize(){
  		let chartsSize = this.getSize();
  		chartsSize.chart.style.height = chartsSize.y + 'px';
  	},
  	
  	initApps(){
  		let globalTimer = setTimeout(() =>{
					this.fullScreenShow = false;
  				this.reSize();	
  		}, this.globalTimer )
  		
  		window.addEventListener('resize', () =>{
  			if( this.$refs.areaStack == undefined ) return;
			this.reSize();
  			this.echarts.resize();
  		});
	  			
  	}
  	
  },
  
  mounted(){
  	this.$nextTick(()=>{
  		this.initApps()
  	})
  }
}
</script>
<style scoped lang="scss">
	.axisCharts{
		height: 100%;
		width: 100%;
	}
</style>
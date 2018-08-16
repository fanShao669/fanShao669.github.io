<template>
<div ref="chartStates" class="echarts" id="chartStates" v-loading="fullScreenShow" element-loading-text="loading..."></div>
</template>

<script>
import Echarts from 'echarts';
import {mapGetters } from 'vuex'
import echartOption from '../../assets/charts/pagechart'

export default {
	
  data(){

    return {
    	fullScreenShow : true,
		echartOption : echartOption
    }
  },
  computed :{
  	 ...mapGetters({ globalTimer : 'echartloadingTime'})
  },
  
  methods:{
  	
  	getSize(){
  		let elemntChart = this.$refs.chartStates;
  		
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
  		this.echarts = Echarts.init( this.$refs.chartStates );
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
  			if( this.$refs.chartStates == undefined ) return;
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
<style scoped="scoped" lang="scss">
.echarts{

	height: 820px;
	padding: 30px;
	
}
</style>
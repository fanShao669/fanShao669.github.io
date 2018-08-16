<template>
	<div class="axisCharts" ref="axiseCharts" id="axiseCharts" v-loading="fullScreenShow" element-loading-text="loading..."></div>
</template>

<script>
import Echarts from 'echarts';
import {mapGetters } from 'vuex'
import echartOption from '../../assets/charts/pageAxis'

export default {
  data(){
    return {
	    echarts : null ,
	    fullScreenShow : true,
	    echartOption: echartOption
    }
  },
  
  computed :{
  	 ...mapGetters({ globalTimer : 'echartloadingTime'})
  },
  
  methods:{
  	
  	getSize(){
  		let elemntChart = this.$refs.axiseCharts;
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
  		this.echarts = Echarts.init( this.$refs.axiseCharts );
  		this.echarts.setOption( this.echartOption );
  	},
  	
  	setSize(){
	  		let chartsSize = this.getSize();
	  		chartsSize.chart.style.width = chartsSize.x + 'px';
	  		chartsSize.chart.style.height = chartsSize.y + 'px';
  	},
  	
  	initApps(){
  		
	  		let globalTimer = setTimeout(() =>{
				this.fullScreenShow = false;
	  			this.reSize();	
	  		}, this.globalTimer )
	  		
	  		window.addEventListener('resize', () =>{
	  			if( this.$refs.axiseCharts == undefined ) return;
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
	height: 80%;
	width: 100%;
}
</style>
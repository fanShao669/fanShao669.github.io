<template>
<div ref="chartMap" class="echarts" id="chartMap" v-loading="fullScreenShow" element-loading-text="loading..."></div>
</template>

<script>
import Echarts from 'echarts';
import {mapGetters } from 'vuex'
import chinaMap from '../../assets/charts/china.json'


export default {
	
  data(){

    return {
    	fullScreenShow : true,
		echartOption : {
		    title: {
		        text: '全国实时销售数据(支持鼠标放大)',
		        subtext: '纯属虚构',
		        left: 'center'
		    },
		    tooltip: {
		        trigger: 'item'
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        show:false,
		        data:['今日订单','销售总额','订单数']
		    },
		    visualMap: {
		    	show:false,
		    	type: 'continuous',
		        min: 0,
		        max: 2500,
		        splitNumber:3,
		        color: ['orangered','yellow','lightskyblue'],
		        left: 'left',
		        top: 'bottom',
		        text: ['低','高'], 
		        calculable: false
		    },
		    series: [
		        {
		            name: '销售总额',
		            type: 'map',
		            mapType: 'china',
		            roam: true,
		            
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {name: '北京',value: Math.round(Math.random()*1000) },
		                {name: '天津',value: Math.round(Math.random()*1000) },
		                {name: '上海',value: Math.round(Math.random()*1000) },
		                {name: '重庆',value: Math.round(Math.random()*1000) },
		                {name: '河北',value: Math.round(Math.random()*1000) },
		                {name: '河南',value: Math.round(Math.random()*1000) },
		                {name: '云南',value: Math.round(Math.random()*1000) },
		                {name: '辽宁',value: Math.round(Math.random()*1000) },
		                {name: '黑龙江',value: Math.round(Math.random()*1000) },
		                {name: '湖南',value: Math.round(Math.random()*1000) },
		                {name: '安徽',value: Math.round(Math.random()*1000) },
		                {name: '山东',value: Math.round(Math.random()*1000) },
		                {name: '新疆',value: Math.round(Math.random()*1000) },
		                {name: '江苏',value: Math.round(Math.random()*1000) },
		                {name: '浙江',value: Math.round(Math.random()*1000) },
		                {name: '江西',value: Math.round(Math.random()*1000) },
		                {name: '湖北',value: Math.round(Math.random()*1000) },
		                {name: '广西',value: Math.round(Math.random()*1000) },
		                {name: '甘肃',value: Math.round(Math.random()*1000) },
		                {name: '山西',value: Math.round(Math.random()*1000) },
		                {name: '内蒙古',value: Math.round(Math.random()*1000) },
		                {name: '陕西',value: Math.round(Math.random()*1000) },
		                {name: '吉林',value: Math.round(Math.random()*1000) },
		                {name: '福建',value: Math.round(Math.random()*1000) },
		                {name: '贵州',value: Math.round(Math.random()*1000) },
		                {name: '广东',value: Math.round(Math.random()*1000) },
		                {name: '青海',value: Math.round(Math.random()*1000) },
		                {name: '西藏',value: Math.round(Math.random()*1000) },
		                {name: '四川',value: Math.round(Math.random()*1000) },
		                {name: '宁夏',value: Math.round(Math.random()*1000) },
		                {name: '海南',value: Math.round(Math.random()*1000) },
		                {name: '台湾',value: Math.round(Math.random()*1000) },
		                {name: '香港',value: Math.round(Math.random()*1000) },
		                {name: '澳门',value: Math.round(Math.random()*1000) }
		            ]
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
  		let elemntChart = this.$refs.chartMap;
  		
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
		Echarts.registerMap('china', chinaMap)
  		this.echarts = Echarts.init( this.$refs.chartMap );
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
  			if( this.$refs.chartMap == undefined ) return;
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
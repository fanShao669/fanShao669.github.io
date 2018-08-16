<template>
  <el-table :data="tableData3" height="250" border style="width: 99.9%" :row-class-name="tableRowClassName" v-loading="loading">
    <el-table-column prop="goods_name" label="商品名称"  width="250"></el-table-column>
    <el-table-column prop="goods_data" label="上架日期" sortable width="180"></el-table-column>
    <el-table-column prop="order_id" label="货号" sortable width="100"></el-table-column>
    <el-table-column prop="goods_price" label="金额" sortable width="100"></el-table-column>
    <el-table-column prop="goods_retail" label="零售价" sortable width="100"></el-table-column>
    <el-table-column fixed="right" label="操作">
      <template scope="scope">
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">查看 </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    data() {
      return {
      	
      	loading : true,
      	
        tableData3: [{
          order_id: '45567678',
          goods_name: '2017新款时尚移动电源',
          goods_price : '220',
          goods_retail : '300',
          status: '已付款',
          goods_data : '2017-07-07 09:21:21',
          operate : ''
        }, {
          order_id: '45567671',
          goods_name: '车载用品',
          goods_price : '2350',
          goods_retail : '3000',
          status: '已发货',
          goods_data : '2017-06-27 18:21:21',
          operate : ''
        }, {
          order_id: '45567677',
          goods_name: '森海塞尔IE8i',
          goods_price : '2155',
          goods_retail : '3000',
          status: '已付款',
          goods_data : '2017-06-30 15:21:21',
          operate : ''
        }, {
          order_id: '45567679',
          goods_name: '智能排插',
          goods_price : '188',
          goods_retail : '200',
          status: '已付款',
          goods_data : '2017-07-07 11:21:21',
          operate : ''
        }, {
          order_id: '45567632',
          goods_name: '移动硬盘 4TB',
          goods_price : '1280',
          goods_retail : '1450',
          status: '已发货',
          goods_data : '2017-04-11 16:21:21',
          operate : ''
        }]
      }
    },
    
    methods:{
    	
    	...mapGetters(['echartloadingTime']),
    	
    	tableRowClassName(row, index){
	        if (index % 2 == 0 ) {
	          return 'info-row';
	        }
	        
	    }
      
    },
    
    mounted(){
    	
    	this.$nextTick( ()=>{ 
    		
    		setTimeout(()=> this.loading = false , this.echartloadingTime);
    		
    	})
    	
    }
}
</script>

<style>
  .el-table .info-row {
    background: #c9e5f5;
  }

</style>
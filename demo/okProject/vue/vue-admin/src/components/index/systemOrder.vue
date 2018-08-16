<template>
  <el-table :data="tableData3" height="250" border style="width: 99.9%" :row-class-name="tableRowClassName" v-loading="loading">
    <el-table-column prop="order_id" label="订单号" width="100"></el-table-column>
    <el-table-column prop="goods_name" label="商品名称"  width="250"></el-table-column>
    <el-table-column prop="goods_data" label="下单日期" sortable width="180"></el-table-column>
    <el-table-column prop="goods_price" label="价格" sortable width="100"></el-table-column>
    <el-table-column prop="status"  label="状态" width="100" filter-placement="bottom-end">
      <template scope="scope">
        <el-tag :type="scope.row.status_class" close-transition>{{scope.row.status}}</el-tag>
      </template>
    </el-table-column>
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
          goods_name: '20000毫安移动电源',
          goods_price : '128',
          status: '已付款',
          goods_data : '2017-07-07 09:21:21',
          status_class : 'danger',
          operate : ''
        }, {
          order_id: '45567671',
          goods_name: '车载用品',
          goods_price : '2350',
          status: '已发货',
          goods_data : '2017-06-07 09:21:21',
          status_class : 'primary',
          operate : ''
        }, {
          order_id: '45567672',
          goods_name: '生活用品',
          goods_price : '350',
          status: '已收货',
          goods_data : '2017-06-22 09:03:21',
          status_class : '',
          operate : ''
        }, {
          order_id: '45567674',
          goods_name: '20000毫安移动电源',
          goods_price : '128',
          status: '已发货',
          goods_data : '2017-07-07 19:21:21',
          status_class : 'primary',
          operate : ''
        }, {
          order_id: '45567677',
          goods_name: 'apple iPad Air 128G',
          goods_price : '7999',
          status: '已付款',
          goods_data : '2017-07-03 22:22:21',
          status_class : 'success',
          operate : ''
        }, {
          order_id: '45567679',
          goods_name: 'apple iPhone7 plus 256G 土豪金',
          goods_price : '7999',
          status: '已付款',
          goods_data : '2017-07-01 15:13:21',
          status_class : 'success',
          operate : ''
        }, {
          order_id: '45567632',
          goods_name: '移动硬盘 4TB',
          goods_price : '1280',
          status: '已发货',
          goods_data : '2017-02-07 12:01:21',
          status_class : 'primary',
          operate : ''
        }]
      }
    },
    
    methods:{
    	
    	...mapGetters(['echartloadingTime']),
    	
    	tableRowClassName(row, index){
	        if (index % 2 == 0 ) {
	          return 'positive-row';
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
  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
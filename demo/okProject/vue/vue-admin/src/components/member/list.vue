<template>
	<div class="mb-container">
		<div class="mb-button-wrap">
			<el-button type="primary" icon="edit" @click="tabDataEdit">编辑</el-button>
			<el-button type="primary" icon="delete" @click="tabDataDelete">删除</el-button>
			<div class="mb-search">
				<el-input v-model="input" ref="searchData"  placeholder="请输入姓名进行搜索" ></el-input>
				<el-button type="primary" icon="search" @click="tabDataSearch">搜索</el-button>
			</div>
			<el-button type="primary" icon="refresh fa fa-refresh" @click="hdRefresh">刷新</el-button>
		</div>
		

   <el-table :data="tabDate"  border style="width: 99.9%" :row-class-name="tableRowClassName" v-loading="asyncload"  highlight-current-row @select="tabCurrentChange" >
   		<el-table-column type="selection" width="55"></el-table-column>
	    <el-table-column prop="mumber_data" label="注册时间" ></el-table-column>
	    <el-table-column prop="id" label="ID" sortable></el-table-column>
	    <el-table-column prop="mumber_name" label="姓名"></el-table-column>
	    <el-table-column prop="mumber_contact" label="联系方式" sortable ></el-table-column>
	    <el-table-column prop="mumber_address" label="地址" sortable></el-table-column>
	    <el-table-column prop="mumber_capital" label="可用资金" sortable></el-table-column>
	    <el-table-column prop="mumber_integral" label="消费积分" sortable></el-table-column>
	    <el-table-column prop="mumber_rank"  label="会员等级"  filter-placement="bottom-end">
	      <template scope="scope">
	        <el-tag :type="scope.row.mumber_rank_class" close-transition>{{scope.row.mumber_rank}}</el-tag>
	      </template>
	    </el-table-column>
  </el-table>
  
  <div class="mb-pagination">
  	<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="1400">
    </el-pagination>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { mapGetters,mapMutations } from 'vuex'

const fetchPath = '../../../static/js/mb_data.json'

export default {
    data() {
      return {
      	asyncload : true,
      	input : '',
      	searchData : '',
      	currentPage : 1,
      	tabDeleteTempData : [],
      	tabDeleteTempEdit : '',
      	
        tabDate: [
        	{
				"mumber_data":"",
				"id" : "",
				"mumber_name":"",
				"mumber_contact":"",
				"mumber_address":"",
				"mumber_capital":"",
				"mumber_integral":"",
				"mumber_rank":"",
				"mumber_rank_class":""
			}
        ],
        
        oldData : []
      }
    },
    
    methods:{
    	
    	...mapGetters(['echartloadingTime']),
    	...mapMutations({
    		tabRowsData : 'SETTABLEEDIT'
    	}),
    	
    	tableRowClassName(row, index){
	        if (index % 2 == 0 ) {
	          return 'positive-row';
	        }
	        
	    },
	    
	    //编辑
	    tabDataEdit(){
	    	
	    	this.tabRowsData( this.tabDeleteTempEdit );
	    	this.$router.push({ 
	    		path : '/member/list/' + this.tabDeleteTempEdit.id
	    	})
	    	
	    },
	    
	    //删除
	    tabDataDelete(){
	    	
	    	if( this.tabDeleteTempData.length == 0 ){
	    		this.$message({
		  			message : '请选择要删除的数据',
		  			type: 'error'
		  		})
	    		return;
	    	}
	    	
	    	this.$confirm('确认要删除' + this.tabDeleteTempData.length + '这组数据？')
	          .then(_ => {
	          	
					let that = this,tabDate = that.tabDate;
					Array.forEach( this.tabDeleteTempData,function( v ,i){
						
						tabDate = tabDate.filter( item => {
							
							return item.id != v;
						});
					} )
					this.asyncResData( tabDate );
				
	    	 })
	          .catch(_ => {});
	    },
	    
	    //搜索
	    tabDataSearch(){
	    	
	    	let that = this,
	    		tabDate,
	    		refsSearchDate = that.$refs.searchData.value;
	    	
	    	if( refsSearchDate.replace(/^\s+|\s+/,'').length == 0 ){
	    		
	    		this.asyncResData( this.oldData );
    			return ;
	    	}
	    	
	    	tabDate = this.tabDate.filter( item => {
	    		return item.mumber_name.indexOf( refsSearchDate ) >= 0 
            }) 
           
           
           this.asyncResData( tabDate );
	    },
	    
		handleSizeChange(val) {
			//console.log(`每页 ${val} 条`);
		},
		
		handleCurrentChange(val) {
			this.currentPage = val;
			this.fetchData();
		},
		
		tabCurrentChange( selection , Rows){
			
			this.tabDeleteTempEdit = Rows;
			if( this.tabDeleteTempData.indexOf(Rows.id ) < 0 ){
				this.tabDeleteTempData.push( Rows.id );
			}else{
				this.tabDeleteTempData.splice( this.tabDeleteTempData.indexOf(Rows.id ) ,1)
			}
		},
		
		hdRefresh(){
			this.fetchData();
		},
		
		fetchData(){
			
			let responseDate = [];
			this.asyncload = true;
			
			axios.get(fetchPath,{params: { currentPage : this.currentPage }})
			.then( res => {
            	if( res.data.length > 0  && res.status == 200 ){
            		Array.forEach(res.data,function(v,k){
            			if( responseDate.length < 18 ){
            				let tempCaheData = res.data[Math.floor( Math.random() * res.data.length )];
            				responseDate = responseDate.filter( item => {
            					return item.id != tempCaheData.id
            				})
            				responseDate.push( tempCaheData )
            			}
            		})
            		this.oldData = responseDate;
            		this.asyncResData( responseDate );
            	}

            })
            .catch(error=>{
               
               this.$message({
                  type: 'info',
                  message: '请求失败'
               })
               
            });
		},
		
		
		asyncResData( res ){
			if( this.asyncTime ) clearTimeout( this.asyncTime );
			this.asyncload = true;
			this.asyncTime = setTimeout(()=>{
    			this.asyncload = false;
    			this.tabDate = res; 	
    		} , this.echartloadingTime());
		}
      
    },
    
    mounted(){
    	
    	this.$nextTick( ()=>{ 
    		
    		this.fetchData();
    		
    	})
    	
    }
}
</script>

<style lang="scss">
  .el-table .positive-row {
    background: #e2f0e4;
  }
 
.mb-container{
	min-height: 700px;
	min-width: 1200px;
	margin: 10px;
	
	.mb-button-wrap{
		padding: 10px;
		background-color: #D3DCE6;
		
		.el-input{
			width: 200px;
		}
	}
	
	.mb-search{
		display: inline-block;
		width: 300px;
		padding-left: 5px;
	}
	
	.fa{
		font:normal normal normal 14px/1 FontAwesome!important;
	}
}

.mb-pagination{
	padding: 10px;
	text-align: center;
}


</style>
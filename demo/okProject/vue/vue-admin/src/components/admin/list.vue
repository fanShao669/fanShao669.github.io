<template>
<transition name="tp-ani">
	<div class="mb-container">
		<div class="mb-button-wrap">
			<el-button type="primary" icon="add" @click="tabDataAdd">新增</el-button>
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
   		<el-table-column prop="server_name" label="名称"></el-table-column>
	    
	    <el-table-column prop="id" label="账号" sortable></el-table-column>
	    <el-table-column prop="server_email" label="Email" sortable ></el-table-column>
	    <el-table-column prop="server_rank"  label="等级"  filter-placement="bottom-end">
	      <template scope="scope">
	        <el-tag :type="scope.row.server_rank_class" close-transition>{{scope.row.server_rank}}</el-tag>
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
      :total="6">
    </el-pagination>
  </div>
</div>
</transition>
</template>

<script>
import axios from 'axios'
import { mapGetters,mapMutations,mapActions } from 'vuex'
const fetchPath = '../../../static/js/ad_data.json'

export default {
    data() {
      return {
      	asyncload : true,
      	input : '',
      	searchData : '',
      	currentPage : 1,
      	tabDeleteTempData : [],
      	tabDeleteTempEdit : '',
      	stateKey : 'ad_async_state',
      	
        tabDate: [
        	{
				"server_data":"",
				"id" : "",
				"server_name":"",
				"server_contact":"",
				"server_address":"",
				"server_capital":"",
				"server_integral":"",
				"server_rank":"",
				"server_rank_class":""
			}
        ],
        
        oldData : []
      }
    },

    methods:{
    	
    	...mapGetters(['echartloadingTime']),
    	...mapMutations({
    		tabRowsData : 'SETTABLEEDIT',
    		setStates : 'SETSTATE'
    	}),
    	
    	...mapActions({
    		getStates : 'getStateSyncAdminData'
    	}),
    	
    	tableRowClassName(row, index){
	        if (index % 2 == 0 ) {
	          return 'positive-row';
	        }
	        
	    },
	    
	    //新增
	    tabDataAdd(){
	    	this.$router.push({ 
	    		path : '/admin/add'
	    	})
	    },
	    
	    //编辑
	    tabDataEdit(){
	    	
	    	this.tabRowsData( this.tabDeleteTempEdit );
	    	this.$router.push({ 
	    		path : '/admin/list/' + this.tabDeleteTempEdit.id
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
					this.tabDeleteTempData = [];
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
	    		return item.server_name.indexOf( refsSearchDate ) >= 0 
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
			
			this.asyncload = true;
			let caheDate;
			
			this.getStates(( data ) =>{
				caheDate = data;
			})
			
			if( caheDate && caheDate.length > 0 ){
				this.oldData = caheDate;
	            this.asyncResData( caheDate );
			}else{
				axios.get(fetchPath,{params: { currentPage : this.currentPage }})
				.then( res => {
	            	if( res.data.length > 0  && res.status == 200 ){
	            		
	            		this.oldData = res.data;
	            		this.asyncResData( res.data );
	            		
	            		this.setStates({
	            			key : this.stateKey,
	            			value : res.data
	            		})
	            		
	            	}
	
	            })
	            .catch(error=>{
	               
	               this.$message({
	                  type: 'info',
	                  message: '请求失败'
	               })
	               
	            });
			}
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
<template>
<transition name="tp-ani">
	<div class="tp-setting" v-loading="loading">
		<div class="tp-tips">
			<h5><i class="fa fa-lightbulb-o"></i> 操作提示</h5>
			<p class="txt"><i class="fa fa-exclamation-circle"></i>标识*的选项为必填项，其余为选填。</p>
			<p class="txt"><i class="fa fa-exclamation-circle"></i>商店相关信息设置，请谨慎填写。</p>
		</div>
		<div class="tp-setting-form">
			<el-form :model="tableRowsData" ref="ruleForm" label-width="220px" >
				
			  <el-form-item label="名称：" prop="name">
			    <el-input v-model="tableRowsData.server_name"></el-input>
			  </el-form-item>
			   <el-form-item label="账号：" prop="name">
			   	<span v-text="tableRowsData.id"></span>
			  </el-form-item>
			   <el-form-item label="Email：" prop="name">
			   	<el-input v-model="tableRowsData.server_email"></el-input>
			  </el-form-item>
			  <el-form-item label="等级：" prop="name">
			    <el-tag :type="tableRowsData.server_rank_class" close-transition v-text="tableRowsData.server_rank"></el-tag>
			  </el-form-item>
			  
			  <el-form-item>
			    <el-button type="primary" @click="edit">确定修改</el-button>
			    <el-button @click="cancel">取消</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default{
	data(){
		return{
			tableRowsData : {},
			loading : true
		}
	},
	methods:{
		...mapGetters({
			tabRowsData :  'tableRowsData',
			editloading : 'echartloadingTime'
		}),
		
		cancel(){
			this.$router.push('/admin/list');
		},
		
		asyncResData( cb ){
			if( this.asyncTime ) clearTimeout( this.asyncTime );
			this.loading = true;
			this.asyncTime = setTimeout(()=>{
    			this.loading = false;
    			cb && cb.call(this);
    		} , this.editloading());
		},
		
		edit(){
			this.asyncResData( () => this.cancel());
		}
	},
	
	mounted(){
		this.$nextTick(() =>{
			
			if( this.tabRowsData() == null ) this.$router.push('/admin/list');
			this.tableRowsData = this.tabRowsData();
			this.asyncResData();
		})
		
	}
}
</script>

<style scoped="scoped">
.tp-setting-form{
	width: 900px;
	padding-top: 50px;
}
</style>
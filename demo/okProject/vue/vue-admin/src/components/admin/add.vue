<template>
	<transition name="tp-ani">
		<div class="tp-setting" v-loading="loading">
			<div class="tp-tips">
				<h5><i class="fa fa-lightbulb-o"></i> 操作提示</h5>
				<p class="txt"><i class="fa fa-exclamation-circle"></i>标识*的选项为必填项，其余为选填。</p>
				<p class="txt"><i class="fa fa-exclamation-circle"></i>商店相关信息设置，请谨慎填写。</p>
			</div>
			<div class="tp-setting-form">
				<el-form :model="tableRowsData" ref="tabRowsData" :rules="rules" label-width="220px" >
					
				  <el-form-item label="名称："  prop="server_name">
				    <el-input v-model="tableRowsData.server_name" ></el-input>
				  </el-form-item>
				   <el-form-item label="账号："  prop="id">
				   	<el-input v-model="tableRowsData.id" ></el-input>
				  </el-form-item>
				   <el-form-item label="Email：" prop="server_email">
				   	<el-input v-model="tableRowsData.server_email" ></el-input>
				  </el-form-item>
				  <el-form-item label="级别"  prop="server_rank_class">
				    <el-select v-model="tableRowsData.server_rank_class" placeholder="--请选择--" >
				      <el-option label="后台管理员" value="gray"></el-option>
				      <el-option label="区域管理员" value="primary"></el-option>
				      <el-option label="商铺管理员" value="success"></el-option>
				      <el-option label="管理员" value="warning"></el-option>
				      <el-option label="超级管理员" value="danger"></el-option>
				    </el-select>
				  </el-form-item>
				  
				  <el-form-item>
				    <el-button type="primary" @click="add">添加</el-button>
				    <el-button @click="cancel">取消</el-button>
				  </el-form-item>
				</el-form>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'

export default{
	data(){
		return{
			tableRowsData : {
				server_name : '',
				id : '',
				server_email : '',
				server_rank : '',
				server_rank_class : ''
			},
			loading : true,
			
			tempRank : {
				gray : '后台管理员',
				primary : '区域管理员',
				success : '商铺管理员',
				warning : '管理员',
				danger : '超级管理员'
			},
			
			rules: {
	          server_name: [
	            { required: true, message: '请输入正确姓名', trigger: 'blur' },
	            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
	          ],
	          id: [
	            { required: true, message: '账号不对', trigger: 'blur' }
	          ],
	          server_email: [
	            { type: 'email', required: true, message: '邮箱不对', trigger: 'blur'}
	          ],
	          server_rank_class: [
	            {  required: true, message: '请选择级别', trigger: 'change' }
	          ]
	        }
		}
	},
	methods:{
		...mapGetters({
			//tabRowsData :  'tableRowsData',
			editloading : 'echartloadingTime'
		}),
	
		...mapMutations({
			addStates : 'ADDTABLESTATE'
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
		
		add(){
			
			this.$refs.tabRowsData.validate((valid, tips) => {
				
	          if (valid) {
	          	this.tableRowsData.server_rank = this.tempRank[this.tableRowsData.server_rank_class]
	            this.addStates(this.tableRowsData)
	            this.asyncResData( () => this.cancel());
	          } else {
	            this.$message({
	                  type: 'error',
	                  message: '带(*)星号为必填项' 
	               })
	            return false;
	          }
	        });

		}
	},
	
	mounted(){
		this.$nextTick(() =>{
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
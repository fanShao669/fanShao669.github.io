<template>
	<div class="g-bd">
		<!-- checkbox -->
        <!-- <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{checked}}</label> -->

        <input type="checkbox" id="flash" value='falsh' v-model="bizlines">
        <label for="falsh">快车</label>
        <input type="checkbox" id="premium" value='premium' v-model="bizlines">
        <label for="premium">专车</label>
        <input type="checkbox" id="bus" value='bus' v-model="bizlines">
        <label for="bus">巴士</label>

        <br>
        <span>Checked lines:{{bizlines | json}}</span>
	</div>
</template>
<script>
    // var demo = new Vue({
    // 	el:'#demo'
    // })
   	// Vue.directive('app',function(value){
    //     console.log(value.color);
    //     console.log(value.text);
    //     console.log(value.text);
    // })

    // import rainbowFoot from '../components/rainbowFoot.vue'
    export default {
        data () {
            return {
              	bizlines:[]  
            }
        },
        mounted: function () {
        	
        },
        methods:{
            
        },
        computed: {
        	didifamily:{
        		// 一个计算属性的getter
        		get:function(){
        			//this指向vm实例
        			return this.didi + ' ' + this.family;
        		},
        		set:function(newVal){
        			var names = newVal.split(' ');
        			this.didi = names[0];
        			this.family = names[1];
        		}
        		// return this.didi + this.family
        	}
        },
        components: {
            // fanaside,
        }, 
          
    }
</script>
<style>
	.g-bd{
		font-size: 20px;
		color:red;
	}

</style>
<template>
	<div class="g-bd">
		<!-- 计算属性 -->
		 <input type="text" v-model = 'didi'>
		 <input type="text" v-model = 'family'>
		 <br>
		 didi = {{didi}},family = {{family}},didifamily = {{didifamily}}
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
              	didi:'didi',
              	family:'family'
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
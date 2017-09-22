<template>
	<div class="g-bd">
		<!-- 计算属性 常见问题 -->
        <button @click = 'toggleShow'>Toggle Show Total Price</button>
        <p>{{totalPrice}}</p>
        <p v-if="showTotal">Total Price = {{totalPrice}}</p>
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
              	showTotal:true,
                basePrice:100
            }
        },
        mounted: function () {
        	
        },
        methods:{
            toggleShow:function(){
                this.showTotal = !this.showTotal
            }
        },
        computed: {
        	totalPrice:function(){
                return this.basePrice + 1
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
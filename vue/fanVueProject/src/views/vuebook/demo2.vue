<template>
	<div class="g-bd">
		<!-- 计算属性缓存 -->
        <div>{{welcome}}</div>
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
              	welcome:'welcome3 to join didifamily'
            }
        },
        mounted: function () {
        	
        },
        methods:{
            
        },
        computed: {
        	example:{
                //关闭缓存，默认为true
                cache:false,
                get:function(){
                    return Date.now() + this.welcome
                }
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
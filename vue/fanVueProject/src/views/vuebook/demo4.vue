<template>
	<div class="g-bd">
    <!-- error -->
    <!-- error -->
		<!-- 计算属性 v-repeat -->
        <my-item v-repeat="items" inline-template>
            <button>{{fulltext}}</button>
        </my-item>    
	</div>
</template>
<script>
    var items = [
        {number:1,text:'one'},
        {number:2,text:'two'},
    ]

    // import rainbowFoot from '../components/rainbowFoot.vue'
    export default {
        data () {
            return {
              	items:items,
            }
        },
        mounted: function () {
        	
        },
        methods:{
            
        },
        computed: {
        	// example:{
         //        //关闭缓存，默认为true
         //        cache:false,
         //        get:function(){
         //            return Date.now() + this.welcome
         //        }
         //    }
        },
        components: {
            // fanaside,
            'my-item':{
                replace:true,
                computed:{
                    fulltext:function(){
                        return 'item' + this.text
                    }
                }
            }
        }, 
          
    }
</script>
<style>
	.g-bd{
		font-size: 20px;
		color:red;
	}
</style>
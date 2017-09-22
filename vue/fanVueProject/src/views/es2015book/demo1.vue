<template>
	<div class="g-bd">
		<!-- 计算属性 -->
		123456
	</div>
</template>
<script>
    export default {
        data () {
            return {
              	Zootopia:[
                    {name: 'Nick' ,gender :1 /*Male*/, species:'Fox'},
                    {name: 'Juck' ,gender :0 /*Female*/, species:'Bunny'},
                ]
            }
        },
        mounted: function () {
        	this.$nextTick(function () {
                var _this = this;
                const ZootopiaApp = _this.Zootopia;
                console.log(ZootopiaApp);
                for(const list of ZootopiaApp.entries()){
                    // console.log('Hi , I am {{name}}, and I am a {{species}}.')
                    console.log('{index}.Hi , I am {{list.name}}, and I am a ${species}.')
                }


            })
        },
        methods:{
            
        },
        computed: {
        
        },
        components: {
        }, 
          
    }
</script>
<style>
	.g-bd{
		font-size: 20px;
		color:red;
	}

</style>
<template>
	<div class="g-bd">
		<!-- this穿透 -->
        7897979797897
        {{data}}
	</div>
</template>
<script>
    export default {
        data () {
            return {
              	Zootopia:[
                    {name: 'Nick' ,gender :1 /*Male*/, species:'Fox'},
                    {name: 'Juck' ,gender :0 /*Female*/, species:'Bunny'},
                ],
                data:'...',
            }
        },
        mounted: function () {
        	this.$nextTick(function () {
               // this穿透
               const obj = {
                 hello:'world',
                 foo(){
                    const bar = () => this.hello
                    return bar 
                 }
               }
               window.hello = 'ES6'
               window.bar = obj.foo()
               window.bar()
               console.log(window.bar());
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
<template>
	<div class="g-bd">
		<!-- 箭头函数（Arrow Function） -->
		2323123
	</div>
</template>
<script>
    export default {
        data () {
            return {
              	
            }
        },
        mounted: function () {
        	this.$nextTick(function () {

                //箭头函数最简洁的形式
               // const fn = foo => 'foo world'
               // console.log(fn);

               //单一参数
               let array = ['a','bc','def','ghij'];
               array  = array.filter(item => item.length >= 3);
               console.log(array);


               //多参数
               const fn = (foo,bar) => foo + bar;
               console.log(fn);

               // 排序
               let array1 = ['bc','a','def','ghij'];
               array1 = array1.sort((a,b) => a.length < b.length)
               console.log(array1);

               //无箭头函数
               const arr = [1,2,3];
               const squares =  arr.map(x => x * x);
               console.log(squares);
           
               const squares1 = arr.map(function(x){
                    return x * x;
              })
              console.log('squares1'+'='+squares1);


              const names = ['Will', 'Jack','Peter','Steve','John','Hugo','Mike'];

              const newSet = names.map((name,index) => ({
                id:index,
                name:name
              })).filter(man => man.id % 2 == 0).map(man => [ man.name ]).reduce((a,b) => a.concat(b))
              console.log(newSet);

              
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
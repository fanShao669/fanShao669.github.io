<template>
	<div class="g-bd">
		<!-- 打字动画 -->
		
        <p class="blink-smooth-1">Peek-a-boo!</p>
        <p class="blink-smooth-2">贼6</p>
        <p class="blink">fanShao</p>



		<router-link tag="span" to="/css41">第41个动画</router-link>
		<router-link tag="span" to="/css39">第39个动画</router-link>	
        <!-- <fanaside></fanaside> -->
	</div>
</template>
<script>
    // import fanaside from '../components/fanaside.vue'
    export default {
        data () {
            return {
               
            }
        },
        mounted: function () {
           
        },
        methods:{
            
        },
        computed: {

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
    @keyframes blink-1 { 50% { color: transparent } }
    @keyframes blink-2 { to { color: transparent } }

    p {
        padding: 1em;
        background: gold;
    }

    .blink-smooth-1 {
        animation: 1s blink-1 3;
    }

    .blink-smooth-2 {
        animation: .5s blink-2 6;
        animation-direction: alternate;
    }

    .blink {
        animation: 1s blink-1 3 steps(1);
    }

</style>
<template>
	<div class="g-bd">
		<!-- 打字动画 -->
		
		<h1>CSS is awesome!</h1>
        
		<router-link tag="span" to="/css42">第42个动画</router-link>
		<router-link tag="span" to="/css40">第40个动画</router-link>	
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
	/**
 * Typing animation
 */

    @keyframes typing {
        from { width: 0 }
    }

    @keyframes caret {
        50% { border-right-color: transparent; }
    }

    h1 {
        font: bold 200% Consolas, Monaco, monospace;
        /*width: 8.25em;*/
        width: 15ch;
        white-space: nowrap;
        overflow: hidden;
        border-right: .05em solid;
        animation: typing 8s steps(15),
                   caret 1s steps(1) infinite;
    }

</style>
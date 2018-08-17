<template>
	<div>
		视频页
    </div>
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
             
            }
        },
        methods:{
            watchPeople: function (num) {
              // `this` points to the vm instance
              return num>10000 ? (num/10000).toFixed(1)+'万' : num;
            }
        },
        computed: {

        },
    }
</script>

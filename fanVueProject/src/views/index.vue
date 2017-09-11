<template>
	<div class="g-bd">
		dsafsaffas三大发了几十大发啦
		fdssdfjl
		<input class="search" type="text" v-model="searchText">
		<ul>
			<li v-for="user in users">{{user.name}}</li>
		</ul>
		<div class="circular">
			<svg viewBox ='0 0 100 100'>
				<path d='M 0,50 a 50,50 0 1,1 0,1 z' id='circle' />
				<text>
					<textPath xlink:href='#circle'>
						circular reasoning works because
					</textPath>	
				</text>	
			</svg>
			<svg viewBox ='100 0 100 100'>
				<path d='M 0,50 a 50,50 0 1,1 0,1 z' id='circle' />
				<text>
					<textPath xlink:href='#circle'>
						circular reasoning works because
					</textPath>	
				</text>	
			</svg>
			<svg viewBox ='-100 100 100 100'>
				<path d='M 0,50 a 50,50 0 1,1 0,1 z' id='circle' />
				<text>
					<textPath xlink:href='#circle'>
						circular reasoning works because
					</textPath>	
				</text>	
			</svg>
			<svg viewBox ='0 0 100 100'>
				<path d='M 0,50 a 50,50 0 1,1 0,1 z' id='circle' />
				<text>
					<textPath xlink:href='#circle'>
						circular reasoning works because
					</textPath>	
				</text>	
			</svg>
		</div>
	</div>
</template>
<script>
	// import rainbowHead from '../components/rainbowHead.vue'
 //    import rainbowFoot from '../components/rainbowFoot.vue'
    export default {
        data () {
            return {
                users:[
                	{name:'快车',tag:'1'},
                	{name:'出租车',tag:'2'},
                	{name:'顺风车',tag:'3'},
                	{name:'专车',tag:'4'},
                	{name:'自行车',tag:'5'},
                ],
                searchText:'',
            }
        },
        mounted: function () {
            // $('.dl-btn').hover(function(){
            // 	$(this).find('.qr-code').stop(true).fadeIn(300);
            // },function(){
            // 	$(this).find('.qr-code').stop(true).fadeOut(300);
            // })
            console.log('aaaaaavvvvv');
        },
        methods:{
            
        },
        computed: {

        },
        // components: {
        //     rainbowHead,
        //     rainbowFoot
        // },   
    }
</script>
<!-- <link rel="stylesheet" href="/views/index.css"> -->
<style>
	.g-bd{
		font-size: 20px;
		color:red;
	}
	.search{
		width: 100%;
		height: 2.0rem;
		border:1px solid #e6e6e6;
	}
	.circular{
		position: absolute;
		left:2em;
		width: 2em;
		height: 2em;
		margin: 3em auto 0;
	}
	.circular path{
		fill:none;
	}
	.circular svg{
		display: block;
		overflow: visible;
	}
	/*.landing{
		height: 100vh;
		background: url('../../static/images/bg.png') top center no-repeat;
		background-size:cover;
	}
	.m-download{
		position: absolute;
		left: 50%;
		bottom: 150px;
		width: 408px;
		transform: translate(-50%,0);
	}
	.m-download img{
		margin:0 18px;
	}
	.dl-btn{
		position: relative;
		width: 204px;
		display: inline-block;
		float: left;
		cursor: pointer;
	}
	.qr-code{
		position: absolute;
		top:50%;
		transform: translate(0,-50%);
		width: 155px;
		height: 155px;
		background: url('../../static/images/qrcode.png') top center no-repeat;
		display: none;
	}
	.m-android .qr-code{		
		left:-160px;
	}
	.m-ios .qr-code{
		right:-160px;
	}*/
</style>
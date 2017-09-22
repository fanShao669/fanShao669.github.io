<template>
	<div class="g-aside">
		<ul>
			<li>
				<router-link tag="span" to="/css01">css01</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css02">css02</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css03">css3</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css04">css4</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css05">css5</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css06">css6</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css07">css7</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css08">css8</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css09">css9</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css10">css10</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css11">css11</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css12">css12</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css13">css13</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css14">css14</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css15">css15</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css16">css16</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css17">css17</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css18">css18</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css19">css19</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css20">css20</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css21">css21</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css22">css22</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css23">css23</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css24">css24</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css25">css25</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css26">css26</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css27">css27</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css28">css28</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css29">css29</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css30">css30</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css31">css31</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css32">css32</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css33">css33</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css34">css34</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css35">css35</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css36">css36</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css37">css37</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css38">css38</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css39">css39</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css40">css40</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css41">css41</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css42">css42</router-link>
			</li>
			<li>
				<router-link tag="span" to="/css43">css43</router-link>
			</li>
			<li class="g-right" @click='Jump'>跳转</li>
		</ul>

	</div>
</template>
<style>
	.g-aside{
		position: absolute;
		left:-100px;
		width: 100px;
		min-height: 100px;
		max-height: 300px;
		/*overflow: scroll;*/
	}
	.g-aside.active{
		left:0;
		animation:g-aside 3s infinite;
		-webkit-animation:g-aside 3s infinite; /* Safari 和 Chrome */
	}
	.g-aside ul{
		position: relative;
		width: 100%;
		max-height: 300px;
	}	
	.g-aside ul .g-right{
		position: absolute;
		top:0;
		right: -50px;
		width: 25px;
		height: 25px;
		line-height: 25px;
		border-radius: 50%;
		font-size: 12px;
		content: "跳转"
	}

	.g-aside ul li{
		width: 100px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		border:1px solid #e6e6e6;
	}

</style>
<script>
    export default {
        data () {
            return {
                
            }
        },
        mounted: function () {
            $('.dl-btn').hover(function(){
            	$(this).find('.qr-code').stop(true).fadeIn(300);
            },function(){
            	$(this).find('.qr-code').stop(true).fadeOut(300);
            })
        },
        methods:{
            Jump:function(){
            	$('.g-aside').toggleClass('active');
            }
        },
        computed: {

        },
        components: {
            
        },   
    }
</script>
<template>
	<view class="content">
		<view class="img-skip" @tap="bindSkip">
			<text>跳过</text>
		</view>
		<swiper indicator-dots="true" autoplay="true">
			<swiper-item v-for="(img,key) in imgs" :key="key">
				<image :src="img" class="img-view" />
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	
	export default {
		data() {
			return {
				imgs: [
					"../../static/index_1.jpg",
					"../../static/index_2.jpg",
					"../../static/index_3.jpg"
				]
			}
		},
		computed: mapState(['hasSkip']),
		methods:{
			...mapMutations(['skipIndex']),
			bindSkip(){
				this.skipIndex();
				uni.reLaunch({
					url:'../denglu/login/login'
				});
			}
		},
		onLoad() {
			if(this.hasSkip){
				uni.reLaunch({		
					url: '../tabBar/news/news'
				});
			}
		}
	}
</script>

<style>
	swiper{
		height: 100vh;
	}
	.img-skip{
		width: 2.5em;
		height: 1.6em;
		position: absolute;
		z-index: 100;
		right: 10upx;
		top: 10upx;
		background-color: #D3D3D3;
		text-align: center;
		border-radius: 15%;
	}
	.img-skip text{
		font-size: 0.8em;
		line-height: 1.6em;
		color: #FFFFFF;
	}
	.img-view{
		width: 100%;
		height: 100%;
	}
</style>

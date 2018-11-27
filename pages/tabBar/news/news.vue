<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in news" :key="index">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.img"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.content}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	
	export default {
		data() {
			return {
				news: []
			};
		},
		computed: mapState(['hasLogin', 'userName']),
		onLoad(){
			if(!this.hasLogin){
				uni.reLaunch({		// 关闭所有页面进行跳转
					url: '../../denglu/login/login'
				});
			}else{			
				// 请求消息列表
				uni.request({
					url: 'https://easy-mock.com/mock/5bed59917939e615b8bbdbc2/me/msg',
					method: 'GET',
					data: {},
					success: res => {
						this.news = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		onPullDownRefresh(){
			uni.request({
			 	url: 'https://easy-mock.com/mock/5bed59917939e615b8bbdbc2/me/msg',
			 	method: 'GET',
			 	data: {},
			 	success: res => {
			 		this.news.splice(0,0,...res.data.data);
			 	},
			 	fail: () => {},
			 	complete: () => {
					uni.stopPullDownRefresh();
				}
			});
		}
	}
</script>

<style>
	.uni-media-list-logo{
		width: 120upx;
		height: 120upx;
		border-radius: 15upx;
	}
	.uni-media-list-body{
		height: 120upx;
	}
	.uni-media-list-text-top{
		font-size: 1.2em;
		line-height: 1.2em;
		margin:5upx 0 15upx 0;
	}
	.uni-media-list-text-bottom{
		font-size: .8em;
		line-height: 1.2em;
		margin-bottom: 5upx;
	}
</style>

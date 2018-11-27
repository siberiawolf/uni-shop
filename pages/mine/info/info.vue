<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" @tap="bindLogo">
				<view class="uni-media-list uni-list-cell-navigate uni-navigate-right uni-pull-right">
					<image class="uni-media-list-logo" :src="userImg"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">头像</view>
					</view>
				</view>
			</view>
			<view class="uni-list-cell" hover-class="uni-list-cell-hover">
				<view class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge">
					昵称
					<text class="me-list-text">{{userName}}</text>
				</view>
			</view>
			<view class="uni-list-cell" hover-class="uni-list-cell-hover">
				<view class="uni-list-cell-navigate">
					微商号
					<text class="me-list-text">12343212345</text>
				</view>
			</view>
			<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover" @tap="bindQrcode">
				<view class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge">
					我的二维码
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
			};
		},
		computed: mapState(['userName','userImg']),
		methods:{
			bindQrcode(){
				uni.navigateTo({
					url:'../qrcode/qrcode'
				});
			},
			bindLogo(){
				uni.navigateTo({
					url:'../logo/logo'
				});
			}
		}
	}
</script>

<style>
	page{
		background-color: #efeff4;
	}
	.uni-list-cell{
		font-size: 1em;;
	}
	.uni-media-list-logo{
		width: 150upx;
		height: 150upx;
		border-radius: 30upx;
	}
	.uni-media-list-text-top{
		line-height: 110upx;
		font-size: 1em;
	}
	.me-list-text{
		box-sizing: border-box;			
		display: inline-block;
		padding: 3px 6px;
	}
</style>

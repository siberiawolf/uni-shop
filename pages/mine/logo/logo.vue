<template>
	<view class="content">
		<image :src="userImg" @tap="bindChange" mode="scaleToFill" />
	</view>
</template>   

<script>
	import {mapState, mapMutations} from 'vuex';
	
	export default {
		data() {
			return {
				
			};
		},
		computed: mapState(['userImg']),
		methods:{
			...mapMutations(['changeLogo']),
			bindChange(){
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album'],
					success: (res) => {
						const imgSrc = res.tempFilePaths[0];
						uni.showLoading({
							title: '上传中',
							mask: true
						});
						// 将头像上传到服务器
						uni.uploadFile({
							url: "https://demo.dcloud.net.cn/helloh5/uploader/upload.php",
							filePath: imgSrc,
							name: 'data',
							success: (res) => {
								uni.hideLoading();
								this.changeLogo(imgSrc); // 替换本地缓存头像
							},
							fail: (err) => {
								uni.showModal({
									content:err.errMsg,
									showCancel:false
								});
							},
							complete: () => {
							}
						});
					},
					fail: (err) => {
						console.log('选择图片失败', err);
					}
				});
			}
		}
	}
</script>

<style>
	page{
		height: 100%;
		background-color: #efeff4;
	}
	.content{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
</style>

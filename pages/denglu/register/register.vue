<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<view class="content-tab">
					<text class="title">账</text>
					<text class="title">号</text>
				</view>
				<input type="text" v-model="account" placeholder="请输入账号">
			</view>
			<view class="input-row border">
				<view class="content-tab">
					<text class="title">密</text>
					<text class="title">码</text>
				</view>
				<input type="text" password="true" v-model="pwd" placeholder="请输入密码">
			</view>
			<view class="input-row">
				<text class="title">确认密码</text>
				<input type="text" password="true" v-model="repwd" placeholder="请输入确认密码">
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindRegister">注册</button>
		</view>		     
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: '',
				pwd: '',
				repwd: ''
			};
		},
		methods:{
			bindRegister(){
				uni.showToast({
					icon:"none",
					title:"注册成功"
				}); 
				uni.navigateBack({
                    delta: 1
                });
			}
		}
	}
</script>

<style>
	@import '../../../common/denglu.css';
	
	.content-tab{
		display: flex;
		width: 4em;
		justify-content:space-between;
	}
	.input-row input{
		margin-left: 15upx;
	}
</style>

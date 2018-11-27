<template>
	<button class="me-logout default" type="default" @tap="bindLogout">退出登录</button>
</template>

<script>
	import {mapMutations} from 'vuex';
	
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			...mapMutations(['logout']),
			bindLogout(){
				this.logout();
				uni.reLaunch({
					url: '../login/login',
				});
			}
		}
	}
</script>

<style>
	page{
		background-color: #efeff4;
	}
	.me-logout{
		margin-top: 20upx;
	}
	button.default{
		background-color: #FFFFFF;
	}
</style>

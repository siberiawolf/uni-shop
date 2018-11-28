<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">账号</text>
                <input type="text" v-model="account" placeholder="请输入账号">
            </view>
            <view class="input-row">
                <text class="title">密码</text>
                <input type="text" password="true" v-model="password" placeholder="请输入密码">
            </view>
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="bindLogin">登录</button>
        </view>
        <view class="action-row">
            <navigator url="../register/register">注册账号</navigator>
            <text>|</text>
            <navigator url="../password/password">忘记密码</navigator>
        </view>       
    </view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	
	export default {
		data() {
			return {
				account: '',
				password: ''
			};
		},	
		methods:{
			...mapMutations(['login']),
			bindLogin(){				
				uni.request({
					url: 'https://easy-mock.com/mock/5bed59917939e615b8bbdbc2/me/login',
					method: 'GET',
					data: {
						name: this.account
					},
					success: res => {
						// todo: 登录成功后需要返回用户信息，这里例举头像
						const userImg = '../../../static/44.jpg'; 
						if(this.password == res.data.pwd){
							this.toLogin(this.account, userImg);
						}else {
							uni.showToast({
								icon: 'none',
								title: '用户账号或密码不正确',
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});				
			},
			toLogin(userName, userImg){
				this.login({userName, userImg});
				uni.reLaunch({
					url: '../../tabBar/news/news',
				});
			}
		}
	}
</script>

<style>
	@import '../../../common/denglu.css';
	
	.input-row input{
		margin-left: 15upx;
	}
</style>

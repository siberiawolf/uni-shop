import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let userState = {
	userName: '',
	hasLogin: false, // 是否登录
	hasSkip: false   // 是否跳过启动页
};

const userInfo = uni.getStorageSync('userInfo');
if(userInfo.hasLogin){	
	userState = userInfo;
}
if(userInfo.hasSkip){	// 用户已经跳过启动页，但是没有登录
	userState.hasSkip = true;
}
const store = new Vuex.Store({
    state: {...userState},
    mutations: {
        login(state, user) {  // 用户登录
            state.userName = user.userName;
            state.hasLogin = true;
			state.userImg = user.userImg;

			uni.setStorageSync('userInfo', {...state});	
        },
        logout(state) {			// 用户退出
            state.userName = "";
            state.hasLogin = false;
			// todo: 当用户退出时，启动页可以不再显示
			uni.clearStorageSync();
        },
		changeLogo(state, img){	// 用户修改图片
			state.userImg = img;
			
			uni.setStorageSync('userInfo', {...state});	
		},
		skipIndex(state){	// 用户跳过首页
			state.hasSkip = true; 
			
			uni.setStorageSync('userInfo', {...state});	
		}
    }
});

export default store

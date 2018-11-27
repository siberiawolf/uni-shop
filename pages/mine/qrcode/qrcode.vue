<template>
	<view class="qrcode">
		<qrcode :val="number" ref="qrcode"></qrcode>
	</view>
</template>

<script>
	import qrcode from '../../../components/qrcode/qrcode.vue';
	
	
	export default {
		data() {
			return {
				number: '12343212345',
				img: ''
			};
		},
		components: {
			qrcode
		},
		onLoad() {
			
		}
	}
</script>

<style>
	page{
		height: 100%;
		background-color: #efeff4;
	}
	.qrcode{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
</style>

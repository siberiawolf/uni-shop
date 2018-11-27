<template>
	<image :src="img" ></image>
</template>

<script>
	import qrcode from './qrcode.js';
	
	export default {
		props: {
			val: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				img: ''				
			};
		},
		onLoad() {
			let code = String(this.val)
			if(code == ''){
				return false
			}
			
			this.img = qrcode.createQrCodeImg(code);			
		}
	}
</script>

<style>
	
</style>

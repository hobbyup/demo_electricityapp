<template>
	<div>
		<div class="noInt">
			<van-row type="flex">
				<van-col span="12" offset="4">无网络提示</van-col>
			</van-row>
		</div>
		<van-button plain type="primary" @click="allow" class="btnCheck">检查网络</van-button>

		<van-popup v-model="show" click="showFont">
			<!-- <van-icon name="http://via.placeholder.com/200x200" class="close"/> -->
			<div>当前网络不佳,请检查网络重试</div>
			<!-- <van-image width="100" height="100" src="http://via.placeholder.com/200x200" /> -->
			
		</van-popup>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},

		methods: {
			allow() {
				this.show = true;
			}
		}
	};
</script>

<style>
	.noInt{
		font-size: 0.29rem;
	}
	.btnCheck{
		left: 35%;
	}
	.close {
		text-align: center;
	}

	.van-overlay {
		background-color: rgba(0, 0, 0, .2);
	}

	.van-popup {
		font-size: 0.29rem;
		height: 0.92rem;
	}

	.showFont {
		font-size: 0.29rem;
	}
</style>

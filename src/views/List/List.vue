<template>
	<div>
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<van-cell v-for="item in list" :key="item" :title="item" />
		</van-list>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [], //用于存放加载的数据
				totalPage: 0,
				pageNumber: 0,
				loading: false, //控制上拉加载的加载动画
				finished: false, //控制在页面往下移动到底部时是否调用接口获取数据
				isLoading: false, //控制下拉刷新的加载动画
			};
		},
		methods: {
			onLoad() {
				// 异步更新数据
				setTimeout(() => {
					for (let i = 0; i < 20; i++) {
						this.list.push(this.list.length + 1);
					}
					// 加载状态结束
					this.loading = false;

					// 数据全部加载完成
					if (this.list.length >= 40) {
						this.finished = true;
					}
				}, 2000);
			}
		}
	}
</script>

<style>
</style>

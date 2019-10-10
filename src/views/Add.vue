<template>
	<div>
		<div>标题：<textarea v-model="title"></textarea></div>
		<div>内容：<textarea v-model="content"></textarea></div>
		<button @click="complete()">完成</button>
		<button @click="cancel()">取消</button>
	</div>
</template>

<script>
	import store from '@/store';
	export default {
		name: 'add',
		store,
		data() {
			return {
				title : '',
				content: ''
			}
		},
		methods: {
			complete(){
				store.commit('addList', {
					title: this.title,
					content : this.content
				});
				this.$router.push('/home/user');
			},
			cancel() {

			}
		}
	}
</script>

<style scoped>
	
</style>
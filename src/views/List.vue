<template>
	<div>
		<div v-for="(item, index) of lists" :key="index">
			<div>{{item.title}}</div>
			<div>{{item.content}}</div>
			<div>{{new Date().toLocaleString()}}</div>
		</div>
	</div>
</template>

<script>
	import store from '@/store'
	export default {
		name: 'list',
		store,
		computed: {
			lists: function(){
				return store.state.lists;
			}
		}
	}
</script>

<style scoped>
	
</style>
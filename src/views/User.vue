<template>
	<div>
		<button @click="add()">Add</button>
	</div>
</template>

<script>
	export default {
		name: 'user',
		methods: {
			add(){
				this.$router.push("/add");
			}
		}
	}
</script>

<style scoped>
	
</style>
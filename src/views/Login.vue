<template>
	<div>
		<form v-if="!isreg">
			<div class="welcome">欢迎登陆</div>
			<br/>
			<div>用户名：<input type="" name="" v-model="username"/></div>
			<div>密码：<input type="password" name="" v-model="pwd"/></div>
			<button @click="login()">登陆</button>
			<button @click="reg()">注册</button>
		</form>
		<form v-else>
			<div>请输入以下信息：</div>
			<br/>
			<div>用户名：<input type="" name="" v-model="username"/></div>
			<div>密码：<input type="password" name="" v-model="pwd"/></div>
			<div>确认密码：<input type="password" name="" @blur="confirmPwd()" v-model="confirmPassword"/></div>
			<button type="button" @click="addUser()">确认</button>
			<button type="button" @click="cancel()">取消</button>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				isreg: false,
				username: '',
				pwd: '',
				confirmPassword: ''
			}
		},
		methods: {
			login(){
				if(!this.username){
					alert("请输入用户名！");
					return;
				}
				if(!this.pwd){
					alert("请输入密码！");
					return;
				}
				var storage = localStorage;
				if(storage.getItem("username") === this.username && storage.getItem("password") === this.pwd){
					this.$router.push('/home');
				}
			},
			reg(){
				this.isreg = !this.isreg;
			},
			confirmPwd(){
				if(this.confirmPassword !== this.pwd){
					alert('两次密码不一致，请重新输入！');
					this.confirmPassword = "";
					return;
				}
			},
			addUser() {
				if(!this.username){
					alert('请输入用户名！');
					return;
				}
				if(!this.pwd){
					alert('请输入密码！');
					return;
				}
				if(!this.confirmPassword){
					alert('请输入确认密码！');
					return;
				}
				localStorage.setItem("username", this.username);
				localStorage.setItem("password", this.pwd);

				this.username = "";
				this.pwd = "";
				this.confirmPassword = "";
				this.isreg = false;
			},
			cancel() {
				this.isreg = false;
			}
		}
	}
</script>

<style scoped>
	.welcome{
		text-align: center;
	}
</style>
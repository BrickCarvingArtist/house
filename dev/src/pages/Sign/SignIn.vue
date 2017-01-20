<template>
	<div>
		<my-header hasBack="1" title="登录" />
		<input v-model="user" placeholder="用户名" />
		<input type="password" v-model="password" placeholder="密码" />
		<a @click="signIn">登录</a>
		<router-link to="/sign_up" v-text="'跳转注册'" />
	</div>
</template>
<script>
	import MyHeader from "../../components/Header";
	export default {
		data(){
			return {
				user: "",
				password: ""
			};
		},
		methods: {
			async signIn(){
				if((await (await fetch("/api/sign_in", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: `user=${this.user}&password=${this.password}`,
					credentials: "include"
				})).json()).code){
					console.log("登录失败");
				}else{
					console.log("登录成功");
				}
			}
		},
		components: {
			MyHeader
		},
		beforeCreate(){
			this.$parent.footer = 0;
		}
	};
</script>
<template>
	<div>
		<my-header hasBack="1" title="注册" />
		<input v-model="user" placeholder="用户名" />
		<input type="password" v-model="password" placeholder="密码" />
		<a @click="signUp">注册</a>
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
			async signUp(){
				if((await (await fetch("/api/sign_up", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: `user=${this.user}&password=${this.password}`,
					credentials: "include"
				})).json()).code){
					console.log("注册失败");
				}else{
					console.log("注册成功");
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
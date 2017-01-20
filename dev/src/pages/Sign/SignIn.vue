<template>
	<div>
		<my-header hasBack="1" title="登录" />
		<input v-model="user" placeholder="用户名" />
		<input type="password" v-model="password" placeholder="密码" />
		<a @click="signIn">登录</a>
		<router-link to="/sign_up" v-text="'跳转注册'" />
		<modal ref="modal" type="fixed" />
	</div>
</template>
<script>
	import MyHeader from "../../components/Header";
	import Modal from "../../components/Modal";
	export default {
		data(){
			return {
				user: "",
				password: ""
			};
		},
		methods: {
			async signIn(){
				const {modal} = this.$refs;
				const {
					data,
					code
				} = await (await fetch("/api/sign_in", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: `user=${this.user}&password=${this.password}`,
					credentials: "include"
				})).json();
				if(code){
					modal.toast({
						message: "登录失败",
						duration: 800,
					});
				}else{
					modal.toast({
						message: "登录成功",
						duration: 800,
					});
					this.$router.push("/me");
					this.$parent.user = data;
				}
			}
		},
		components: {
			MyHeader,
			Modal
		},
		beforeCreate(){
			this.$parent.footer = 0;
		}
	};
</script>
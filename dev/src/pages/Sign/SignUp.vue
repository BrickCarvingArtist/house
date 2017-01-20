<template>
	<div>
		<my-header hasBack="1" title="注册" />
		<input v-model="user" placeholder="用户名" />
		<input type="password" v-model="password" placeholder="密码" />
		<a @click="signUp">注册</a>
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
			async signUp(){
				const {modal} = this.$refs;
				if((await (await fetch("/api/sign_up", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: `user=${this.user}&password=${this.password}`,
					credentials: "include"
				})).json()).code){
					modal.toast({
						message: "注册失败",
						duration: 800,
					});
				}else{
					modal.toast({
						message: "注册成功",
						duration: 800,
					});
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
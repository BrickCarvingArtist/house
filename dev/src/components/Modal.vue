<style lang="stylus" scoped>
	div
		display flex
		justify-content center
		&.fixed
			position fixed
			top 50%
			left 50%
			transform translate(-50%, -50%)
		p
			padding .3125rem .625rem
			background-color rgba(0, 0, 0, .2)
			border-radius .8125rem
			font-size .75rem
			color white
</style>
<template>
	<div v-show="message" :class="type">
		<p>{{message}}</p>
	</div>
</template>
<script>
	export default {
		props: ["type"],
		data(){
			return {
				message: "",
				duration: 0
			};
		},
		methods: {
			toast(options){
				Object.assign(this, options);
			}
		},
		updated(){
			setTimeout(() => {
				this.message = "";
			}, this.duration);
		}
	};
</script>
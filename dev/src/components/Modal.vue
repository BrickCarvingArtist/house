<style lang="stylus" scoped>
	div
		display flex
		justify-content center
		p
			padding .3125rem .625rem
			background-color rgba(0, 0, 0, .2)
			border-radius .8125rem
			font-size .75rem
			color white
</style>
<template>
	<div v-show="message">
		<p>{{message}}</p>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				message: "",
				duration: 0
			};
		},
		updated(){
			setTimeout(() => {
				this.message = "";
			}, this.duration);
		}
	};
</script>
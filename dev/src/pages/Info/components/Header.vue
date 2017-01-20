<style lang="stylus" scoped>
	$orange=#ff6932
	header
		display flex
		padding .375rem 3.125rem
		background-color white
		border-bottom 1px solid #ddd
		a
			flex 1
			height 1.5625rem
			border 1px solid $orange
			text-align center
			font-size .75rem
			line-height @height
			&:first-of-type
				border-top-left-radius 4px
				border-bottom-left-radius 4px
			&:last-of-type
				border-top-right-radius 4px
				border-bottom-right-radius 4px
			&.router-link-active
				background-color $orange
				color white
			&:not(.router-link-active)
				color $orange
</style>
<template>
	<header>
		<router-link v-for="item of settings" :to="item.path" v-text="item.meta.name" />
	</header>
</template>
<script>
	export default {
		data(){
			return {
				settings: []
			};
		},
		created(){
			this.settings = this.$router.options.routes[3].children;
		}
	};
</script>
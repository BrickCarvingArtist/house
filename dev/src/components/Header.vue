<style lang="stylus" scoped>
	header
		position relative
		height 2.25rem
		background-color white
		border-bottom 1px solid #ddd
		text-align center
		line-height @height
	.icon
		position absolute
		top 50%
		transform translateY(-50%) rotate(180deg)
		&.back
			left .5rem
	span
		font-size 1rem
		color #333
</style>
<template>
	<header>
		<svg v-if="hasBack" class="icon back" aria-hidden="true" @click="back">
			<use xlink:href="#icon-more"></use>
		</svg>
		<span>{{title}}</span>
		<slot></slot>
	</header>
</template>
<script>
	export default {
		props: ["hasBack", "title"],
		methods: {
			back(){
				this.$router.go(-1);
			}
		}
	};
</script>
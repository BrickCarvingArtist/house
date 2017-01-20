<style lang="stylus">
	*
		margin 0
		padding 0
		line-height 1
		font-family Microsoft Yahei, sans-serif, Arial
		box-sizing border-box
	ul
	ol
		list-style none
	a
		text-decoration none
		color inherit
	h1
	h2
	h3
	h4
	h5
	h6
	b
		font-weight normal
	em
	i
		font-style normal
	input
		outline none
	textarea
		resize none
	body
		background-color #eee
	.withFooter
		padding-bottom 3.125rem
	.icon
		width 1.2rem
		height 1.2rem
		fill currentColor
		overflow hidden
</style>
<template>
	<div>
		<router-view />
		<keep-alive>
			<component :is="footer" />
		</keep-alive>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				footer: 0
			};
		},
		beforeCreate(){
			document.documentElement.style.fontSize = `${innerWidth / 20}px`;
		}
	};
</script>
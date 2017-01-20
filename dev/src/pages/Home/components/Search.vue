<style lang="stylus" scoped>
	.searchBar
		position fixed
		top 0
		z-index 2
		width 100%
		padding .25rem
		background-color #333
	.area
		position absolute
		left .625rem
	b
	.more
		vertical-align middle
		line-height 1.75rem
	b
		color white
		font-size .8rem
	.more
		transform rotate(90deg)
		color white
	.text
		margin 0 auto
		width 11.25rem
		height 1.75rem
		background-color white
		border none
		border-radius 3px
		text-align center
		font-size .75rem
		vertical-align middle
		.icon
			width .8rem
			height .8rem
		.icon
		span
			vertical-align middle
			line-height @height
			color #bbb
</style>
<template>
	<div class="searchBar">
		<div class="area">
			<b>上海</b>
			<svg class="icon more" aria-hidden="true">
				<use xlink:href="#icon-more"></use>
			</svg>
		</div>
		<div class="text">
			<svg class="icon search" aria-hidden="true">
				<use xlink:href="#icon-search"></use>
			</svg>
			<span>挑好房，上房</span>
		</div>
	</div>
</template>
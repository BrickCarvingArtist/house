<style lang="stylus" scoped>
	$orange=#ff6932
	footer
		position fixed
		bottom 0
		z-index 1
		background-color white
		a
			float left
			width 4rem
			height 2.7rem
			overflow hidden
			border-top 1px solid #e5e5e5
			text-align center
			font-size .64rem
			color #bbb
			.icon
				display block
				margin .32rem auto .16rem
			&.router-link-active
				.icon
					color $orange
				span
					color $orange
			div
				margin-top .2875rem
				display inline-block
				width 2.375rem
				height 2.0625rem
				background-color $orange
				border-radius .1875rem
				.icon
					width 1.4125rem
					height @width
					color white
</style>
<template>
	<footer>
		<router-link v-for="(item,$index) of settings" :to="item.href">
			<svg v-if="$index!==2" class="icon" aria-hidden="true">
				<use :xlink:href="`#icon-${item.icon}`"></use>
			</svg>
			<span v-if="$index!==2">{{item.name}}</span>
			<div v-else>
				<svg class="icon" aria-hidden="true">
					<use :xlink:href="`#icon-${item.icon}`"></use>
				</svg>
			</div>
		</router-link>
	</footer>
</template>
<script>
	export default {
		data(){
			return {
				settings: [
					{
						name: "首页",
						icon: "all",
						href: "/home"
					},
					{
						name: "预约",
						icon: "phone",
						href: "/order"
					},
					{
						name: "",
						icon: "add",
						href: "/new"
					},
					{
						name: "信息",
						icon: "comments",
						href: "/info"
					},
					{
						name: "我",
						icon: "account",
						href: "/me"
					}
				]
			};
		}
	};
</script>
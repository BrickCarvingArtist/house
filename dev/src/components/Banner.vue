<style lang="stylus" scoped>
	$orange=#e63700
	$lightOrange=$orange + 50
	.banner
		position relative
		height 17.0625rem
		overflow hidden
		a
			position absolute
			top 0
			left 0
			transform translateX(100%)
			width 100%
			height @height
			background-size 100% 100%
			&.current
				animation rightToLeftIn .4s linear forwards
			&.previous
				animation rightToLeftOut .4s linear forwards
		div
			position absolute
			bottom .5625rem
			left 50%
			transform translate(-50%, -50%)
			text-align center
			z-index 1
			em
				position relative
				float left
				width .5rem
				height @width
				box-shadow inset 0 0 0 1px #b4b4b4
				border-radius 50%
				&:after
					content ""
					position absolute
					top 50%
					left 50%
					transform translate(-50%, -50%)
					width (@width / 2)
					height @width
					box-shadow @box-shadow
					border-radius 50%
				&.current
					box-shadow inset 0 0 0 1px $orange
					&:after
						box-shadow @box-shadow
	@keyframes rightToLeftIn
		to
			transform translateX(0)
	@keyframes rightToLeftOut
		from
			transform translateX(0)
		to
			transform translateX(-100%)
</style>
<template>
	<div class="banner">
		<router-link v-for="(item,$index) of data" :to="item.href" :class="{'current':index===$index,'previous':(index?index-1:lastIndex)===$index}" :style="`background-image:url(${item.url})`" />
		<div>
			<em v-for="(item,$index) of data" :class="{'current':index===$index}"></em>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["action"],
		data(){
			return {
				index: 0,
				data: []
			};
		},
		computed: {
			lastIndex(){
				return this.data.length - 1;
			},
			bannerData: {
				get(){
					return this.data;
				},
				set(value){
					this.data = value;
					const len = this.data.length;
					setInterval(() => {
						this.index = (this.index + 1) % len;
					}, 4000);
				}
			}
		},
		async created(){
			this.bannerData = (await (await fetch(this.action)).json()).data;
		}
	};
</script>
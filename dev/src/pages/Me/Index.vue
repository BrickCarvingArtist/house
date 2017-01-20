<style lang="stylus" scoped>
	.icon
		&.set
			right .5rem
	.section
		margin-top .625rem
	section
		display flex
		flex-direction column
		background-color white
		.top
			display flex
			padding .875rem .625rem
		.avator
			position relative
			margin-right .625rem
			width 3.5rem
			height @width
			background-color yellow
			border-radius 50%
			.assessedbadge
				position absolute
				right 0
				bottom 0
		.others
			display flex
			flex-direction column
			justify-content center
			width 13.5rem
			h1
				margin-bottom .25rem
				font-size 1rem
			span
				font-size .75rem
				vertical-align middle
				color #666
			.survey
				width .75rem
				height @width
				vertical-align middle
				color #666
		.more
			align-self center
			color #666
		.bottom
			display flex
			padding .375rem 0
			border-top 1px solid #ddd
			border-bottom 1px solid #ddd
			a
				flex 1
				text-align center
				line-height 1.5625rem
				&:first-of-type
					border-right @border-top
</style>
<template>
	<div>
		<my-header title="我">
			<svg class="icon set" aria-hidden="true">
				<use xlink:href="#icon-set"></use>
			</svg>
		</my-header>
		<section class="section">
			<router-link class="top" :to="`${$parent.user.id||'/sign_in'}`">
				<div class="avator" :style="`background-image:url(${$parent.user.url})`">
					<svg v-if="$parent.user.id" class="icon assessedbadge" aria-hidden="true">
						<use xlink:href="#icon-assessedbadge"></use>
					</svg>
				</div>
				<div class="others">
					<h1>{{$parent.user.name||"点击登录／注册"}}</h1>
					<p v-if="$parent.user.id">
						<span>修改资料</span>
						<svg class="icon survey" aria-hidden="true">
							<use xlink:href="#icon-survey"></use>
						</svg>
					</p>
				</div>
				<svg class="icon more" aria-hidden="true">
					<use xlink:href="#icon-more"></use>
				</svg>
			</router-link>
			<div class="bottom">
				<router-link to="#">
					<span>{{favorites}}</span>
					<em>收藏</em>
				</router-link>
				<router-link to="#">
					<span>{{scores}}</span>
					<em>积分</em>
				</router-link>
			</div>
		</section>
	</div>
</template>
<script>
	import MyHeader from "../../components/Header";
	import MyFooter from "../../components/Footer";
	export default {
		data(){
			return {
				favorites: 0,
				scores: 0
			};
		},
		components: {
			MyHeader
		},
		beforeCreate(){
			this.$parent.footer = MyFooter;
		}
	};
</script>
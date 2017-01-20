<style lang="stylus" scoped>
	$orange=#ff6932
	ul
		padding 0 .625rem
		li
			position relative
			margin-top .625rem
			height 6.875rem
			padding 0 .625rem
			background-color white
			border-radius 4px
			box-shadow 0 0 4px 1px #ddd
			h1
				height 2.375rem
				font-size 1rem
				line-height @height
			em
				position absolute
				top .5875rem
				right .75rem
				width 3rem
				height 1.25rem
				border-radius 4px
				text-align center
				font-size .75rem
				line-height @height
				color white
				&.green
					background-color #15b755
				&.blue
					background-color #0193e6
				&.grass
					background-color #97b715
				&.orange
					background-color $orange
			p
				display -webkit-box
				overflow hidden
				font-size .75rem
				line-height 1rem
				-webkit-box-orient vertical
				-webkit-line-clamp 2
			a
				position absolute
				bottom .625rem
				left 50%
				transform translateX(-50%)
				width 4.5rem
				height 1.3125rem
				background-color #eee
				border 1px solid #ddd
				border-radius 4px
				text-align center
				font-size .8rem
				line-height @height
				color #666
			span
				position absolute
				bottom 1rem
				right .75rem
				font-size .75rem
				color #bbb
</style>
<template>
	<ul>
		<li v-for="item of data">
			<h1>{{item.title}}</h1>
			<em :class="settings[item.type].class">{{settings[item.type].name}}</em>
			<p>{{item.description}}</p>
			<router-link :to="`/house/${item.id}`" v-text="'了解详情'" />
			<span>{{timeFormat(item.time)}}</span>
		</li>
	</ul>
</template>
<script>
	export default {
		data(){
			return {
				data: [],
				settings: [
					{
						name: "租户",
						class: "green"
					},
					{
						name: "经纪人",
						class: "blue"
					},
					{
						name: "招商",
						class: "grass"
					},
					{
						name: "代理商",
						class: "orange"
					}
				]
			};
		},
		methods: {
			timeFormat: (() => {
				const addZero = num => num < 10 ? `0${num}` : num;
				return timestamp => {
					const date = new Date(timestamp);
					return `${addZero(date.getMonth() + 1)}/${addZero(date.getDate())}/${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
				};
			})()
		},
		async beforeCreate(){
			this.data = (await (await fetch("/api/requirement/rough")).json()).data;
		}
	};
</script>
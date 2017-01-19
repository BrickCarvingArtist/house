<style lang="stylus" scoped>
	$orange=#ff6932
	.filter
		&.fixed
			position fixed
			top 0
			z-index 1
			height 100%
			padding-top 2.25rem
	ul
		position relative
		display flex
		padding .625rem 0 .5rem
		background-color white
	li
		display flex
		flex-direction column
		justify-content center
		align-items center
		.icon
			transition transform .5s
		&:not(:last-of-type)
			position relative
			flex 1
			width 4.375rem
			font-size .75rem
			color #333
			&:after
				position absolute
				right 0
				content ""
				width 1px
				height 1rem
				background-color #ddd
			.icon
				margin-top .05rem
				width .6rem
				height @width
				transform rotate(90deg)
			&.current
				.icon
					transform rotate(-90deg)
		&:last-of-type
			width 2.625rem
			.icon
				width 1rem
				height 1rem
			&.current
				.icon
					transform rotate(-180deg)
		&.current
			span
				color $orange
			.icon
				color $orange
	.shadow
		position absolute
		top 0
		left 0
		width 100%
		height 100%
		background-color rgba(0, 0, 0, .4)
	.details
		position relative
		width 100%
		height 22.4375rem
		max-height 22.4375rem
		background-color white
</style>
<template>
	<div :class="{filter:1,fixed:status}">
		<div class="shadow" v-show="status" @click="back"></div>
		<ul>
			<li v-for="(item,$index) of settings" @click="filter($index)">
				<span>{{item.name}}</span>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-more"></use>
				</svg>
			</li>
			<li @click="sort">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-trade"></use>
				</svg>
			</li>
		</ul>
		<div class="details" v-show="status"></div>
	</div>
</template>
<script>
	import {sortBy} from "lodash";
	export default {
		data(){
			return {
				status: 0,
				settings: [
					{
						name: "区域"
					},
					{
						name: "面积"
					},
					{
						name: "单价"
					},
					{
						name: "更多"
					}
				]
			};
		},
		methods: {
			back(){
				this.status = 0;
			},
			toast(options){
				const modal = this.$parent.$refs.modal;
				Object.assign(modal, options);
			},
			filter(index){
				this.status = 1;
				this.$el.querySelector("ul").childNodes[index].classList.toggle("current");
			},
			sort(e){
				const {classList} = this.$el.querySelector("ul").lastElementChild;
				if(classList.contains("current")){
					this.toast({
						message: "价格由高到低",
						duration: 1500
					});
					this.$parent.data = this.$parent.data.reverse();
					classList.remove("current");
				}else{
					this.toast({
						message: "价格由低到高",
						duration: 1500
					});
					this.$parent.data = sortBy(this.$parent.data, ["price"]);
					classList.add("current");
				}
			}
		}
	};
</script>
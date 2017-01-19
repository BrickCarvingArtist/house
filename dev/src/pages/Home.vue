<style lang="stylus" scoped>
	.home
		padding-bottom 3.125rem
</style>
<template>
	<div class="home">
		<banner action="/api/get_banner/home" />
		<search />
		<list :data="data" />
	</div>
</template>
<script>
	import Banner from "../components/Banner";
	import Search from "../components/Search";
	import List from "../components/List";
	export default {
		data(){
			return {
				data: []
			};
		},
		components: {
			Banner,
			Search,
			List
		},
		async beforeCreate(){
			this.data = (await (await fetch("/api/house/get")).json()).data;
		}
	}
</script>
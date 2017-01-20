<style lang="stylus" scoped>
	div
		padding-bottom 3.125rem
</style>
<template>
	<div>
		<my-header />
		<router-view />
	</div>
</template>
<script>
	import MyHeader from "./components/Header";
	export default {
		components: {
			MyHeader
		}
	};
</script>
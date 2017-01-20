<template>
	<div class="withFooter">
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
<template>
	<banner action="/api/get_banner/me" />
</template>
<script>
	import Banner from "../components/Banner";
	export default {
		components: {
			Banner
		}
	};
</script>
<template>
	<p>预约</p>
</template>
<script>
	import MyFooter from "../../components/Footer";
	export default {
		beforeCreate(){
			this.$parent.footer = MyFooter;
		}
	}
</script>
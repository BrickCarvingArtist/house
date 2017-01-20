<template>
	<div class="withFooter">
		<my-header />
		<router-view />
	</div>
</template>
<script>
	import MyHeader from "./components/Header";
	import MyFooter from "../../components/Footer";
	export default {
		components: {
			MyHeader
		},
		beforeCreate(){
			this.$parent.footer = MyFooter;
		}
	};
</script>
<template>
	<div class="withFooter">
		<banner action="/api/get_banner/home" />
		<search ref="search" />
		<my-filter />
		<modal ref="modal" />
		<list :data="data" />
	</div>
</template>
<script>
	import Banner from "../../components/Banner";
	import Search from "./components/Search";
	import MyFilter from "./components/Filter";
	import Modal from "../../components/Modal";
	import List from "../../components/List";
	export default {
		data(){
			return {
				data: []
			};
		},
		components: {
			Banner,
			Search,
			MyFilter,
			Modal,
			List
		},
		async beforeCreate(){
			this.data = (await (await fetch("/api/house/get")).json()).data;
		}
	}
</script>
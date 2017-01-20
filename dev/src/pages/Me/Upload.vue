<template>
	<div>
		<input type="file" ref="file" />
		<a @click="upload">上传</a>
	</div>
</template>
<script>
	export default {
		methods: {
			async upload(){
				const body = new FormData;
				body.append("test", this.$refs.file.files[0]);
				console.log(await (await fetch("/api/upload", {
					method: "POST",
					body
				})).json());
			}
		}
	};
</script>
<template>
	<div class="d-flex flex-column">
		<NavBar />
		<router-view></router-view>
	</div>
</template>

<script lang='ts'>
	import { defineComponent } from 'vue';
	import NavBar from '@/components/navigation/navigation-bar.vue';

	export default defineComponent({
		name: 'App',
		components: {
			NavBar,
		},
	});
</script>

<style lang='scss'>
	@import '@/scss/custom.scss';

	#app {
		font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
		height: 100dvh;
		width: 100dvw;
		color: #2c3e50;
	}
</style>

<template>
	<div id="scheduling-page">
		<Sites />
	</div>
</template>

<script lang="ts">
	import Sites from '@/components/scheduling/site/sites.vue';
	import { defineComponent } from 'vue';
	import store from '@/store';

	export default defineComponent({
		name: 'scheduling',
		components: {
			Sites
		},
		created() {
			console.log('created');
			store.dispatch('fetchAllSites');
			console.log('returned')
		},
		methods: {
			
		}
	});
</script>

<style lang="scss">
	#scheduling-page {
		width: 100dvw;
		display: flex;
		justify-content: center;
	}
</style>
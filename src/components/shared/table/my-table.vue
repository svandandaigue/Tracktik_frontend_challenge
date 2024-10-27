<template>
	<div class="table-container custom-scrollbar">
		<template v-for="item in tableData" :key="'table-data_' + item.id">
			<slot :item="item"></slot>
		</template>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'table',
		props: {
			tableData: {
				type: Array,
				required: true
			}
		},
		data() {
			return {

			}
		},
		mounted() {
			console.log('base url')
			console.log(process.env.BASE_URL);
		},
		computed: {
			
		},
		methods: {

		}
	});
</script> 

<style lang="scss">
	.table-container {
		max-width:700px;
		width:700px;
		height: 600px;
	}
</style>
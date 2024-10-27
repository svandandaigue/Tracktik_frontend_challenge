<template>
	<table class="table table-striped table-hover">
		<thead>
			<tr>
				<th scope="col" v-for="(item, index) in headers" :key="'header' + index">
					{{ item }}
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(row, index) in data" :key="'table-row_' + row.id">
				{{ row }}
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'table',
		props: {
			data: {
				type: Array,
				required: true,
				default: []
			}
		},
		data() {
			return {
				
			}
		},
		computed: {
			headers(): void {
				//return Object.keys(this.data);
			}
		},
		methods: {

		}
	});
</script> 
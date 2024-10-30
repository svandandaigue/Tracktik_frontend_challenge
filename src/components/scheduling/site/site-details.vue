<template>
	<div class="d-flex flex-column">
		<SiteRow :show-left-arrow="false" :show-right-arrow="true"/>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import SiteRow from '@/components/scheduling/site/site-row.vue';

	export default defineComponent({
		name: 'siteDetails',
		components: {
			SiteRow
		},
		data() {
			return {

			}
		}
	});
</script> 
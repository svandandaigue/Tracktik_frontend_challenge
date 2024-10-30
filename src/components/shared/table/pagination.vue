<template>
	<div class="pagination d-flex flex-row align-items-center border">
		<VueAwesomePaginate :total-items="maxItemCount"
							:items-per-page="pageSize"
							:max-pages-shown="6"
							:hidePrevNextWhenEnds="true"
							:hidePrevNext="true"
							:showBreakpointButtons="false"
							:showJumpButtons="true"
							:showEndingButtons="true"
							:disableBreakpointButtons="false"
							v-model="currentPageNumber"
							@click="onPageClick" />
		<Dropdown id="page-count-dropdown" 
				  class="ml-auto"
				  prefix="Page size:" 
				  :options="pageSizes" 
				  :selected-object="selectedSizeObject" 
				  @select-option="changePageSize" />
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import DropdownOption from '@/types/DropdownOption';
	import Dropdown from '@/components/shared/dropdown.vue';
	import { TRANSMIT_PAGE_SIZES } from '@/services/commonConstants';
	import VueAwesomePaginate from 'vue-awesome-paginate';
	import "vue-awesome-paginate/dist/style.css";


	export default defineComponent({
		name: 'pagination',
		components: {
			Dropdown
		},
		props: {
			currentPage: {
				type: Number,
				required: true
			},
			maxItemCount: {
				type: Number,
				required: true
			},
			pageSize: {
				type: Number,
				default: 10
			}
		},
		data() {
			return {
				selectedSizeObject: { value: this.pageSize, text: this.pageSize.toString() } as DropdownOption
			}
		},
		computed: {
			pageSizes(): Array<DropdownOption> {
				return TRANSMIT_PAGE_SIZES.filter((count: number) => count <= this.maxItemCount)
					.map((count: number): DropdownOption => { return { value: count, text: count.toString() } });
			},
			currentPageNumber: {
				get(): number {
					return this.currentPage;
				},
				set(value: number) {
					this.$emit('set-current-page', value);
				}
			}
		},
		methods: {
			changePageSize(sizeObject: DropdownOption) {
				this.selectedSizeObject = sizeObject;
				this.$emit('set-page-size', this.selectedSizeObject.value);
			},
			onPageClick(page: number) {
				console.log('page #' + page + ' has been clicked');
				//this.$emit('set-current-page', page);
			}
		}
	});
</script>

<style lang="scss">
	.pagination {
		padding: 6px;

		#componentContainer {
			margin-bottom: 0;
		}
	}
	.pagination-container {
		display: flex;
		column-gap: 10px;
		
	}

	.paginate-buttons {
		height: 36px;
		width: 36px;
		border-radius: 4px;
		cursor: pointer;
		background-color: #fafafa;
		border: 1px solid #e8e8e8;
		color: black;

		&:hover {
			background-color: #ededed;
			border-color: #3498db;
			color: #0038E5;
		}
	}

	.first-page-button, .last-page-button {
		width: 70px;
	}

	.active-page {
		background-color: #3498db;
		border: 1px solid #3498db;
		color: white;

		&:hover {
			background-color: #3498db;
			border: 1px solid #3498db;
			color: white;
		}
	}
</style>
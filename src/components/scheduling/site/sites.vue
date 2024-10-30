<template>
	<div class="d-flex flex-column justify-content-center">
		<div class="ml-15 mb-2">
			<Dropdown id="data-selection-dropdown"
					  :options="dataTypes"
					  :selected-object="selectedData"
					  width="225px"
					  @select-option="selectDataType"/>
			<Pagination :current-page="getCurrentPage"
						:max-item-count="getCurrentRoundDataSize"
						:page-size="getPageSize"
						@set-page-size="setPageSize"
						@set-current-page="setCurrentPage"/>
		</div>
		<Table :table-data="getSites" v-slot="slotProps">
			<SiteRow :site="slotProps.item" />
		</Table>

	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import Table from '@/components/shared/table/my-table.vue';
	import SiteRow from '@/components/scheduling/site/site-row.vue';
	import Dropdown from '@/components/shared/dropdown.vue';
	import Pagination from '@/components/shared/table/pagination.vue';
	import Site from '@/types/Site';
	import { SCHEDULING_DATA_TYPES } from '@/services/commonConstants';
	import DropdownOption from '@/types/DropdownOption';
	import { mapGetters, mapActions } from 'vuex';
	import _ from 'lodash';

	export default defineComponent({
		name: 'SiteList',
		components: {
			Table,
			SiteRow,
			Dropdown,
			Pagination
		},
		data() {
			return {
			}
		},
		computed: {
			...mapGetters(['getSites', 'getCurrentPage', 'getTotalPages', 'getCurrentDataType', 'getCurrentRoundDataSize', 'getPageSize']),
			selectedData(): DropdownOption | null {
				return this.dataTypes.find((dataType: DropdownOption) => dataType.text === this.getCurrentDataType) || null;
			},
			dataTypes(): Array<DropdownOption> {
				return Object.values(SCHEDULING_DATA_TYPES).map((type: string, index: number): DropdownOption => {
					return { value: index, text: type };
				});
			},
			tempData() {
				var temp = [];
				for (let i = 0; i < 10; i++) {
					temp.push(
						{
							id: "VrbiKslAwy",
							clientId: "Ymc6c8H_ARB4K",
							title: "Industrial Tower",
							createdAt: "Sat Apr 01 2023 14:34:07 GMT+0000 (Coordinated Universal Time)",
							updatedAt: "Thu Jan 11 2024 23:47:36 GMT+0000 (Coordinated Universal Time)",
							contacts: {
								main: {
									id: "0XC9QXT7BL",
									firstName: "Devin",
									lastName: "DuBuque",
									email: "Brielle.Schmidt38@yahoo.com",
									phoneNumber: "1-027-406-4772",
									jobTitle: "Corporate Quality Officer",
									address: {
										zipCode: "55566-9316",
										city: "West Bart",
										street: "209 Nikolaus Locks",
										country: "Saint Kitts and Nevis",
										state: "Rhode Island"
									}
								}
							},
							address: {
								zipCode: "96486",
								city: "West Josianeborough",
								street: "52782 Teagan Burgs",
								country: "Gambia",
								state: "Wyoming"
							},
							images: [
								"https://picsum.photos/seed/ZuAJzFoatF/640/480",
								"https://picsum.photos/seed/BMAYKWypoY/640/480",
								"https://picsum.photos/seed/TDmyX4mUTq/640/480"
							]
						}
					);
				}
				return temp;
			}
		},
		methods: {
			...mapActions(['setCurrentPage', 'setPageSize', 'setCurrentDataType']),
			selectDataType(typeObject: DropdownOption) {
				//this.selectedData = typeObject;
				this.setCurrentDataType(typeObject.text);
			}
		},
		created() {
			// data fetch
		}
	});

</script>

<style lang="scss">
	.ml-15 {
		margin-left: 15px;
	}
</style>
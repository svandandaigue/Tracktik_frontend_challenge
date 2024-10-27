<template>
	<div class="d-flex flex-column justify-content-center">
		<div class="align-self-center">Sites</div>
		<Table :table-data="getSites" v-slot="slotProps">
			<SiteRow :site="slotProps.item" />
		</Table>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import Table from '@/components/shared/table/my-table.vue';
	import SiteRow from '@/components/scheduling/site/site-row.vue';
	import Site from '@/types/Site';
	import { mapGetters } from 'vuex';
	import _ from 'lodash';

	export default defineComponent({
		name: 'SiteList',
		components: {
			Table,
			SiteRow
		},
		data() {
			return {
				sites: [
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
					},
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
					},
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
					},
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
					},
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
					},
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
				]
			}
		},
		computed: {
			...mapGetters(['getSites']),
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
		created() {
			// data fetch
		}
	});

</script>

<style lang="scss">

</style>
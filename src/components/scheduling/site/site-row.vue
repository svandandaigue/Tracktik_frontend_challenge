<template>
	<div class="site-row d-flex flex-row align-items-center border">
		<img class="site-row_avatar" :src="site.images[0]" alt="avatar site image"/>
		<div class="d-flex flex-column">
			<div class="site-row_title">{{ site.title }}</div>
			<div class="site-row_address">
				<div>{{ siteAddress[0] }}</div>
				<div>{{ siteAddress[1] }}</div>
				<div>{{ siteAddress[2] }}</div>
			</div>
			<div class="site-row_contact">{{ siteContactName }}</div>
		</div>
		<div class="ml-auto d-flex align-items-center justify-content-center">
			<i class="fa-solid fa-chevron-right"></i>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, } from 'vue';
	import type { PropType } from 'vue';
	import Site from '@/types/Site';

	export default defineComponent({
		name: 'site-row',
		props: {
			site: {
				type: Object as PropType<Site>,
				required: true
			}
		},
		computed: {
			siteAddress(): Array<string> {
				const address = this.site.address;
				return [
					address.street,
					address.city + ', ' + address.state + ' ' + address.zipCode,
					address.country
				];
			},
			siteContactName(): string {
				const mainContact = this.site.contacts.main;
				return mainContact.firstName + ' ' + mainContact.lastName;
			},
			isMobile(): string {
				// TODO: display on same line
				return '';
			}
		}
	})
</script>

<style lang="scss">
	@import '@/scss/custom.scss';

	.site-row {
		min-height: 60px;
		padding: 6px 12px;
		background: white;
		margin-left: 15px;
		margin-right: 6px;
		&:not(:last-child) {
			border-bottom: none !important;
		}

		&:hover {
			@include shadow-light();
		}

		&_avatar {
			height: 36px;
			width: 36px;
			border-radius: 50%;
			margin-right: 12px;
		}
		&_title {
			@include headline-4();
		}
		&_address {
			@include body-small();
		}
		&_contact {
			@include body-small();
			font-weight: bold;
		}
	}
</style>
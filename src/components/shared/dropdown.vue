<template>
	<div class="dropdown custom-dropdown">
		<button :id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
				type="button" :class="['btn dropdown-toggle', btnVariant]" :style="{ 'width': width }">
			<span v-if="prefix" class="mr-1">{{ prefix }}</span>{{ selection }}
		</button>
		<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" :style="{ 'width': width }">
			<div v-for="(item, index) in options" :key="'dropdown-item_' + index"
				 :class="['dropdown-item']"
				 @click="optionSelected(item)">
				{{ item.text }}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import DropdownOption from '@/types/DropdownOption';
	

	export default defineComponent({
		name: 'dropdown',
		props: {
			dropdownId: {
				type: String,
				default: ''
			},
			options: {
				type: Array as PropType<Array<DropdownOption>>,
				required: true
			},
			selectedObject: {
				type: Object as PropType<DropdownOption>
			},
			btnVariant: {
				type: String,
				default: 'btn-primary'
			},
			width: {
				type: String,
				default: '100%'
			},
			placeholder: {
				type: String,
				default: 'Select an option'
			},
			prefix: {
				type: String
			}
		},
		data() {
			return {

			}
		},
		computed: {
			selection(): string {
				return this.selectedObject?.text || this.placeholder;
			}
		},
		methods: {
			optionSelected(item: DropdownOption) {
				this.$emit('select-option', item);
			}
		}
	});
</script>

<style lang="scss">
	.custom-dropdown.dropdown {
		.btn-primary {
			background: #0062cc;
			border: none;

			&:hover, &:active {
				background: #005cbf;
			}
		}

		.dropdown-toggle::after {
			margin-left: 12px;
		}

		.dropdown-menu {
			padding: 6px 12px;
			min-width: unset;

			.dropdown-item {
				border-radius: 6px;
				cursor: pointer;

				&:hover {
					background-color: #ededed;
				}
			}
		}
	}
</style>
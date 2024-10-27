import { Store } from '@/store';
import State from '@/types/State';

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: Store<State>;
	}
}
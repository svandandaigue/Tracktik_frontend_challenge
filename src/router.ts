import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router';

import SchedulingView from '@/components/scheduling/scheduling.vue';
// TODO: Create About.vue

import ClientList from '@/components/scheduling/client/client-list.vue';
import ClientDetails from '@/components/scheduling/client/client-details.vue';
import Sites from '@/components/scheduling/site/sites.vue';
import SiteDetails from '@/components/scheduling/site/site-details.vue';

const routes: Array<RouteRecordRaw> = [
	{ path: '/', redirect: '/scheduling/sites' },
	{
		path: '/scheduling',
		component: SchedulingView,
		children: [
			{ path: 'clients', component: ClientList },
			{ path: 'clients/:id', component: ClientDetails },
			{ path: 'sites', component: Sites },
			{ path: 'sites/:id', component: SiteDetails }
		]
	}
]

export default createRouter({
	history: createMemoryHistory(),
	routes
});
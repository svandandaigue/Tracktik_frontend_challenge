import { createMemoryHistory, createRouter } from 'vue-router';

import SchedulingView from '@/components/scheduling/scheduling.vue';
// TODO: Create About.vue

import ClientList from '@/components/scheduling/client/client-list.vue';
import ClientDetails from '@/components/scheduling/client/client-details.vue';
import SiteList from '@/components/scheduling/site/site-list.vue';
import SiteDetails from '@/components/scheduling/site/site-details.vue';

const routes = [
	{ path: '/', redirect: '/scheduling' },
	{
		path: '/scheduling',
		component: SchedulingView,
		children: [
			{ path: 'client', component: ClientList },
			{ path: 'clients/:id', component: ClientDetails },
			{ path: 'sites', component: SiteList },
			{ path: 'sites/:id', component: SiteDetails }
		]
	}
]

export default createRouter({
	history: createMemoryHistory(),
	routes
})
import Site from '@/types/Site';
import Client from '@/types/Client';
import { State } from '@/types/State';
import { createStore } from 'vuex';
import SiteDataService from '@/services/SiteDataService';


/*const ENDPOINTS = {
	GetClients: 'clients',
	GetClientById: 'clients/{id}',
	GetSites: 'sites',
	GetSiteById: 'sites/{id}'
}*/
const mainModule = {
	namespace: true,
	state: () => ({
		clients: [] as Client[],
		sites: [] as Site[]
	}),
	getters: {
		getClients: (state: State) => state.clients,
		getSites: (state: State) => state.sites,
	},
	mutations: {
		SET_SITES(state: State, payload: Array<Site>) {
			// to make them reactive
			const siteList: Array<Site> = [];
			payload.forEach((item: Site) => {
				siteList.push(item);
			});
			state.sites = siteList;
		}
	},
	actions: {
		async fetchAllSites(context: any): Promise<boolean> {
			await SiteDataService.getAll()
				.then((response: any) => {
					console.log(response);
					if (response.data) {
						context.commit('SET_SITES', response.data)
						return true;
					}
					return false;
				}).catch((e: Error) => {
					console.error(e);
					return false;
				}).finally(() => {
					return true;
				});
			return true;
		}
	}
}

export default createStore({
	modules: {
		main: mainModule
	},
});

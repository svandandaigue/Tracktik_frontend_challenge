import { Contact } from '@/types/contact';

export interface Site {
	id: string;
	clientId: string;
	title: string;
	createdAt: Date;
	updatedAt: Date;
	contacts: { main: Contact}
}
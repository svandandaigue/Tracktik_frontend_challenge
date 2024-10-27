import Contact from '@/types/Contact';
import Address from '@/types/Address';

export default interface Site {
	id: string;
	clientId: string;
	title: string;
	createdAt: Date;
	updatedAt: Date;
	address: Address;
	contacts: { main: Contact },
	images: string[],
	tags: string[]
}
export default interface Address {
	zipCode: number; // assume it's a number based on the sample data provided - would look at db in real scenario
	city: string;
	street: string;
	country: string;
	state: string;
}
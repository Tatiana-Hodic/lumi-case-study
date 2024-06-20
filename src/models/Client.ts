import { PaymentMethod } from "./Common";

export type Client = {
    id: string;
    name: string;
    discount: string;
    paymentMethodPreference: PaymentMethod;
    locationPreference: Location;
    generateInvoices: boolean;
};
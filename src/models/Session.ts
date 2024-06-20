import { PaymentFinalization, PaymentMethod } from "./Common";

export type Session = {
    id: string;
    clientId: string;
    productId: string;
    name: string;
    date: Date;
  
    // Defaults from the Product
    durationMinutes: number;
    price: string;
    paymentFinalization?: PaymentFinalization;
  
    // Defaults from the Client
    discount: string; // flat value in EUR
    paymentMethod?: PaymentMethod;
    location: Location;
    generateInvoice: boolean;
};
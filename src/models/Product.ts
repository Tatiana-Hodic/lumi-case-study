import { PaymentFinalization } from "./Common";

export type Product = {
    id: string
    name: string
    durationMinutes: number;
    price: string;
    paymentFinalization: PaymentFinalization;
};
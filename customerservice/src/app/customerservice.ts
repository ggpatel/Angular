export interface CustomerService {
    id: number;
    name: string;
    price: number;
    pay: string;
}

export const CustomerServices = [
    {
        id: 1,
        name: "softtoy",
        price: 50,
        pay: "cash"
    },
    {
        id: 2,
        name: "babytrucks",
        price: 100,
        pay: "creditcard"
    },

    {
        id: 3,
        name: "toyrobote",
        price: 150,
        pay: "giftcard"
    },

];


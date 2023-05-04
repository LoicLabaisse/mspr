export interface Order {
    id: string;
    customerId: string;
    createdAt: string;
    product: {
        id: string;
        name: string;
        stock: number;
        details: {
            price: string;
            description: string;
            color: string;
        };
        createdAt: string;
    };
}
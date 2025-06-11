export interface CartProductType {
    id: number;
    productId: number;
    product: number;
    cartId: number;
    amount: number;
};

export interface CartType {
    id: number;
    cartProduct: CartProductType[];
};
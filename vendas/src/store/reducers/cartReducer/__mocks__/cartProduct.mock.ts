import { CartProductType } from "../../../../shared/types/cartType";
import { mockProduct } from "../../productReducer/__mocks__/product.mock";

export const mockCartProduct: CartProductType = {
    amount: 43,
    cartId: 32,
    id: 232,
    productId: mockProduct.id,
    product: mockProduct,
};
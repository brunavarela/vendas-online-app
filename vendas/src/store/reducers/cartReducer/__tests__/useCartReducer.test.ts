import { act, renderHook } from "@testing-library/react-native"
import { useCartReducer } from "../useCartReducer"
import { mockCart } from "../__mocks__/cart.mock";
import { setCartAction } from "..";

const mockDispatch = jest.fn();

jest.mock('..', () => ({
    setCartAction: () => null,
}));

jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
}));

jest.mock('../../../hooks', () => ({
    useAppSelector: () => ({
        cart: mockCart,
    }),
}));

describe('Cart Reducer', () => {
    it('should return cart', () => {
        const { result } = renderHook(() => useCartReducer());
        expect(result.current.cart).toEqual(mockCart);
    });

    it('should run setCart', () => {
        const { result } = renderHook(() => useCartReducer());
        act(() => {
            result.current.setCart(mockCart)
        });

        expect(mockDispatch).toHaveBeenCalled();
    });
})
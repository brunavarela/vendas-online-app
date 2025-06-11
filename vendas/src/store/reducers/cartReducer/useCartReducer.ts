import { useDispatch } from "react-redux";
import { setCartAction } from ".";
import { CartType } from "../../../shared/types/cartType";
import { useAppSelector } from "../../hooks";

export const useCartReducer = () => {
    const { cart } = useAppSelector((state) => state.cartReducer);
    const dispatch = useDispatch(); 

    const setCart = (currentCart: CartType) => {
        dispatch(setCartAction(currentCart));
    };

    return {
        cart,
        setCart,
    };
}
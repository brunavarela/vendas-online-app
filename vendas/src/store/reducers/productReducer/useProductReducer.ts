import { useDispatch } from "react-redux";
import { ProductType } from "../../../shared/types/productType";
import { useAppSelector } from "../../hooks"
import { setProductsAction, setSearchProductsAction } from ".";
import { PaginationType } from "../../../shared/types/paginationType";

export const useProductReducer = () => {
    const dispatch = useDispatch();
    const { products, searchProducts } = useAppSelector((state) => state.productReducer);

    const setProducts = (currentProducts: ProductType[]) => {
        dispatch(setProductsAction(currentProducts));
    };

    const setSearchProducts = (currentProducts: PaginationType<ProductType[]>) => {
        dispatch(setSearchProductsAction(currentProducts));
    };

    return {
        products,
        setProducts,
        searchProducts,
        setSearchProducts,
    };
}
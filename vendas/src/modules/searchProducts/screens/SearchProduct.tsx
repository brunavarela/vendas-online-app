import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useRoute } from "@react-navigation/native";
import Text from "../../../shared/components/text/Text"
import { useEffect } from "react";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_PRODUCT_PAGE } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enum";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { PaginationType } from "../../../shared/types/paginationType";
import { ProductType } from "../../../shared/types/productType";

export type SearchProductNavigationProp = NativeStackNavigationProp<
    Record<string, SearchProductParams>
>;

export interface SearchProductParams {
    search?: string;
}

const SearchProduct = () => {
    const { searchProducts, setSearchProducts } = useProductReducer();
    const { params } = useRoute<RouteProp<Record<string, SearchProductParams>>>();
    const { search } = params;
    const { request } = useRequest();

    useEffect(() => {
        request<PaginationType<ProductType[]>>({
            url: `${URL_PRODUCT_PAGE}?search=${search}`,
            method: MethodEnum.GET,
            saveGlobal: setSearchProducts,
        });
    }, [search]);
    
    return (
        <>
            {searchProducts && <Text>Tem produto</Text>}
            <Text>Qualquer coisa</Text>
        </>
    )
};

export default SearchProduct;
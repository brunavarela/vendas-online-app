import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useRoute } from "@react-navigation/native";
import Text from "../../../shared/components/text/Text"
import { useEffect, useState } from "react";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_PRODUCT_PAGE } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enum";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { PaginationType } from "../../../shared/types/paginationType";
import { ProductType } from "../../../shared/types/productType";
import Input from "../../../shared/components/input/Input";
import { NativeSyntheticEvent, ScrollView, TextInputChangeEventData } from "react-native";
import ProductThumbnail from "../../../shared/components/productThumbnail/ProductThumbnail";

export type SearchProductNavigationProp = NativeStackNavigationProp<
    Record<string, SearchProductParams>
>;

export interface SearchProductParams {
    search?: string;
}

const SearchProduct = () => {
    const { searchProducts, setSearchProducts } = useProductReducer();
    const { params } = useRoute<RouteProp<Record<string, SearchProductParams>>>();
    const { request } = useRequest();
    const [value, setValue] = useState(params?.search || '');

    useEffect(() => {
        setValue(params?.search || '');
    }, [params]);

    useEffect(() => {
        if(value) {
            request<PaginationType<ProductType[]>>({
                url: `${URL_PRODUCT_PAGE}?search=${value}`,
                method: MethodEnum.GET,
                saveGlobal: setSearchProducts,
            });
        }
    }, [params]);
    
    const handleOnChangeInput = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setValue(event.nativeEvent.text);
    };

    return (
        <>
            <Input 
                onChange={handleOnChangeInput} 
                value={value} 
                iconRight="search" 
            />
            {searchProducts && searchProducts.data && (
                <ScrollView>
                    {searchProducts.data.map((product) => (
                        <ProductThumbnail product={product} />
                    ))}
                </ScrollView>
            )}
            <Text>Qualquer coisa</Text>
        </>
    );
};

export default SearchProduct;
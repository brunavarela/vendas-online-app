import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_PRODUCT_PAGE } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enum";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { PaginationType } from "../../../shared/types/paginationType";
import { ProductType } from "../../../shared/types/productType";
import Input from "../../../shared/components/input/Input";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, TextInputChangeEventData } from "react-native";
import ProductThumbnail from "../../../shared/components/productThumbnail/ProductThumbnail";
import { ActivityIndicatorButton } from "../../../shared/components/button/button.style";
import { theme } from "../../../shared/themes/theme";
import { SearchProductContainer, SearchProductScrollView } from "../styles/searchProduct.style";

export type SearchProductNavigationProp = NativeStackNavigationProp<
    Record<string, SearchProductParams>
>;

export interface SearchProductParams {
    search?: string;
}

const SearchProduct = () => {
    const { searchProducts, setSearchProducts, insertSearchProducts } = useProductReducer();
    const { params } = useRoute<RouteProp<Record<string, SearchProductParams>>>();
    const { request, loading } = useRequest();
    const [value, setValue] = useState(params?.search || '');

    useEffect(() => {
        setValue(params?.search || '');
    }, [params]);

    useEffect(() => {
        setSearchProducts(undefined);
        request<PaginationType<ProductType[]>>({
            url: `${URL_PRODUCT_PAGE}?search=${value}`,
            method: MethodEnum.GET,
            saveGlobal: setSearchProducts,
        });
    }, [value]);
    
    const findNewPage = () => {
        if(searchProducts && searchProducts.meta.currentPage < searchProducts.meta.totalPages) {
            request<PaginationType<ProductType[]>>({
                url: `${URL_PRODUCT_PAGE}?search=${value}$page${searchProducts?.meta.currentPage + 1}`,
                method: MethodEnum.GET,
                saveGlobal: insertSearchProducts,
            });
        };
    }

    const handleOnChangeInput = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setValue(event.nativeEvent.text);
    };

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isEndScroll = contentOffset.y >= contentSize.height - layoutMeasurement.height;
        
        if (isEndScroll && !loading) {
            findNewPage()
        }
    };

    return (
       <SearchProductContainer>
            <Input 
                onChange={handleOnChangeInput} 
                value={value} 
                iconRight="search" 
            />
            {searchProducts && searchProducts.data && (
                <ScrollView onScroll={handleScroll}>
                    <SearchProductScrollView>
                        {searchProducts.data.map((product) => (
                            <ProductThumbnail key={product.id} margin="4px 0px" product={product} />
                        ))}
                    </SearchProductScrollView>
                </ScrollView>
            )}
            {loading && <ActivityIndicatorButton color={theme.colors.mainTheme.primary} />}
        </SearchProductContainer>
    );
};

export default SearchProduct;
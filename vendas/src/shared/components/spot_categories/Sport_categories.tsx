import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { ProductType } from "../../types/productType";
import ProductThumbnail from "../productThumbnail/ProductThumbnail";
import { useRequest } from "../../hooks/useRequest";
import { MethodEnum } from "../../../enums/methods.enum";
import { URL_CATEGORY, URL_PRODUCT } from "../../constants/urls";
import Text from "../text/Text";
import { buttonTestId } from "../button/__mocks__/button.testid";
import { textTypes } from "../text/textTypes";
import { ReturnCategory } from "./categoryTypes";

interface CategoriesProps {
  title: string;
  categoryId: string;
}

const Spot_categories = ( { title, categoryId }: CategoriesProps)  => {
    const { request } = useRequest();
    const [categoryProducts, setCategoryProducts] = useState<ProductType[]>([]);
    
    useEffect(() => {
    request<ReturnCategory>({
        url: `${URL_CATEGORY}/${categoryId}`,
        method: MethodEnum.GET,
        saveGlobal: (res) => {
        setCategoryProducts(res.products); // 👈 pega os produtos dentro da resposta
        },
    });
    }, [categoryId]);

    return (
        <View>
            <Text 
                testID={buttonTestId.BUTTON_TITLE} 
                type={textTypes.BUTTON_SEMIBOLD} 
                >
                {title}
            </Text>
            <FlatList
                horizontal
                data={categoryProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductThumbnail product={item} margin="0px 8px" />
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
};

export default Spot_categories; 
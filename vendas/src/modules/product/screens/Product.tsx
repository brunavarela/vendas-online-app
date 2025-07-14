import { RouteProp, useRoute } from "@react-navigation/native";
import Text from "../../../shared/components/text/Text";
import { ProductType } from "../../../shared/types/productType";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ProductNavigationProp = NativeStackNavigationProp<Record<string, ProductParams>>;

export interface ProductParams {
    product: ProductType;
}

export const Product = () => {
    const { params } = useRoute<RouteProp<Record<string,ProductParams>>>();
    const { product } = params;

    return (
        <Text>{product.name}</Text>
    );
}

export default Product;
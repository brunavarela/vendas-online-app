import { useNavigation } from "@react-navigation/native";
import { convertNumberToMoney } from "../../functions/money";
import { theme } from "../../themes/theme";
import { ProductType } from "../../types/productType";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { ProductImage, ProductInsertCart, ProductThumbnailContainer } from "./productThumbnail.style";
import { ProductNavigationProp } from "../../../modules/product/screens/Product";
import { MenuUrl } from "../../enums/MenuUrl.enum";
import { Icon } from "../icon/Icon";
import { useRequest } from "../../hooks/useRequest";
import { MethodEnum } from "../../../enums/methods.enum";
import { URL_CART } from "../../constants/urls";
import { ActivityIndicator } from "react-native";
import { CartRequest } from "../../types/cartRequest";

interface ProductThumbnailProps {
    product: ProductType;
    margin?: string;
};

const AMOUNT_DEFAULT = 1;

const ProductThumbnail = ({ product, margin }: ProductThumbnailProps) => {
    const { navigate } = useNavigation<ProductNavigationProp>();
    const { request, loading } = useRequest();

    const handleInsertProductInCart = () => {
        // O primeiro parâmetro é o tipo que eu espero receber do backend, o segundo é o tipo do body, por isso o 'B'
        request<unknown, CartRequest>({
            url: URL_CART,
            method: MethodEnum.POST,
            body: {
                productId: product.id,
                amount: AMOUNT_DEFAULT,
            },
            message: 'Produto inserido com sucesso!',
        });
    };
    
    const handleGoToProduct = () => {
        navigate(MenuUrl.PRODUCT, {
            product,
        });
    };

    return (
        <ProductThumbnailContainer margin={margin} onPress={handleGoToProduct}>
            <ProductImage source={{ uri: product.image }} />
            <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{product.name}</Text>
            <Text color={theme.colors.mainTheme.primary} type={textTypes.PARAGRAPH_SEMIBOLD}>
                {convertNumberToMoney(product.price)}
            </Text>
            <ProductInsertCart onPress={handleInsertProductInCart}>
                {loading ? (
                    <ActivityIndicator color={theme.colors.neutralTheme.white} />
                ) : (
                    <Icon name="cart" size={20} color={theme.colors.neutralTheme.white} />
                )}    
            </ProductInsertCart>
        </ProductThumbnailContainer>
    )
};

export default ProductThumbnail;


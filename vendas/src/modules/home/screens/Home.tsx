import Text from "../../../shared/components/text/Text"
import { FlatList, View } from "react-native";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { useEffect } from "react";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_PRODUCT } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enum";
import { ProductType } from "../../../shared/types/productType";
import ProductThumbnail from "../../../shared/components/productThumbnail/ProductThumbnail";

const Home = () => {
  const { request } = useRequest();
  const { products, setProducts } = useProductReducer();

    useEffect(() => {
      request<ProductType[]>({
        url: URL_PRODUCT,
        method: MethodEnum.GET,
        saveGlobal: setProducts,
      });
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <FlatList
        horizontal
        data={products}
        renderItem={({ item }
        ) => <ProductThumbnail product={item} margin="0px 8px"/>
      }
      />
    </View>
  )
}

export default Home;
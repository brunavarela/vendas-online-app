import { FlatList, NativeSyntheticEvent, TextInputChangeEventData, View } from "react-native";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { useEffect, useState } from "react";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_PRODUCT } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enum";
import { ProductType } from "../../../shared/types/productType";
import ProductThumbnail from "../../../shared/components/productThumbnail/ProductThumbnail";
import Input from "../../../shared/components/input/Input";
import { DisplayFlexColumn } from "../../../shared/components/globalStyles/globalView.style";
import { HomeContainer } from "../styles/home.styles";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";

const Home = () => {
  const [search, setSearch] = useState<string>('');
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { request } = useRequest();
  const { products, setProducts } = useProductReducer();

    useEffect(() => {
      request<ProductType[]>({
        url: URL_PRODUCT,
        method: MethodEnum.GET,
        saveGlobal: setProducts,
      });
  }, []);

  const handleGoToProduct = () => {
    navigate(MenuUrl.SEARCH_PRODUCT)
  };

  const handleOnChangeSearch = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearch(event.nativeEvent.text);
  }

  return (
    <View>
      <HomeContainer>
        <Input 
          onPressIconRight={handleGoToProduct} 
          value={search} 
          onChange={handleOnChangeSearch} 
          iconRight="search" 
        />
      </HomeContainer>

      <DisplayFlexColumn />

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
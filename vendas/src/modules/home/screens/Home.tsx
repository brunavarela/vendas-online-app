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
import { HeaderContainer, HeaderLogo, HomeContainer } from "../styles/home.styles";
import { useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { SearchProductNavigationProp } from "../../searchProducts/screens/SearchProduct";

const Home = () => {
  const [search, setSearch] = useState<string>('');
  const { navigate } = useNavigation<SearchProductNavigationProp>();
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
    navigate(MenuUrl.SEARCH_PRODUCT, {
      search,
    })
  };

  const handleOnChangeSearch = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearch(event.nativeEvent.text);
  }

  return (
    <View>
      <HeaderContainer>
        <HeaderLogo 
          resizeMode="contain" 
          source={require('../../../assets/images/Las_Chicas.png')} />
      </HeaderContainer>
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
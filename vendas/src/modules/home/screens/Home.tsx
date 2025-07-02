import { NativeSyntheticEvent, ScrollView, TextInputChangeEventData, View } from "react-native";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { useEffect, useState } from "react";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_PRODUCT } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enum";
import { ProductType } from "../../../shared/types/productType";
import Input from "../../../shared/components/input/Input";
import { DisplayFlexColumn } from "../../../shared/components/globalStyles/globalView.style";
import { CategoryProductsScrollView, HeaderContainer, HeaderLogo, HomeContainer, SearchContainer } from "../styles/home.styles";
import { useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { SearchProductNavigationProp } from "../../searchProducts/screens/SearchProduct";
import Spot_categories from "../../../shared/components/spot_categories/Spot_categories";

const Home = () => {
  const [search, setSearch] = useState<string>('');
  const { navigate } = useNavigation<SearchProductNavigationProp>();

  const handleGoToProduct = () => {
    navigate(MenuUrl.SEARCH_PRODUCT, {
      search,
    })
  };

  const handleOnChangeSearch = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearch(event.nativeEvent.text);
  }

  return (
    <HomeContainer>
      <HeaderContainer>
        <HeaderLogo 
          resizeMode="contain" 
          source={require('../../../assets/images/Las_Chicas.png')} />
      </HeaderContainer>

      <SearchContainer>
        <Input 
          onPressIconRight={handleGoToProduct} 
          value={search} 
          onChange={handleOnChangeSearch} 
          iconRight="search" 
        />
      </SearchContainer>

      <DisplayFlexColumn />
      
      <CategoryProductsScrollView>
          <Spot_categories title="Sapatos" categoryId="2"/>
          <Spot_categories title="Bolsas" categoryId="3"/>
          <Spot_categories title="Acessórios" categoryId="4"/>
          <Spot_categories title="Coleção" categoryId="1"/>
      </CategoryProductsScrollView>
    </HomeContainer>
  )
}

export default Home;
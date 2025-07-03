import { NativeSyntheticEvent, ScrollView, TextInputChangeEventData, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_CATEGORY } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enum";
import Input from "../../../shared/components/input/Input";
import { DisplayFlexColumn } from "../../../shared/components/globalStyles/globalView.style";
import { CategoryProductsScrollView, HeaderContainer, HeaderLogo, HomeContainer, SearchContainer } from "../styles/home.styles";
import { useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { SearchProductNavigationProp } from "../../searchProducts/screens/SearchProduct";
import Spot_categories from "../../../shared/components/spot_categories/Spot_categories";
import { Icon } from "../../../shared/components/icon/Icon";
import { CategoryTypes } from "../../../shared/components/spot_categories/categoryTypes";
import { theme } from "../../../shared/themes/theme";
import MenuModal from "../../../shared/components/modal/menuModal/MenuModal";
import { IconCloseModal } from "../../../shared/components/modal/generalModal/modal.style";

const Home = () => {
  const [search, setSearch] = useState<string>('');
  const { navigate } = useNavigation<SearchProductNavigationProp>();
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  const { request } = useRequest();

  useEffect(() => {
    request<CategoryTypes[]>({
      url: URL_CATEGORY,
      method: MethodEnum.GET,
      saveGlobal: (res) => setCategories(res),
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
    <HomeContainer>
      <HeaderContainer>
        <HeaderLogo 
          resizeMode="contain" 
          source={require('../../../assets/images/Las_Chicas.png')} 
        />
        {!showMenuModal && (
          <TouchableOpacity onPress={() => setShowMenuModal(true)}>
            <Icon name="menu" size={28} color={theme.colors.mainTheme.primary} />
          </TouchableOpacity>
        )}
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
          {categories.map((category) => (
            <Spot_categories
              key={category.id}
              title={category.name}
              categoryId={category.id.toString()}
            />
          ))}
      </CategoryProductsScrollView>

      <MenuModal
        visible={showMenuModal}
        onCloseMenuModal={() => setShowMenuModal(false)}
        categories={categories.map(cat => ({
          id: cat.id.toString(),
          name: cat.name,
        }))}
        onSelect={(id) => {
          console.log('Categoria selecionada', id);
        }}
      />

    </HomeContainer>
  )
}

export default Home;
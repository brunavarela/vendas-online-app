import { View, FlatList } from "react-native";
import Text from "../../../shared/components/text/Text";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../../shared/types/navigation";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { useCategoryProducts } from "../../../shared/hooks/useCategoryProducts";
import ProductThumbnail from "../../../shared/components/productThumbnail/ProductThumbnail";

const Category = () => {
  const { category } = useRoute<RouteProp<RootStackParamList, MenuUrl.CATEGORY>>().params;
  const { products } = useCategoryProducts(category.id);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text type="title">{category.name}</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductThumbnail product={item} margin="8px 0px" />
        )}
        ListEmptyComponent={<Text>Nenhum produto encontrado.</Text>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Category;

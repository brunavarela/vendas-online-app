import { FlatList, View } from "react-native";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import { buttonTestId } from "../button/__mocks__/button.testid";
import ProductThumbnail from "../productThumbnail/ProductThumbnail";
import { useCategoryProducts } from "../../hooks/useCategoryProducts";

interface CategoriesProps {
  categoryName: string;
  categoryId: string; 
}

const Spot_categories = ({ categoryName, categoryId }: CategoriesProps) => {
  const { products } = useCategoryProducts(Number(categoryId));

  return (
    <View>
      <Text
        testID={buttonTestId.BUTTON_TITLE}
        type={textTypes.BUTTON_SEMIBOLD}
        margin="16px 8px 0"
      >
        {categoryName}
      </Text>

      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductThumbnail product={item} margin="0px 8px" />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Spot_categories;

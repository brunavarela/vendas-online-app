import { MenuUrl } from '../enums/MenuUrl.enum';
import { CategoryType } from './categoryTypes';
import { ProductType } from './productType';

export type RootStackParamList = {
  [MenuUrl.SPLASH]: undefined;
  [MenuUrl.LOGIN]: undefined;
  [MenuUrl.CREATE_USER]: undefined;
  [MenuUrl.HOME]: undefined;
  [MenuUrl.ORDERS]: undefined;
  [MenuUrl.PROFILE]: undefined;
  [MenuUrl.CART]: undefined;
  [MenuUrl.SEARCH_PRODUCT]: { search: string };
  [MenuUrl.PRODUCT]: { product: ProductType }; 
  [MenuUrl.CATEGORY]: { category: CategoryType };
};

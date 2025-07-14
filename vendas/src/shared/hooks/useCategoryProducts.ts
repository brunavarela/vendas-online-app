import { useEffect, useState } from 'react';
import { useRequest } from '../hooks/useRequest';
import { MethodEnum } from '../../enums/methods.enum';
import { CategoryType } from '../types/categoryTypes';
import { ProductType } from '../types/productType';
import { URL_CATEGORY } from '../constants/urls';

export const useCategoryProducts = (categoryId: number) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { request } = useRequest();

  useEffect(() => {
    request<CategoryType>({
      url: `${URL_CATEGORY}/${categoryId}`,
      method: MethodEnum.GET,
      saveGlobal: (res) => {
        setProducts(res.products);
      },
    });
  }, [categoryId]);

  return { products };
};

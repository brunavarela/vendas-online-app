import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProductType } from '../../../shared/types/productType';
import { PaginationType } from '../../../shared/types/paginationType';

interface ProductStore {
  products: ProductType[];
  searchProducts?: PaginationType<ProductType[]>;
}

const initialState: ProductStore =  {
  products: [],
  searchProducts: undefined,
}

export const productSlice = createSlice({
  name: 'productsReducer',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload
    },
    setSearchProductsAction: (state, action: PayloadAction<PaginationType<ProductType[]>>) => {
      state.searchProducts = action.payload
    },
  },
})

export const { setProductsAction, setSearchProductsAction } = productSlice.actions

export default productSlice.reducer
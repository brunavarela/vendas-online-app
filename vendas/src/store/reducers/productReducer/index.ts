import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProductType } from '../../../shared/types/productType';

interface ProductStore {
  products: ProductType[];
}

const initialState: ProductStore =  {
  products: [],
}

export const productSlice = createSlice({
  name: 'productsReducer',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload
    },
  },
})

export const { setProductsAction} = productSlice.actions

export default productSlice.reducer
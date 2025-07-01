import { ProductType } from "../../types/productType";

export type ReturnCategory = {
  id: number;
  name: string;
  products: ProductType[]; 
};

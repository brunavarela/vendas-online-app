import { ProductType } from "./productType";

export type CategoryType = {
  id: number;
  name: string;
  products: ProductType[]; 
};

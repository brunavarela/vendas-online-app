import { ProductType } from "../../types/productType";

export type CategoryTypes = {
  id: number;
  name: string;
  products: ProductType[]; 
};

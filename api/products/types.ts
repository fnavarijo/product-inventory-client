import { Dictionary } from '@/@types/global';

export interface Color {
  name: string;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  featuredImage: string;
  isFeatured: boolean;
}

export interface SingleProduct extends Product {
  price?: number;
  description: string;
  images: Array<string>;
  colors: Array<Color>;
  availableSizes: Array<string>;
}

// TODO: I need it?
export type ProductCategories = Dictionary<Array<string>>;

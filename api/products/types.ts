import { Dictionary } from '@/@types/global';

export interface Product {
  id: number;
  name: string;
  category: string;
  featuredImage: string;
  isFeatured: boolean;
  price?: number;
  description?: string;
  images?: Array<string>;
}

export interface Color {
  name: string;
  color: string;
}

// TODO: I need it?
export type ProductCategories = Dictionary<Array<string>>;

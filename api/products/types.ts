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

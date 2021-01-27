export interface ProductCombination {
  id: string;
  image: string;
}

export interface Color {
  name: string;
  color: string;
}

export interface ProductDetail {
  code: string;
  description: string;
  colors: Array<Color>;
}

export interface SingleProductCombination {
  products: Array<ProductDetail>;
  image: string;
}

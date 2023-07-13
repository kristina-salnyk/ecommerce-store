import ProductPicture from './ProductPicture';

interface Product {
  id: string;
  attributes: {
    name: string;
    description: string;
    price: string;
    display_price: string;
    compare_at_price: string | null;
    display_compare_at_price: string | null;
    [key: string]: unknown;
  };
  relationships: {
    images: {
      data: ProductPicture[];
    };
    [key: string]: unknown;
  };

  [key: string]: unknown;
}

export default Product;

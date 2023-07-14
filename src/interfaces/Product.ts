import ProductProperty from './ProductProperty';

interface Product {
  id: string;
  type: string;
  attributes: {
    name: string;
    description: string;
    available_on?: string | null;
    slug?: string;
    price: string;
    currency: string;
    display_price: string;
    purchasable?: boolean;
    in_stock?: boolean;
    backorderable?: boolean;
    meta_description?: string | null;
    meta_keywords?: string | null;
    updated_at?: string;
    sku?: string;
    available: boolean;
    compare_at_price: string | null;
    display_compare_at_price: string | null;
    localized_slugs?: object;
  };
  relationships: {
    variants: {
      data: ProductProperty[];
    };
    option_types: {
      data: ProductProperty[];
    };
    product_properties: {
      data: ProductProperty[];
    };
    taxons: {
      data: ProductProperty[];
    };
    images: {
      data: ProductProperty[];
    };
    default_variant?: {
      data: ProductProperty | null;
    };
    primary_variant?: {
      data: ProductProperty | null;
    };
  };
}

export default Product;

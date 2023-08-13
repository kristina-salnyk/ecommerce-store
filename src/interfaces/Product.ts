import ProductRelationship from './ProductRelationship';

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
      data: ProductRelationship[];
    };
    option_types: {
      data: ProductRelationship[];
    };
    product_properties: {
      data: ProductRelationship[];
    };
    taxons: {
      data: ProductRelationship[];
    };
    images: {
      data: ProductRelationship[];
    };
    default_variant?: {
      data: ProductRelationship | null;
    };
    primary_variant?: {
      data: ProductRelationship | null;
    };
  };
}

export default Product;

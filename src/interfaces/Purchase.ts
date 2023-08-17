import ProductProperty from './ProductProperty';

interface Purchase {
  id: string;
  type: string;
  attributes: {
    name: string;
    quantity: number;
    slug: string;
    options_text: string;
    price: string;
    currency: string;
    display_price: string;
    total: string;
    display_total: string;
    adjustment_total: string;
    display_adjustment_total: string;
    additional_tax_total: string;
    display_additional_tax_total: string;
    discounted_amount: string;
    display_discounted_amount: string;
    pre_tax_amount: string;
    display_pre_tax_amount: string;
    promo_total: string;
    display_promo_total: string;
    included_tax_total: string;
    display_included_tax_total: string;
    public_metadata?: object;
  };
  relationships: {
    variant: {
      data: ProductProperty | null;
    };
    digital_links?: {
      data: ProductProperty[];
    };
  };
}

export default Purchase;

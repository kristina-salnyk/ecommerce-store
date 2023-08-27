import ProductRelationship from './ProductRelationship';
import Purchase from './Purchase';

interface Cart {
  data: {
    id: string;
    type: string;
    attributes: {
      number: string;
      token: string;
      item_total: string;
      total: string;
      ship_total: string;
      adjustment_total: string;
      created_at: string;
      updated_at: string;
      completed_at: string | null;
      included_tax_total: string;
      additional_tax_total: string;
      display_additional_tax_total: string;
      tax_total: string;
      currency: string;
      state: string;
      email: string | null;
      display_item_total: string;
      display_ship_total: string;
      display_adjustment_total: string;
      display_included_tax_total: string;
      promo_total: string;
      display_promo_total: string;
      item_count: number;
      special_instructions: string | null;
      display_total: string;
      pre_tax_item_amount: string;
      display_pre_tax_item_amount: string;
      pre_tax_total: string;
      display_tax_total: string;
      display_pre_tax_total: string;
      shipment_state: string | null;
      payment_state: string | null;
    };
    relationships: {
      line_items: {
        data: ProductRelationship[];
      };
      variants: {
        data: ProductRelationship[];
      };
      promotions: {
        data: ProductRelationship[];
      };
      payments: {
        data: ProductRelationship[];
      };
      shipments: {
        data: ProductRelationship[];
      };
      user: {
        data: ProductRelationship | null;
      };
      billing_address: {
        data: ProductRelationship | null;
      };
      shipping_address: {
        data: ProductRelationship | null;
      };
    };
  };
  included: Purchase[];
}

export default Cart;

import Cart from '../interfaces/Cart';
import Purchase from '../interfaces/Purchase';

export const CART: {data: Cart; included: Purchase[]} = {
  data: {
    id: '18',
    type: 'cart',
    attributes: {
      number: 'R177608027',
      item_total: '474.95',
      total: '527.45',
      ship_total: '5.0',
      adjustment_total: '47.5',
      created_at: '2021-09-28T22:31:47.401Z',
      updated_at: '2021-09-28T22:57:22.132Z',
      completed_at: '2021-09-28T22:33:18.372Z',
      included_tax_total: '0.0',
      additional_tax_total: '47.5',
      display_additional_tax_total: '$47.50',
      display_included_tax_total: '$0.00',
      tax_total: '47.5',
      currency: 'USD',
      state: 'complete',
      token: '',
      email: 'spree@example.com',
      display_item_total: '$474.95',
      display_ship_total: '$5.00',
      display_adjustment_total: '$47.50',
      display_tax_total: '$47.50',
      promo_total: '0.0',
      display_promo_total: '$0.00',
      item_count: 5,
      special_instructions: null,
      display_total: '$527.45',
      pre_tax_item_amount: '474.95',
      display_pre_tax_item_amount: '$474.95',
      pre_tax_total: '479.95',
      display_pre_tax_total: '$479.95',
      shipment_state: 'shipped',
      payment_state: 'paid',
    },
    relationships: {
      line_items: {
        data: [
          {
            id: '1',
            type: 'line_item',
          },
        ],
      },
      variants: {
        data: [
          {
            id: '131',
            type: 'variant',
          },
        ],
      },
      promotions: {
        data: [
          {
            id: '2',
            type: 'promotion',
          },
        ],
      },
      payments: {
        data: [
          {
            id: '1',
            type: 'payment',
          },
        ],
      },
      shipments: {
        data: [
          {
            id: '1',
            type: 'shipment',
          },
        ],
      },
      user: {
        data: {
          id: '1',
          type: 'user',
        },
      },
      billing_address: {
        data: {
          id: '5',
          type: 'address',
        },
      },
      shipping_address: {
        data: {
          id: '5',
          type: 'address',
        },
      },
    },
  },
  included: [
    {
      id: '1',
      type: 'line_item',
      attributes: {
        name: '3 4 Sleeve T Shirt',
        quantity: 5,
        price: '94.99',
        slug: '3-4-sleeve-t-shirt',
        options_text: 'Color: white, Size: XS',
        currency: 'USD',
        display_price: '$94.99',
        total: '522.45',
        display_total: '$522.45',
        adjustment_total: '47.5',
        display_adjustment_total: '$47.50',
        additional_tax_total: '47.5',
        discounted_amount: '474.95',
        display_discounted_amount: '$474.95',
        display_additional_tax_total: '$47.50',
        promo_total: '0.0',
        display_promo_total: '$0.00',
        included_tax_total: '0.0',
        display_included_tax_total: '$0.00',
        pre_tax_amount: '474.95',
        display_pre_tax_amount: '$474.95',
      },
      relationships: {
        variant: {
          data: {
            id: '131',
            type: 'variant',
          },
        },
      },
    },
  ],
};

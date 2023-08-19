import Product from '../interfaces/Product';
import Cart from '../interfaces/Cart';

export const CART: Cart = {
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

export const PRODUCTS: Product[] = [
  {
    id: '1',
    type: 'product',
    attributes: {
      name: 'Denim Shirt',
      description:
        'Est cupiditate dolorem tempora cum. Pariatur facilis similique quidem doloremque nemo expedita provident inventore. Odit ratione in tempora consequatur a voluptatum. Nostrum possimus fugit tenetur delectus.',
      available_on: '2021-08-15T04:34:02.280-05:00',
      slug: 'denim-shirt',
      meta_description: null,
      meta_keywords: null,
      updated_at: '2023-06-29T21:16:09.885-05:00',
      sku: 'Shirts_denimshirt_60.99',
      purchasable: true,
      in_stock: true,
      backorderable: false,
      available: true,
      currency: 'USD',
      price: '60.99',
      display_price: '$60.99',
      compare_at_price: '79.99',
      display_compare_at_price: '$79.99',
    },
    relationships: {
      variants: {
        data: [
          {
            id: '117',
            type: 'variant',
          },
        ],
      },
      option_types: {
        data: [
          {
            id: '1',
            type: 'option_type',
          },
          {
            id: '3',
            type: 'option_type',
          },
        ],
      },
      product_properties: {
        data: [
          {
            id: '137',
            type: 'product_property',
          },
          {
            id: '138',
            type: 'product_property',
          },
          {
            id: '139',
            type: 'product_property',
          },
          {
            id: '140',
            type: 'product_property',
          },
          {
            id: '141',
            type: 'product_property',
          },
          {
            id: '142',
            type: 'product_property',
          },
          {
            id: '143',
            type: 'product_property',
          },
          {
            id: '144',
            type: 'product_property',
          },
        ],
      },
      taxons: {
        data: [
          {
            id: '2',
            type: 'taxon',
          },
          {
            id: '5',
            type: 'taxon',
          },
        ],
      },
      images: {
        data: [
          {
            id: '234',
            type: 'image',
          },
          {
            id: '356',
            type: 'image',
          },
        ],
      },
      default_variant: {
        data: {
          id: '117',
          type: 'variant',
        },
      },
      primary_variant: {
        data: {
          id: '1',
          type: 'variant',
        },
      },
    },
  },
  {
    id: '2',
    type: 'product',
    attributes: {
      name: 'Checked Shirt',
      description:
        '<p>Itaque ducimus neque esse odit vitae. Nam omnis doloremque officia eum qui dignissimos. Necessitatibus maiores incidunt ullam fugiat ab cumque quo. Rem repellendus maxime odio excepturi labore.</p>',
      available_on: '2021-08-15T00:00:00.000-05:00',
      slug: 'checked-shirt',
      meta_description: '',
      meta_keywords: '',
      updated_at: '2023-06-23T05:04:00.139-05:00',
      sku: 'Shirts_checkedshirt_47.99',
      purchasable: true,
      in_stock: true,
      backorderable: true,
      available: true,
      currency: 'USD',
      price: '47.99',
      display_price: '$47.99',
      compare_at_price: '0.0',
      display_compare_at_price: '$0.00',
    },
    relationships: {
      variants: {
        data: [
          {
            id: '118',
            type: 'variant',
          },
          {
            id: '237',
            type: 'variant',
          },
        ],
      },
      option_types: {
        data: [
          {
            id: '1',
            type: 'option_type',
          },
          {
            id: '3',
            type: 'option_type',
          },
        ],
      },
      product_properties: {
        data: [
          {
            id: '233',
            type: 'product_property',
          },
          {
            id: '234',
            type: 'product_property',
          },
          {
            id: '235',
            type: 'product_property',
          },
          {
            id: '236',
            type: 'product_property',
          },
          {
            id: '237',
            type: 'product_property',
          },
          {
            id: '238',
            type: 'product_property',
          },
          {
            id: '239',
            type: 'product_property',
          },
          {
            id: '240',
            type: 'product_property',
          },
        ],
      },
      taxons: {
        data: [
          {
            id: '30',
            type: 'taxon',
          },
          {
            id: '20',
            type: 'taxon',
          },
          {
            id: '2',
            type: 'taxon',
          },
          {
            id: '5',
            type: 'taxon',
          },
        ],
      },
      images: {
        data: [
          {
            id: '216',
            type: 'image',
          },
          {
            id: '217',
            type: 'image',
          },
          {
            id: '348',
            type: 'image',
          },
          {
            id: '349',
            type: 'image',
          },
          {
            id: '351',
            type: 'image',
          },
          {
            id: '350',
            type: 'image',
          },
          {
            id: '353',
            type: 'image',
          },
          {
            id: '352',
            type: 'image',
          },
          {
            id: '355',
            type: 'image',
          },
          {
            id: '354',
            type: 'image',
          },
        ],
      },
      default_variant: {
        data: {
          id: '118',
          type: 'variant',
        },
      },
      primary_variant: {
        data: {
          id: '2',
          type: 'variant',
        },
      },
    },
  },
  {
    id: '3',
    type: 'product',
    attributes: {
      name: 'Covered Placket Shirt',
      description:
        '<p>Incidunt ea reprehenderit perferendis iste. Aut quis tenetur dignissimos ipsa quaerat asperiores amet. Voluptate laborum facere recusandae quae.</p>',
      available_on: '2021-08-15T00:00:00.000-05:00',
      slug: 'covered-placket-shirt',
      meta_description: '',
      meta_keywords: '',
      updated_at: '2023-06-29T22:52:15.808-05:00',
      sku: 'Shirts_coveredplacketshirt_41.99',
      purchasable: true,
      in_stock: true,
      backorderable: true,
      available: true,
      currency: 'USD',
      price: '41.99',
      display_price: '$41.99',
      compare_at_price: '0.0',
      display_compare_at_price: '$0.00',
    },
    relationships: {
      variants: {
        data: [
          {
            id: '119',
            type: 'variant',
          },
          {
            id: '270',
            type: 'variant',
          },
          {
            id: '271',
            type: 'variant',
          },
        ],
      },
      option_types: {
        data: [
          {
            id: '1',
            type: 'option_type',
          },
          {
            id: '3',
            type: 'option_type',
          },
        ],
      },
      product_properties: {
        data: [
          {
            id: '211',
            type: 'product_property',
          },
          {
            id: '212',
            type: 'product_property',
          },
          {
            id: '213',
            type: 'product_property',
          },
          {
            id: '214',
            type: 'product_property',
          },
          {
            id: '215',
            type: 'product_property',
          },
          {
            id: '216',
            type: 'product_property',
          },
          {
            id: '217',
            type: 'product_property',
          },
          {
            id: '218',
            type: 'product_property',
          },
        ],
      },
      taxons: {
        data: [
          {
            id: '32',
            type: 'taxon',
          },
          {
            id: '18',
            type: 'taxon',
          },
          {
            id: '2',
            type: 'taxon',
          },
          {
            id: '5',
            type: 'taxon',
          },
        ],
      },
      images: {
        data: [
          {
            id: '21',
            type: 'image',
          },
          {
            id: '30',
            type: 'image',
          },
          {
            id: '31',
            type: 'image',
          },
          {
            id: '160',
            type: 'image',
          },
          {
            id: '161',
            type: 'image',
          },
        ],
      },
      default_variant: {
        data: {
          id: '119',
          type: 'variant',
        },
      },
      primary_variant: {
        data: {
          id: '3',
          type: 'variant',
        },
      },
    },
  },
  {
    id: '4',
    type: 'product',
    attributes: {
      name: 'Slim Fit Shirt',
      description:
        'Rem nostrum voluptatem natus repellat qui placeat. Ex ipsam perspiciatis ipsum quidem suscipit officiis. Eveniet atque saepe nesciunt voluptate iusto culpa architecto. Consequuntur natus vero odio voluptas velit harum alias.',
      available_on: '2021-08-15T04:34:02.900-05:00',
      slug: 'slim-fit-shirt',
      meta_description: null,
      meta_keywords: null,
      updated_at: '2023-06-23T05:04:00.139-05:00',
      sku: 'Shirts_slimfitshirt_47.99',
      purchasable: true,
      in_stock: false,
      backorderable: true,
      available: true,
      currency: 'USD',
      price: '47.99',
      display_price: '$47.99',
      compare_at_price: null,
      display_compare_at_price: null,
    },
    relationships: {
      variants: {
        data: [
          {
            id: '120',
            type: 'variant',
          },
        ],
      },
      option_types: {
        data: [
          {
            id: '1',
            type: 'option_type',
          },
          {
            id: '3',
            type: 'option_type',
          },
        ],
      },
      product_properties: {
        data: [
          {
            id: '225',
            type: 'product_property',
          },
          {
            id: '226',
            type: 'product_property',
          },
          {
            id: '227',
            type: 'product_property',
          },
          {
            id: '228',
            type: 'product_property',
          },
          {
            id: '229',
            type: 'product_property',
          },
          {
            id: '230',
            type: 'product_property',
          },
          {
            id: '231',
            type: 'product_property',
          },
          {
            id: '232',
            type: 'product_property',
          },
        ],
      },
      taxons: {
        data: [
          {
            id: '21',
            type: 'taxon',
          },
          {
            id: '2',
            type: 'taxon',
          },
          {
            id: '5',
            type: 'taxon',
          },
          {
            id: '22',
            type: 'taxon',
          },
        ],
      },
      images: {
        data: [
          {
            id: '32',
            type: 'image',
          },
          {
            id: '315',
            type: 'image',
          },
          {
            id: '33',
            type: 'image',
          },
        ],
      },
      default_variant: {
        data: {
          id: '120',
          type: 'variant',
        },
      },
      primary_variant: {
        data: {
          id: '4',
          type: 'variant',
        },
      },
    },
  },
  {
    id: '5',
    type: 'product',
    attributes: {
      name: 'Denim Shirt',
      description:
        'Est cupiditate dolorem tempora cum. Pariatur facilis similique quidem doloremque nemo expedita provident inventore. Odit ratione in tempora consequatur a voluptatum. Nostrum possimus fugit tenetur delectus.',
      available_on: '2021-08-15T04:34:02.280-05:00',
      slug: 'denim-shirt',
      meta_description: null,
      meta_keywords: null,
      updated_at: '2023-06-29T21:16:09.885-05:00',
      sku: 'Shirts_denimshirt_60.99',
      purchasable: true,
      in_stock: true,
      backorderable: false,
      available: true,
      currency: 'USD',
      price: '60.99',
      display_price: '$60.99',
      compare_at_price: '79.99',
      display_compare_at_price: '$79.99',
    },
    relationships: {
      variants: {
        data: [
          {
            id: '117',
            type: 'variant',
          },
        ],
      },
      option_types: {
        data: [
          {
            id: '1',
            type: 'option_type',
          },
          {
            id: '3',
            type: 'option_type',
          },
        ],
      },
      product_properties: {
        data: [
          {
            id: '137',
            type: 'product_property',
          },
          {
            id: '138',
            type: 'product_property',
          },
          {
            id: '139',
            type: 'product_property',
          },
          {
            id: '140',
            type: 'product_property',
          },
          {
            id: '141',
            type: 'product_property',
          },
          {
            id: '142',
            type: 'product_property',
          },
          {
            id: '143',
            type: 'product_property',
          },
          {
            id: '144',
            type: 'product_property',
          },
        ],
      },
      taxons: {
        data: [
          {
            id: '2',
            type: 'taxon',
          },
          {
            id: '5',
            type: 'taxon',
          },
        ],
      },
      images: {
        data: [
          {
            id: '234',
            type: 'image',
          },
          {
            id: '356',
            type: 'image',
          },
        ],
      },
      default_variant: {
        data: {
          id: '117',
          type: 'variant',
        },
      },
      primary_variant: {
        data: {
          id: '1',
          type: 'variant',
        },
      },
    },
  },
  {
    id: '6',
    type: 'product',
    attributes: {
      name: 'Denim Shirt',
      description:
        'Est cupiditate dolorem tempora cum. Pariatur facilis similique quidem doloremque nemo expedita provident inventore. Odit ratione in tempora consequatur a voluptatum. Nostrum possimus fugit tenetur delectus.',
      available_on: '2021-08-15T04:34:02.280-05:00',
      slug: 'denim-shirt',
      meta_description: null,
      meta_keywords: null,
      updated_at: '2023-06-29T21:16:09.885-05:00',
      sku: 'Shirts_denimshirt_60.99',
      purchasable: true,
      in_stock: true,
      backorderable: false,
      available: true,
      currency: 'USD',
      price: '60.99',
      display_price: '$60.99',
      compare_at_price: '79.99',
      display_compare_at_price: '$79.99',
    },
    relationships: {
      variants: {
        data: [
          {
            id: '117',
            type: 'variant',
          },
        ],
      },
      option_types: {
        data: [
          {
            id: '1',
            type: 'option_type',
          },
          {
            id: '3',
            type: 'option_type',
          },
        ],
      },
      product_properties: {
        data: [
          {
            id: '137',
            type: 'product_property',
          },
          {
            id: '138',
            type: 'product_property',
          },
          {
            id: '139',
            type: 'product_property',
          },
          {
            id: '140',
            type: 'product_property',
          },
          {
            id: '141',
            type: 'product_property',
          },
          {
            id: '142',
            type: 'product_property',
          },
          {
            id: '143',
            type: 'product_property',
          },
          {
            id: '144',
            type: 'product_property',
          },
        ],
      },
      taxons: {
        data: [
          {
            id: '2',
            type: 'taxon',
          },
          {
            id: '5',
            type: 'taxon',
          },
        ],
      },
      images: {
        data: [
          {
            id: '234',
            type: 'image',
          },
          {
            id: '356',
            type: 'image',
          },
        ],
      },
      default_variant: {
        data: {
          id: '117',
          type: 'variant',
        },
      },
      primary_variant: {
        data: {
          id: '1',
          type: 'variant',
        },
      },
    },
  },
  {
    id: '7',
    type: 'product',
    attributes: {
      name: 'Denim Shirt',
      description:
        'Est cupiditate dolorem tempora cum. Pariatur facilis similique quidem doloremque nemo expedita provident inventore. Odit ratione in tempora consequatur a voluptatum. Nostrum possimus fugit tenetur delectus.',
      available_on: '2021-08-15T04:34:02.280-05:00',
      slug: 'denim-shirt',
      meta_description: null,
      meta_keywords: null,
      updated_at: '2023-06-29T21:16:09.885-05:00',
      sku: 'Shirts_denimshirt_60.99',
      purchasable: true,
      in_stock: true,
      backorderable: false,
      available: true,
      currency: 'USD',
      price: '60.99',
      display_price: '$60.99',
      compare_at_price: '79.99',
      display_compare_at_price: '$79.99',
    },
    relationships: {
      variants: {
        data: [
          {
            id: '117',
            type: 'variant',
          },
        ],
      },
      option_types: {
        data: [
          {
            id: '1',
            type: 'option_type',
          },
          {
            id: '3',
            type: 'option_type',
          },
        ],
      },
      product_properties: {
        data: [
          {
            id: '137',
            type: 'product_property',
          },
          {
            id: '138',
            type: 'product_property',
          },
          {
            id: '139',
            type: 'product_property',
          },
          {
            id: '140',
            type: 'product_property',
          },
          {
            id: '141',
            type: 'product_property',
          },
          {
            id: '142',
            type: 'product_property',
          },
          {
            id: '143',
            type: 'product_property',
          },
          {
            id: '144',
            type: 'product_property',
          },
        ],
      },
      taxons: {
        data: [
          {
            id: '2',
            type: 'taxon',
          },
          {
            id: '5',
            type: 'taxon',
          },
        ],
      },
      images: {
        data: [
          {
            id: '234',
            type: 'image',
          },
          {
            id: '356',
            type: 'image',
          },
        ],
      },
      default_variant: {
        data: {
          id: '117',
          type: 'variant',
        },
      },
      primary_variant: {
        data: {
          id: '1',
          type: 'variant',
        },
      },
    },
  },
  {
    id: '8',
    type: 'product',
    attributes: {
      name: 'Denim Shirt',
      description:
        'Est cupiditate dolorem tempora cum. Pariatur facilis similique quidem doloremque nemo expedita provident inventore. Odit ratione in tempora consequatur a voluptatum. Nostrum possimus fugit tenetur delectus.',
      available_on: '2021-08-15T04:34:02.280-05:00',
      slug: 'denim-shirt',
      meta_description: null,
      meta_keywords: null,
      updated_at: '2023-06-29T21:16:09.885-05:00',
      sku: 'Shirts_denimshirt_60.99',
      purchasable: true,
      in_stock: true,
      backorderable: false,
      available: true,
      currency: 'USD',
      price: '60.99',
      display_price: '$60.99',
      compare_at_price: '79.99',
      display_compare_at_price: '$79.99',
    },
    relationships: {
      variants: {
        data: [
          {
            id: '117',
            type: 'variant',
          },
        ],
      },
      option_types: {
        data: [
          {
            id: '1',
            type: 'option_type',
          },
          {
            id: '3',
            type: 'option_type',
          },
        ],
      },
      product_properties: {
        data: [
          {
            id: '137',
            type: 'product_property',
          },
          {
            id: '138',
            type: 'product_property',
          },
          {
            id: '139',
            type: 'product_property',
          },
          {
            id: '140',
            type: 'product_property',
          },
          {
            id: '141',
            type: 'product_property',
          },
          {
            id: '142',
            type: 'product_property',
          },
          {
            id: '143',
            type: 'product_property',
          },
          {
            id: '144',
            type: 'product_property',
          },
        ],
      },
      taxons: {
        data: [
          {
            id: '2',
            type: 'taxon',
          },
          {
            id: '5',
            type: 'taxon',
          },
        ],
      },
      images: {
        data: [
          {
            id: '234',
            type: 'image',
          },
          {
            id: '356',
            type: 'image',
          },
        ],
      },
      default_variant: {
        data: {
          id: '117',
          type: 'variant',
        },
      },
      primary_variant: {
        data: {
          id: '1',
          type: 'variant',
        },
      },
    },
  },
  {
    id: '9',
    type: 'product',
    attributes: {
      name: 'Denim Shirt',
      description:
        'Est cupiditate dolorem tempora cum. Pariatur facilis similique quidem doloremque nemo expedita provident inventore. Odit ratione in tempora consequatur a voluptatum. Nostrum possimus fugit tenetur delectus.',
      available_on: '2021-08-15T04:34:02.280-05:00',
      slug: 'denim-shirt',
      meta_description: null,
      meta_keywords: null,
      updated_at: '2023-06-29T21:16:09.885-05:00',
      sku: 'Shirts_denimshirt_60.99',
      purchasable: true,
      in_stock: true,
      backorderable: false,
      available: true,
      currency: 'USD',
      price: '60.99',
      display_price: '$60.99',
      compare_at_price: '79.99',
      display_compare_at_price: '$79.99',
    },
    relationships: {
      variants: {
        data: [
          {
            id: '117',
            type: 'variant',
          },
        ],
      },
      option_types: {
        data: [
          {
            id: '1',
            type: 'option_type',
          },
          {
            id: '3',
            type: 'option_type',
          },
        ],
      },
      product_properties: {
        data: [
          {
            id: '137',
            type: 'product_property',
          },
          {
            id: '138',
            type: 'product_property',
          },
          {
            id: '139',
            type: 'product_property',
          },
          {
            id: '140',
            type: 'product_property',
          },
          {
            id: '141',
            type: 'product_property',
          },
          {
            id: '142',
            type: 'product_property',
          },
          {
            id: '143',
            type: 'product_property',
          },
          {
            id: '144',
            type: 'product_property',
          },
        ],
      },
      taxons: {
        data: [
          {
            id: '2',
            type: 'taxon',
          },
          {
            id: '5',
            type: 'taxon',
          },
        ],
      },
      images: {
        data: [
          {
            id: '234',
            type: 'image',
          },
          {
            id: '356',
            type: 'image',
          },
        ],
      },
      default_variant: {
        data: {
          id: '117',
          type: 'variant',
        },
      },
      primary_variant: {
        data: {
          id: '1',
          type: 'variant',
        },
      },
    },
  },
];

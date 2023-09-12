import React, {FC} from 'react';

import ProductName from '../../atoms/ProductName';
import ProductCost from '../../atoms/ProductCost';
import ProductImage from '../../atoms/ProductImage';
import ProductOptions from '../../atoms/ProductOptions';
import getImagePathById from 'utils/getImagePathById';
import {ORDER_PURCHASE_IMAGE_SIZE} from 'constants/shared';
import {
  OrderedProductDetails,
  OrderedProductImageWrap,
  OrderedProductStyled,
  OrderedProductWrap,
} from './OrderedProduct.styled';

interface OrderedProductProps {
  productId: string;
  name: string;
  options: string;
  price: string;
  priceView: string;
  quantity: number;
}

const OrderedProduct: FC<OrderedProductProps> = ({
  productId,
  name,
  options,
  price,
  priceView,
  quantity,
}) => (
  <OrderedProductWrap>
    <OrderedProductStyled>
      <OrderedProductDetails>
        <ProductName text={name} />
        <ProductOptions text={`${options}\nQty: ${quantity}`} />
        <ProductCost
          price={price}
          priceView={priceView}
          compareAtPrice={null}
          compareAtPriceView={null}
        />
      </OrderedProductDetails>
      <OrderedProductImageWrap width={ORDER_PURCHASE_IMAGE_SIZE}>
        <ProductImage
          source={{
            uri: getImagePathById(productId, ORDER_PURCHASE_IMAGE_SIZE),
          }}
          options={{
            height: ORDER_PURCHASE_IMAGE_SIZE,
            width: ORDER_PURCHASE_IMAGE_SIZE,
          }}
          alt={name}
        />
      </OrderedProductImageWrap>
    </OrderedProductStyled>
  </OrderedProductWrap>
);

export default OrderedProduct;

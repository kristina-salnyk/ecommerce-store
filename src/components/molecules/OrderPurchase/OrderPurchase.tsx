import React, {FC} from 'react';

import ProductName from '../../atoms/ProductName';
import ProductImage from '../../atoms/ProductImage';
import HorizontalLine from '../../atoms/HorizontalLine';
import getImagePathById from 'utils/getImagePathById';
import {ORDER_PURCHASE_IMAGE_SIZE} from 'constants/shared';
import {
  OrderPurchaseImageWrap,
  OrderPurchaseStyled,
  OrderPurchaseWrap,
} from './OrderPurchase.styled';

interface OrderPurchaseProps {
  productId: string;
  name: string;
}

const OrderPurchase: FC<OrderPurchaseProps> = ({productId, name}) => (
  <OrderPurchaseStyled>
    <OrderPurchaseWrap>
      <ProductName text={name} />
      <OrderPurchaseImageWrap width={ORDER_PURCHASE_IMAGE_SIZE}>
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
      </OrderPurchaseImageWrap>
    </OrderPurchaseWrap>
    <HorizontalLine />
  </OrderPurchaseStyled>
);

export default OrderPurchase;

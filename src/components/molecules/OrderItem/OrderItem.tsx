import React, {FC} from 'react';

import Purchase from '../../../interfaces/Purchase';
import Link from '../../atoms/Link';
import OrderCreationDate from '../../atoms/OrderCreationDate';
import OrderPurchase from '../OrderPurchase';
import formatDate from '../../../utils/formateDate';
import {useAppMainNavigation} from '../../../navigation/hooks';
import {OrderItemStyled, OrderItemWrap} from './OrderItem.styled';

interface OrderItemProps {
  number: string;
  createdAt: string;
  purchases: Purchase[];
}

const OrderItem: FC<OrderItemProps> = ({number, createdAt, purchases}) => {
  const navigation = useAppMainNavigation();

  return (
    <OrderItemWrap>
      <OrderItemStyled>
        <OrderCreationDate text={formatDate(createdAt)} />
        {purchases.map((item: Purchase) => (
          <OrderPurchase
            key={item.id}
            productId={item.relationships.variant.data.id}
            name={item.attributes.name}
          />
        ))}
        <Link
          text="View Order Details"
          onPress={() => navigation.push('OrderDetails', {orderNumber: number})}
        />
      </OrderItemStyled>
    </OrderItemWrap>
  );
};

export default OrderItem;

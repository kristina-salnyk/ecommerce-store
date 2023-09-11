import React, {FC} from 'react';

import OrderList from '../../organisms/OrderList';
import {OrdersTemplateStyled} from './OrdersTemplate.styled';

const OrdersTemplate: FC = () => (
  <OrdersTemplateStyled>
    <OrderList />
  </OrdersTemplateStyled>
);

export default OrdersTemplate;

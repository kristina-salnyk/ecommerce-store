import React, {FC} from 'react';

import {OrderCreationDateStyled} from './OrderCreationDate.styled';

interface OrderCreationDateProps {
  text: string;
}

const OrderCreationDate: FC<OrderCreationDateProps> = ({text}) => (
  <OrderCreationDateStyled>{text}</OrderCreationDateStyled>
);

export default OrderCreationDate;

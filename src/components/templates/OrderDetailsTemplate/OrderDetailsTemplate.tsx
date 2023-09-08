import React, {FC} from 'react';

import OrderDetails from '../../organisms/OrderDetails';
import {OrderDetailsTemplateStyled} from './OrderDetailsTemplate.styled';

const OrderDetailsTemplate: FC = () => (
  <OrderDetailsTemplateStyled>
    <OrderDetails />
  </OrderDetailsTemplateStyled>
);

export default OrderDetailsTemplate;

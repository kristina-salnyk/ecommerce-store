import React, {FC} from 'react';

import PurchaseList from '../../organisms/PurchaseList';
import {CartTemplateStyled} from './CartTemplate.styled';

const CartTemplate: FC = () => (
  <CartTemplateStyled>
    <PurchaseList />
  </CartTemplateStyled>
);

export default CartTemplate;

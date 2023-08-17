import React, {FC} from 'react';

import PurchaseList from '../../organisms/PurchaseList';
import Button from '../../atoms/Button';
import Cart from '../../../interfaces/Cart';
import {CartTemplateStyled} from './CartTemplate.styled';

interface CartTemplateProps {
  cart: Cart;
}

const CartTemplate: FC<CartTemplateProps> = ({cart}) => {
  const proceedToPayment = () => {};

  return (
    <CartTemplateStyled>
      <PurchaseList cart={cart} />
      <Button text="Proceed to payment" onPress={proceedToPayment} />
    </CartTemplateStyled>
  );
};

export default CartTemplate;

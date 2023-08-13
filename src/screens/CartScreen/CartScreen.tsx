import React, {FC} from 'react';

import ScreenContainer from '../../containers/ScreenContainer';
import CartTemplate from '../../components/templates/CartTemplate';
import {CART} from '../../constants/data';

const CartScreen: FC = () => (
  <ScreenContainer>
    <CartTemplate cart={CART} />
  </ScreenContainer>
);

export default CartScreen;

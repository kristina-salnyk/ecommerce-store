import React, {FC} from 'react';

import ScreenContainer from '../../containers/ScreenContainer';
import CartTemplate from '../../components/templates/CartTemplate';

const CartScreen: FC = () => (
  <ScreenContainer>
    <CartTemplate />
  </ScreenContainer>
);

export default CartScreen;

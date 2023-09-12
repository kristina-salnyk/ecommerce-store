import React, {FC, useEffect} from 'react';

import ScreenContainer from 'containers/ScreenContainer';
import CartTemplate from 'components/templates/CartTemplate';
import onScreenOpen from 'utils/onScreenOpen';

const CartScreen: FC = () => {
  useEffect(() => {
    onScreenOpen('Cart');
  }, []);

  return (
    <ScreenContainer>
      <CartTemplate />
    </ScreenContainer>
  );
};

export default CartScreen;

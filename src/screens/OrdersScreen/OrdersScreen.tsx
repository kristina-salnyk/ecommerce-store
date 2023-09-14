import React, {FC, useEffect} from 'react';

import ScreenContainer from 'containers/ScreenContainer';
import OrdersTemplate from 'components/templates/OrdersTemplate';
import onScreenOpen from 'utils/onScreenOpen';

const OrdersScreen: FC = () => {
  useEffect(() => {
    onScreenOpen('Orders');
  }, []);

  return (
    <ScreenContainer>
      <OrdersTemplate />
    </ScreenContainer>
  );
};

export default OrdersScreen;

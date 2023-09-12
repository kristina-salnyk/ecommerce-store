import React, {FC, useEffect} from 'react';

import ScreenContainer from 'containers/ScreenContainer';
import OrderDetailsTemplate from 'components/templates/OrderDetailsTemplate';
import onScreenOpen from 'utils/onScreenOpen';

const OrderDetailsScreen: FC = () => {
  useEffect(() => {
    onScreenOpen('OrderDetails');
  }, []);

  return (
    <ScreenContainer>
      <OrderDetailsTemplate />
    </ScreenContainer>
  );
};

export default OrderDetailsScreen;

import React, {FC} from 'react';

import OrdersTemplate from '../../components/templates/OrdersTemplate';
import ScreenContainer from '../../containers/ScreenContainer';

const OrdersScreen: FC = () => (
  <ScreenContainer>
    <OrdersTemplate />
  </ScreenContainer>
);

export default OrdersScreen;

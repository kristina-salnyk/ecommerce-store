import React, {FC} from 'react';

import ScreenContainer from '../../containers/ScreenContainer';
import OrderDetailsTemplate from '../../components/templates/OrderDetailsTemplate';

const OrderDetailsScreen: FC = () => (
  <ScreenContainer>
    <OrderDetailsTemplate />
  </ScreenContainer>
);

export default OrderDetailsScreen;

import React, {FC} from 'react';

import ProductListTemplate from '../../components/templates/ProductListTemplate';
import ScreenContainer from '../../containers/ScreenContainer';

const MainScreen: FC = () => (
  <ScreenContainer>
    <ProductListTemplate />
  </ScreenContainer>
);

export default MainScreen;

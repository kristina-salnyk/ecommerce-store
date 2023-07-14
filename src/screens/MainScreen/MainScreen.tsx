import React, {FC} from 'react';

import ProductListTemplate from '../../components/templates/ProductListTemplate';
import ScreenContainer from '../../containers/ScreenContainer';
import {PRODUCTS} from '../../constants/data';

const MainScreen: FC = () => (
  <ScreenContainer>
    <ProductListTemplate products={PRODUCTS} />
  </ScreenContainer>
);

export default MainScreen;

import React from 'react-native';

import ProductListTemplate from '../../components/templates/ProductListTemplate';
import ScreenContainer from '../../containers/ScreenContainer';
import {products} from '../../constants/data';

const MainScreen = () => (
  <ScreenContainer>
    <ProductListTemplate products={products} />
  </ScreenContainer>
);

export default MainScreen;

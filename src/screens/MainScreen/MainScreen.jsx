import React from 'react-native';

import ProductListTemplate from '../../components/templates/ProductListTemplate';
import SearchBar from '../../components/organisms/SearchBar';
import ScreenContainer from '../../containers/ScreenContainer';
import {products} from '../../constants/data';

const MainScreen = () => (
  <ScreenContainer>
    <SearchBar />
    <ProductListTemplate products={products} />
  </ScreenContainer>
);

export default MainScreen;

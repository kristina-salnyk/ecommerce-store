import React from 'react-native';

import Products from '../../components/organisms/ProductList/ProductList';
import ScreenContainer from '../../containers/ScreenContainer/ScreenContainer';

const MainScreen = () => {
  return (
    <ScreenContainer>
      <Products />
    </ScreenContainer>
  );
};

export default MainScreen;

import React, {FC, useEffect} from 'react';

import ScreenContainer from 'containers/ScreenContainer';
import ProductListTemplate from 'components/templates/ProductListTemplate';
import onScreenOpen from 'utils/onScreenOpen';

const MainScreen: FC = () => {
  useEffect(() => {
    onScreenOpen('Main');
  }, []);

  return (
    <ScreenContainer>
      <ProductListTemplate />
    </ScreenContainer>
  );
};

export default MainScreen;

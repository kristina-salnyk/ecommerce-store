import React, {FC, useEffect} from 'react';

import ScreenContainer from 'containers/ScreenContainer';
import ProductDetailsTemplate from 'components/templates/ProductDetailsTemplate';
import onScreenOpen from 'utils/onScreenOpen';

const ProductDetailsScreen: FC = () => {
  useEffect(() => {
    onScreenOpen('ProductDetails');
  }, []);

  return (
    <ScreenContainer>
      <ProductDetailsTemplate />
    </ScreenContainer>
  );
};

export default ProductDetailsScreen;

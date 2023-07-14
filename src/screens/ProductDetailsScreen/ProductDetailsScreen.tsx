import React, {FC} from 'react';

import ScreenContainer from '../../containers/ScreenContainer';
import ProductDetailsTemplate from '../../components/templates/ProductDetailsTemplate';
import {PRODUCTS} from '../../constants/data';

const ProductDetailsScreen: FC = () => (
  <ScreenContainer>
    <ProductDetailsTemplate product={PRODUCTS[0]} />
  </ScreenContainer>
);

export default ProductDetailsScreen;

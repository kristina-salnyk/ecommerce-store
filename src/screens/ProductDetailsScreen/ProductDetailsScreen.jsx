import React from 'react-native';

import ScreenContainer from '../../containers/ScreenContainer';
import ProductDetailsTemplate from '../../components/templates/ProductDetailsTemplate';
import {products} from '../../constants/data';

const ProductDetailsScreen = () => (
  <ScreenContainer>
    <ProductDetailsTemplate product={products[0]} />
  </ScreenContainer>
);
export default ProductDetailsScreen;

import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import ScreenContainer from '../../containers/ScreenContainer';
import ProductDetailsTemplate from '../../components/templates/ProductDetailsTemplate';
import {RootStackParamList} from '../../navigation/types';
import {PRODUCTS} from '../../constants/data';

type ProductDetailsScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;

const ProductDetailsScreen: FC<ProductDetailsScreenProp> = ({route}) => {
  const {productId} = route.params;
  const product = PRODUCTS.find(item => item.id === productId);

  return (
    <ScreenContainer>
      {product && <ProductDetailsTemplate product={product} />}
    </ScreenContainer>
  );
};

export default ProductDetailsScreen;

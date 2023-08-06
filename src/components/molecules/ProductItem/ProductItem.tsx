import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {MainStackParamList} from '../../../navigation/types';
import ProductCost from '../../atoms/ProductCost';
import ProductImage from '../../atoms/ProductImage';
import getImagePathById from '../../../utils/getImagePathById';
import {PRODUCT_ITEM_IMAGE_SIZE} from '../../../constants/shared';
import {
  ProductItemStyled,
  ProductItemWrap,
  ProductNameStyled,
} from './ProductItem.styled';

interface ProductItemProps {
  id: string;
  name: string;
  price: string;
  priceView: string;
  compareAtPrice: string | null;
  compareAtPriceView: string | null;
  options: {
    itemPercentWidth: number;
  };
}

const ProductItem: FC<ProductItemProps> = ({
  id,
  name,
  price,
  priceView,
  compareAtPrice,
  compareAtPriceView,
  options,
}) => {
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  return (
    <ProductItemWrap
      percentWidth={options.itemPercentWidth}
      onPress={() => navigation.push('ProductDetails', {productId: id})}>
      <ProductItemStyled>
        <ProductImage
          path={getImagePathById(id, PRODUCT_ITEM_IMAGE_SIZE)}
          options={{
            height: PRODUCT_ITEM_IMAGE_SIZE,
            width: PRODUCT_ITEM_IMAGE_SIZE,
          }}
          alt={name}
        />
        <ProductNameStyled text={name} />
        <ProductCost
          price={price}
          priceView={priceView}
          compareAtPrice={compareAtPrice}
          compareAtPriceView={compareAtPriceView}
        />
      </ProductItemStyled>
    </ProductItemWrap>
  );
};

export default ProductItem;

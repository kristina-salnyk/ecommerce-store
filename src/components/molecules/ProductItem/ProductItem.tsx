import React, {FC} from 'react';

import ProductCost from '../../atoms/ProductCost';
import ProductImage from '../../atoms/ProductImage';
import {useAppMainNavigation} from 'navigation/hooks';
import getImagePathById from 'utils/getImagePathById';
import {PRODUCT_ITEM_IMAGE_SIZE} from 'constants/shared';
import {
  ProductItemStyled,
  ProductItemWrap,
  ProductNameStyled,
} from './ProductItem.styled';

interface ProductItemProps {
  id: string;
  name: string;
  slug: string;
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
  slug,
  price,
  priceView,
  compareAtPrice,
  compareAtPriceView,
  options,
}) => {
  const navigation = useAppMainNavigation();

  return (
    <ProductItemWrap
      percentWidth={options.itemPercentWidth}
      onPress={() => navigation.push('ProductDetails', {productSlug: slug})}>
      <ProductItemStyled accessibilityRole="listitem" accessible={true}>
        <ProductImage
          source={{uri: getImagePathById(id, PRODUCT_ITEM_IMAGE_SIZE)}}
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

import {useMemo} from 'react';
import React from 'react-native';
import PropTypes from 'prop-types';

import parseNumber from '../../../utils/parseNumber';
import {
  ProductItemCompareAtPrice,
  ProductItemCost,
  ProductItemDiscount,
  ProductItemImage,
  ProductItemPrice,
  ProductItemStyled,
  ProductItemTitle,
  ProductItemWrap,
} from './ProductItem.styled';

const ProductItem = ({
  name,
  price,
  priceView,
  compareAtPrice,
  compareAtPriceView,
  options,
}) => {
  const priceNum = parseNumber(price);
  const compareAtPriceNum = parseNumber(compareAtPrice);

  const discount = useMemo(
    () =>
      compareAtPriceNum
        ? Math.round(((compareAtPriceNum - priceNum) * 100) / compareAtPriceNum)
        : 0,
    [compareAtPriceNum, priceNum],
  );

  return (
    <ProductItemWrap width={options.width}>
      <ProductItemStyled>
        <ProductItemImage
          source={{uri: 'https://picsum.photos/150/150'}}
          alt={name}
        />
        <ProductItemTitle>{name}</ProductItemTitle>
        <ProductItemCost>
          <ProductItemPrice>{priceView}</ProductItemPrice>
          {compareAtPriceNum > 0 && (
            <ProductItemCompareAtPrice>
              {compareAtPriceView}
            </ProductItemCompareAtPrice>
          )}
          {discount > 0 && (
            <ProductItemDiscount>{`${discount}% Off`}</ProductItemDiscount>
          )}
        </ProductItemCost>
      </ProductItemStyled>
    </ProductItemWrap>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceView: PropTypes.string.isRequired,
  compareAtPrice: PropTypes.string,
  compareAtPriceView: PropTypes.string,
  options: PropTypes.shape({width: PropTypes.number.isRequired}).isRequired,
};

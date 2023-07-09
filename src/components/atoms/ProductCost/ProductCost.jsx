import {useMemo} from 'react';
import React from 'react-native';
import PropTypes from 'prop-types';

import parseNumber from '../../../utils/parseNumber';
import {
  ProductCompareAtPrice,
  ProductCostStyled,
  ProductDiscount,
  ProductPrice,
} from './ProductCost.styled';

const ProductCost = ({
  price,
  compareAtPrice,
  priceView,
  compareAtPriceView,
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
    <ProductCostStyled>
      <ProductPrice>{priceView}</ProductPrice>
      {compareAtPriceNum > 0 && (
        <ProductCompareAtPrice>{compareAtPriceView}</ProductCompareAtPrice>
      )}
      {discount > 0 && <ProductDiscount>{`${discount}% Off`}</ProductDiscount>}
    </ProductCostStyled>
  );
};

export default ProductCost;

ProductCost.propTypes = {
  price: PropTypes.string.isRequired,
  priceView: PropTypes.string.isRequired,
  compareAtPrice: PropTypes.string,
  compareAtPriceView: PropTypes.string,
};

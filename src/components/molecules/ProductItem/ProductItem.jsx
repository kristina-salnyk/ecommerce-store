import {useMemo} from 'react';
import React from 'react-native';
import PropTypes from 'prop-types';

import ProductItemContainer from '../../../containers/ProductItemContainer/ProductItemContainer';
import parseNumber from '../../../utils/parseNumber';
import {
  ProductItemCompareAtPrice,
  ProductItemCost,
  ProductItemDiscount,
  ProductItemImage,
  ProductItemPrice,
  ProductItemStyled,
  ProductItemTitle,
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
    <ProductItemContainer width={options.columnWidth}>
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
    </ProductItemContainer>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceView: PropTypes.string.isRequired,
  compareAtPrice: PropTypes.string,
  compareAtPriceView: PropTypes.string,
  options: PropTypes.shape({columnWidth: PropTypes.number.isRequired})
    .isRequired,
};

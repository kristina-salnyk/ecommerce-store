import React, {FC, useMemo} from 'react';

import parseNumber from '../../../utils/parseNumber';
import {
  ProductCompareAtPrice,
  ProductCostStyled,
  ProductDiscount,
  ProductPrice,
} from './ProductCost.styled';

interface ProductCostProps {
  price: string;
  priceView: string;
  compareAtPrice?: string | null;
  compareAtPriceView?: string | null;
}

const ProductCost: FC<ProductCostProps> = ({
  price,
  priceView,
  compareAtPrice = null,
  compareAtPriceView = null,
}) => {
  const priceNum = parseNumber(price);
  const compareAtPriceNum = parseNumber(compareAtPrice ?? '');

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
      {compareAtPriceNum > 0 && compareAtPriceNum !== priceNum && (
        <ProductCompareAtPrice>{compareAtPriceView}</ProductCompareAtPrice>
      )}
      {discount > 0 && <ProductDiscount>{`${discount}% Off`}</ProductDiscount>}
    </ProductCostStyled>
  );
};

export default ProductCost;

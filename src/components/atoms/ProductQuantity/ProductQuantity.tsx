import React, {FC} from 'react';

import {ProductQuantityStyled} from './ProductQuantity.styled';

interface ProductDescriptionProps {
  num: number;
}

const ProductQuantity: FC<ProductDescriptionProps> = ({num}) => (
  <ProductQuantityStyled>{num}</ProductQuantityStyled>
);

export default ProductQuantity;

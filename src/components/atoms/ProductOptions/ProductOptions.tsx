import React, {FC} from 'react';

import {ProductOptionsStyled} from './ProductOptions.styled';

interface ProductOptionsProps {
  text: string;
}

const ProductOptions: FC<ProductOptionsProps> = ({text}) => (
  <ProductOptionsStyled>{text}</ProductOptionsStyled>
);

export default ProductOptions;

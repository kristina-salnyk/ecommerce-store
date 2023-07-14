import React, {FC} from 'react';

import {ProductNameStyled} from './ProductName.styled';

interface ProductNameProps {
  text: string;
}

const ProductName: FC<ProductNameProps> = ({text}) => (
  <ProductNameStyled>{text}</ProductNameStyled>
);

export default ProductName;

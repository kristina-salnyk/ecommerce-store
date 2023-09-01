import React, {FC} from 'react';
import {TextProps} from 'react-native';

import {ProductNameStyled} from './ProductName.styled';

interface ProductNameProps extends TextProps {
  text: string;
}

const ProductName: FC<ProductNameProps> = ({text, style}) => (
  <ProductNameStyled style={style}>{text}</ProductNameStyled>
);

export default ProductName;

import React, {FC} from 'react';
import {StyleProp} from 'react-native';

import {ProductNameStyled} from './ProductName.styled';

interface ProductNameProps {
  text: string;
  style?: StyleProp<object>;
}

const ProductName: FC<ProductNameProps> = ({text, style}) => (
  <ProductNameStyled style={style}>{text}</ProductNameStyled>
);

export default ProductName;

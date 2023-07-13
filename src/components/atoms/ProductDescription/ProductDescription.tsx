import React, {FC} from 'react';

import {ProductDescriptionStyled} from './ProductDescription.styled';

interface ProductDescriptionProps {
  text: string;
}

const ProductDescription: FC<ProductDescriptionProps> = ({text}) => (
  <ProductDescriptionStyled>{text}</ProductDescriptionStyled>
);

export default ProductDescription;

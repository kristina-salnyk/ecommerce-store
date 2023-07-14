import React, {FC} from 'react';

import {ProductImageStyled} from './ProductImage.styled';

interface ProductImageProps {
  path: string;
  options: {width: number; height: number};
  alt?: string;
}

const ProductImage: FC<ProductImageProps> = ({
  path,
  options,
  alt = 'Product image',
}) => (
  <ProductImageStyled
    source={{uri: path}}
    width={options.width}
    height={options.height}
    alt={alt}
  />
);

export default ProductImage;

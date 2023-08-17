import React, {FC} from 'react';
import {ImageProps} from 'react-native';

import {ProductImageStyled} from './ProductImage.styled';

interface ProductImageProps extends ImageProps {
  options: {width: number; height: number};
  alt?: string;
}

const ProductImage: FC<ProductImageProps> = ({
  source,
  options,
  alt = 'Product image',
  style,
}) => (
  <ProductImageStyled
    source={source}
    width={options.width}
    height={options.height}
    alt={alt}
    style={style}
  />
);

export default ProductImage;

import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {ProductImageStyled} from './ProductImage.styled';

interface ProductImageProps {
  path: string;
  options: {width: number; height: number};
  alt?: string;
  style?: StyleProp<ViewStyle>;
}

const ProductImage: FC<ProductImageProps> = ({
  path,
  options,
  alt = 'Product image',
  style,
}) => (
  <ProductImageStyled
    source={{uri: path}}
    width={options.width}
    height={options.height}
    alt={alt}
    style={style}
  />
);

export default ProductImage;

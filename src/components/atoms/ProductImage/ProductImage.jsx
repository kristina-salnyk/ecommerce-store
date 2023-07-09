import React from 'react';
import PropTypes from 'prop-types';

import {ProductImageStyled} from './ProductImage.styled';

const ProductImage = ({image, alt = 'Product image', options}) => (
  <ProductImageStyled source={{uri: image}} alt={alt} {...options} />
);

export default ProductImage;

ProductImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  options: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
};

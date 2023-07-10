import React from 'react-native';
import PropTypes from 'prop-types';

import {ProductDescriptionStyled} from './ProductDescription.styled';

const ProductDescription = ({text}) => (
  <ProductDescriptionStyled>{text}</ProductDescriptionStyled>
);

export default ProductDescription;

ProductDescription.propTypes = {
  text: PropTypes.string.isRequired,
};

import React from 'react-native';
import PropTypes from 'prop-types';

import {ProductNameStyled} from './ProductName.styled';

const ProductName = ({text}) => <ProductNameStyled>{text}</ProductNameStyled>;

export default ProductName;

ProductName.propTypes = {
  text: PropTypes.string.isRequired,
};

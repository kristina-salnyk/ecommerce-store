import React from 'react-native';
import PropTypes from 'prop-types';

import {ProductNameStyled} from './ProductName.styled';

const ProductName = ({name}) => <ProductNameStyled>{name}</ProductNameStyled>;

export default ProductName;

ProductName.propTypes = {
  name: PropTypes.string.isRequired,
};

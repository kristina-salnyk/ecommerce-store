import React from 'react-native';
import PropTypes from 'prop-types';

import {ProductItemContainerStyled} from './ProductItemContainer.styled';

const ProductItemContainer = ({width, children}) => {
  return (
    <ProductItemContainerStyled width={width}>
      {children}
    </ProductItemContainerStyled>
  );
};

export default ProductItemContainer;

ProductItemContainer.propTypes = {
  width: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

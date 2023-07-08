import React from 'react-native';
import PropTypes from 'prop-types';

import ProductList from '../../organisms/ProductList';
import useOrientation from '../../../hooks/useOrientation';
import {ProductListTemplateStyled} from './ProductListTemplate.styled';

const ProductListTemplate = ({products}) => {
  const orientation = useOrientation();
  const columnNum = orientation === 'landscape' ? 4 : 2;
  const columnWidth = 100 / columnNum;

  return (
    <ProductListTemplateStyled>
      <ProductList products={products} options={{columnNum, columnWidth}} />
    </ProductListTemplateStyled>
  );
};

export default ProductListTemplate;

ProductListTemplate.propTypes = {
  products: PropTypes.array.isRequired,
};

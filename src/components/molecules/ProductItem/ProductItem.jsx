import React from 'react-native';
import PropTypes from 'prop-types';

import ProductName from '../../atoms/ProductName';
import ProductCost from '../../atoms/ProductCost';
import ProductImage from '../../atoms/ProductImage';
import {ProductItemStyled, ProductItemWrap} from './ProductItem.styled';

const ProductItem = ({
  name,
  price,
  priceView,
  compareAtPrice,
  compareAtPriceView,
  options,
}) => (
  <ProductItemWrap width={options.width}>
    <ProductItemStyled>
      <ProductImage
        image="https://picsum.photos/150/150"
        alt={name}
        options={{height: 150}}
      />
      <ProductName name={name} />
      <ProductCost
        price={price}
        priceView={priceView}
        compareAtPrice={compareAtPrice}
        compareAtPriceView={compareAtPriceView}
      />
    </ProductItemStyled>
  </ProductItemWrap>
);

export default ProductItem;

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceView: PropTypes.string.isRequired,
  compareAtPrice: PropTypes.string,
  compareAtPriceView: PropTypes.string,
  options: PropTypes.shape({width: PropTypes.number.isRequired}).isRequired,
};

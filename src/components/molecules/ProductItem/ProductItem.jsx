import React from 'react-native';
import PropTypes from 'prop-types';

import ProductName from '../../atoms/ProductName';
import ProductCost from '../../atoms/ProductCost';
import ProductImage from '../../atoms/ProductImage';
import {ProductItemStyled, ProductItemWrap} from './ProductItem.styled';

const ProductItem = ({
  id,
  name,
  price,
  priceView,
  compareAtPrice,
  compareAtPriceView,
  options,
}) => (
  <ProductItemWrap width={options.itemWidth}>
    <ProductItemStyled>
      <ProductImage
        image={`https://picsum.photos/id/${id}/150/150`}
        alt={name}
        options={{height: 150}}
      />
      <ProductName text={name} />
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceView: PropTypes.string.isRequired,
  compareAtPrice: PropTypes.string,
  compareAtPriceView: PropTypes.string,
  options: PropTypes.shape({itemWidth: PropTypes.number.isRequired}).isRequired,
};

import React from 'react-native';
import PropTypes from 'prop-types';

import ProductName from '../../atoms/ProductName';
import ProductCost from '../../atoms/ProductCost';

const ProductDetails = ({
  name,
  price,
  priceView,
  compareAtPrice,
  compareAtPriceView,
}) => (
  <>
    <ProductName name={name} />
    <ProductCost
      price={price}
      priceView={priceView}
      compareAtPrice={compareAtPrice}
      compareAtPriceView={compareAtPriceView}
    />
  </>
);

export default ProductDetails;

ProductDetails.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceView: PropTypes.string.isRequired,
  compareAtPrice: PropTypes.string,
  compareAtPriceView: PropTypes.string,
};

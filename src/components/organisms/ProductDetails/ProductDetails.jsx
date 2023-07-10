import {useState} from 'react';
import React, {View} from 'react-native';
import PropTypes from 'prop-types';

import ProductName from '../../atoms/ProductName';
import ProductCost from '../../atoms/ProductCost';
import HorizontalLine from '../../atoms/HorizontalLine';
import ProductDescription from '../../atoms/ProductDescription';
import ProductOptions from '../../atoms/ProductOptions';
import Title from '../../atoms/Title';

const colors = [
  {id: '1', name: 'Blue'},
  {id: '2', name: 'Red'},
  {id: '3', name: 'Black'},
  {id: '4', name: 'Gray'},
];

const ProductDetails = ({
  name,
  description,
  price,
  priceView,
  compareAtPrice,
  compareAtPriceView,
}) => {
  const [selectedColorId, setSelectedColorId] = useState(null);

  return (
    <View>
      <ProductName text={name} />
      <ProductCost
        price={price}
        priceView={priceView}
        compareAtPrice={compareAtPrice}
        compareAtPriceView={compareAtPriceView}
      />
      <HorizontalLine />
      <Title text="Select Color" />
      <ProductOptions
        options={colors}
        selectedId={selectedColorId}
        onSelect={setSelectedColorId}
      />
      <HorizontalLine />
      <Title text="Description" />
      <ProductDescription text={description} />
    </View>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceView: PropTypes.string.isRequired,
  compareAtPrice: PropTypes.string,
  compareAtPriceView: PropTypes.string,
};

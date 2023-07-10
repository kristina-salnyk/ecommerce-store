import {useState} from 'react';
import React, {RefreshControl, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

import ImageSlider from '../../molecules/ImageSlider';
import ProductName from '../../atoms/ProductName';
import ProductCost from '../../atoms/ProductCost';
import HorizontalLine from '../../atoms/HorizontalLine';
import ProductDescription from '../../atoms/ProductDescription';
import ProductOptions from '../../atoms/ProductOptions';
import Title from '../../atoms/Title';
import useRefreshing from '../../../hooks/useRefreshing';
import {colors} from '../../../constants/data';
import {ProductDetailsWrap} from './ProductDetails.styled';

const ProductDetails = ({
  images,
  name,
  description,
  price,
  priceView,
  compareAtPrice,
  compareAtPriceView,
  options,
}) => {
  const [refreshing, onRefresh] = useRefreshing();
  const [selectedColorId, setSelectedColorId] = useState(null);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <ProductDetailsWrap>
        <ImageSlider images={images} options={options} />
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
      </ProductDetailsWrap>
    </ScrollView>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  images: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceView: PropTypes.string.isRequired,
  compareAtPrice: PropTypes.string,
  compareAtPriceView: PropTypes.string,
  options: PropTypes.shape({
    sliderHeight: PropTypes.number.isRequired,
  }),
};

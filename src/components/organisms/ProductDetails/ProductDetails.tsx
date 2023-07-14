import React, {FC, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';

import ImageSlider from '../../molecules/ImageSlider';
import ProductName from '../../atoms/ProductName';
import ProductCost from '../../atoms/ProductCost';
import HorizontalLine from '../../atoms/HorizontalLine';
import ProductDescription from '../../atoms/ProductDescription';
import ProductSelect from '../../atoms/ProductSelect';
import Title from '../../atoms/Title';
import useRefreshing from '../../../hooks/useRefreshing';
import ProductProperty from '../../../interfaces/ProductProperty';
import {PRODUCT_COLORS} from '../../../constants/data';
import {ProductDetailsWrap} from './ProductDetails.styled';

interface ProductDetailsProps {
  images: ProductProperty[];
  name: string;
  description: string;
  price: string;
  priceView: string;
  compareAtPrice: string | null;
  compareAtPriceView: string | null;
  options: {
    sliderSize?: number;
  };
}

const ProductDetails: FC<ProductDetailsProps> = ({
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
  const [selectedColorId, setSelectedColorId] = useState<string>('');

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
        <ProductSelect
          variants={PRODUCT_COLORS}
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

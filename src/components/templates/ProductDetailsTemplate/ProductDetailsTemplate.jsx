import {useState} from 'react';
import React, {View} from 'react-native';

import ImageSlider from '../../organisms/ImageSlider/ImageSlider';
import useOrientation from '../../../hooks/useOrientation';
import useDimensions from '../../../hooks/useDimensions';
import {ProductDetailsTemplateStyled} from './ProductDetailsTemplate.styled';
import PropTypes from 'prop-types';

const ProductDetailsTemplate = ({product}) => {
  const orientation = useOrientation();
  const dimensions = useDimensions();
  const sliderHeight =
    orientation === 'landscape' ? dimensions.height - 80 : 300;
  const [sliderWidth, setSliderWidth] = useState(300);

  const onLayoutSliderView = event => {
    setSliderWidth(event.nativeEvent.layout.width);
  };

  return (
    <ProductDetailsTemplateStyled>
      <View onLayout={onLayoutSliderView}>
        <ImageSlider
          images={product.images}
          options={{sliderWidth, sliderHeight}}
        />
      </View>
    </ProductDetailsTemplateStyled>
  );
};

export default ProductDetailsTemplate;

ProductDetailsTemplate.propTypes = {
  product: PropTypes.shape({images: PropTypes.array.isRequired}).isRequired,
};

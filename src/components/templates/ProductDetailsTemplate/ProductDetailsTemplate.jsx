import React from 'react-native';

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

  return (
    <ProductDetailsTemplateStyled>
      <ImageSlider images={product.images} options={{sliderHeight}} />
    </ProductDetailsTemplateStyled>
  );
};

export default ProductDetailsTemplate;

ProductDetailsTemplate.propTypes = {
  product: PropTypes.shape({images: PropTypes.array.isRequired}).isRequired,
};

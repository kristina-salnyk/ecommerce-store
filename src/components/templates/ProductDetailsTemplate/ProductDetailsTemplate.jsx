import React, {ScrollView} from 'react-native';
import PropTypes from 'prop-types';

import ImageSlider from '../../organisms/ImageSlider';
import useOrientation from '../../../hooks/useOrientation';
import useDimensions from '../../../hooks/useDimensions';
import ProductDetails from '../../organisms/ProductDetails';
import {ProductDetailsTemplateStyled} from './ProductDetailsTemplate.styled';

const ProductDetailsTemplate = ({product}) => {
  const orientation = useOrientation();
  const dimensions = useDimensions();
  const sliderHeight =
    orientation === 'landscape' ? dimensions.height - 80 : 300;

  return (
    <ScrollView>
      <ProductDetailsTemplateStyled>
        <ImageSlider images={product.images} options={{sliderHeight}} />
        <ProductDetails
          name={product.attributes.name}
          price={product.attributes.price}
          priceView={product.attributes.display_price}
          compareAtPrice={product.attributes.compare_at_price}
          compareAtPriceView={product.attributes.display_compare_at_price}
        />
      </ProductDetailsTemplateStyled>
    </ScrollView>
  );
};

export default ProductDetailsTemplate;

ProductDetailsTemplate.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.array.isRequired,
    attributes: PropTypes.object.isRequired,
  }).isRequired,
};

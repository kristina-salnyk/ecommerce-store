import React, {ScrollView} from 'react-native';
import PropTypes from 'prop-types';

import ImageSlider from '../../organisms/ImageSlider';
import useOrientation from '../../../hooks/useOrientation';
import useDimensions from '../../../hooks/useDimensions';
import ProductDetails from '../../organisms/ProductDetails';
import Button from '../../atoms/Button';
import {
  ProductDetailsTemplateStyled,
  ProductDetailsWrap,
} from './ProductDetailsTemplate.styled';

const ProductDetailsTemplate = ({product}) => {
  const orientation = useOrientation();
  const dimensions = useDimensions();
  const sliderHeight =
    orientation === 'landscape' ? dimensions.height - 140 : 300;

  return (
    <ProductDetailsTemplateStyled>
      <ScrollView>
        <ProductDetailsWrap>
          <ImageSlider images={product.images} options={{sliderHeight}} />
          <ProductDetails
            name={product.attributes.name}
            description={product.attributes.description}
            price={product.attributes.price}
            priceView={product.attributes.display_price}
            compareAtPrice={product.attributes.compare_at_price}
            compareAtPriceView={product.attributes.display_compare_at_price}
          />
        </ProductDetailsWrap>
      </ScrollView>
      <Button text="Add to cart" onPress={() => {}} />
    </ProductDetailsTemplateStyled>
  );
};

export default ProductDetailsTemplate;

ProductDetailsTemplate.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.array.isRequired,
    attributes: PropTypes.object.isRequired,
  }).isRequired,
};

import React from 'react-native';
import PropTypes from 'prop-types';

import useOrientation from '../../../hooks/useOrientation';
import useDimensions from '../../../hooks/useDimensions';
import ProductDetails from '../../organisms/ProductDetails';
import Button from '../../atoms/Button';
import {ProductDetailsTemplateStyled} from './ProductDetailsTemplate.styled';

const ProductDetailsTemplate = ({product}) => {
  const orientation = useOrientation();
  const dimensions = useDimensions();
  const sliderHeight =
    orientation === 'landscape' ? dimensions.height - 140 : 300;

  return (
    <ProductDetailsTemplateStyled>
      <ProductDetails
        images={product.relationships.images.data}
        name={product.attributes.name}
        description={product.attributes.description}
        price={product.attributes.price}
        priceView={product.attributes.display_price}
        compareAtPrice={product.attributes.compare_at_price}
        compareAtPriceView={product.attributes.display_compare_at_price}
        options={{sliderHeight}}
      />
      <Button text="Add to cart" onPress={() => {}} />
    </ProductDetailsTemplateStyled>
  );
};

export default ProductDetailsTemplate;

ProductDetailsTemplate.propTypes = {
  product: PropTypes.shape({
    attributes: PropTypes.object.isRequired,
    relationships: PropTypes.object.isRequired,
  }).isRequired,
};

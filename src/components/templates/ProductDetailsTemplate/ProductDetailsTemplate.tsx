import React, {FC, useCallback} from 'react';

import useOrientation from '../../../hooks/useOrientation';
import ProductDetails from '../../organisms/ProductDetails';
import Button from '../../atoms/Button';
import Product from '../../../interfaces/Product';
import {ProductDetailsTemplateStyled} from './ProductDetailsTemplate.styled';
import useDimensions from '../../../hooks/useDimensions';
import {
  ORIENTATION_TYPES,
  SLIDER_BOTTOM_INDENT,
} from '../../../constants/shared';

interface ProductDetailsTemplateProps {
  product: Product;
}

const ProductDetailsTemplate: FC<ProductDetailsTemplateProps> = ({product}) => {
  const orientation = useOrientation();
  const dimensions = useDimensions();
  const sliderSize = dimensions.height - SLIDER_BOTTOM_INDENT;

  const addProductToCart = useCallback(() => {}, []);

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
        options={{
          ...(orientation === ORIENTATION_TYPES.LANDSCAPE && {
            sliderSize: sliderSize,
          }),
        }}
      />
      <Button text="Add to cart" onPress={addProductToCart} />
    </ProductDetailsTemplateStyled>
  );
};

export default ProductDetailsTemplate;

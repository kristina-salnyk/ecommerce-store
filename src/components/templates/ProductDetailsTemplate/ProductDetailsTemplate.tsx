import React, {FC} from 'react';

import ProductDetails from '../../organisms/ProductDetails';
import useOrientation from '../../../hooks/useOrientation';
import useDimensions from '../../../hooks/useDimensions';
import {
  ORIENTATION_TYPES,
  SLIDER_BOTTOM_INDENT,
} from '../../../constants/shared';
import {ProductDetailsTemplateStyled} from './ProductDetailsTemplate.styled';

const ProductDetailsTemplate: FC = () => {
  const orientation = useOrientation();
  const dimensions = useDimensions();
  const sliderSize = dimensions.height - SLIDER_BOTTOM_INDENT;

  return (
    <ProductDetailsTemplateStyled>
      <ProductDetails
        options={{
          ...(orientation === ORIENTATION_TYPES.LANDSCAPE && {
            sliderSize: sliderSize,
          }),
        }}
      />
    </ProductDetailsTemplateStyled>
  );
};

export default ProductDetailsTemplate;

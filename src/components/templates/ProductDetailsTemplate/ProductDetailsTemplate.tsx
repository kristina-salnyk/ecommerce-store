import React, {FC, useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import useOrientation from '../../../hooks/useOrientation';
import useDimensions from '../../../hooks/useDimensions';
import ProductDetails from '../../organisms/ProductDetails';
import Button from '../../atoms/Button';
import Product from '../../../interfaces/Product';
import {RootStackParamList} from '../../../navigation/types';
import {
  MODAL_OPTIONS,
  ORIENTATION_TYPES,
  SLIDER_BOTTOM_INDENT,
} from '../../../constants/shared';
import {ProductDetailsTemplateStyled} from './ProductDetailsTemplate.styled';

interface ProductDetailsTemplateProps {
  product: Product;
}

const ProductDetailsTemplate: FC<ProductDetailsTemplateProps> = ({product}) => {
  const [selectedColorId, setSelectedColorId] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const orientation = useOrientation();
  const dimensions = useDimensions();
  const sliderSize = dimensions.height - SLIDER_BOTTOM_INDENT;

  const addProductToCart = useCallback(() => {
    if (!selectedColorId) {
      navigation.navigate('Modal', {
        title: 'Select color',
        message: 'Please select your color to add this item in your cart',
        options: MODAL_OPTIONS.ERROR,
      });
      return;
    }

    navigation.navigate('Modal', {
      title: 'Product added to your cart',
      options: MODAL_OPTIONS.SUCCESS,
    });
  }, [navigation, selectedColorId]);

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
        selectedColorId={selectedColorId}
        onSelectColor={setSelectedColorId}
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

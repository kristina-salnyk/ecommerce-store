import React, {FC, useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../../navigation/types';
import Button from '../../atoms/Button';
import ProductDetails from '../../organisms/ProductDetails';
import useOrientation from '../../../hooks/useOrientation';
import useDimensions from '../../../hooks/useDimensions';
import Product from '../../../interfaces/Product';
import {useAuth} from '../../../contexts/AuthContext';
import {
  MODAL_MESSAGES,
  MODAL_OPTIONS,
  MODAL_TITLES,
  MODAL_TYPES,
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
  const {
    state: {token},
  } = useAuth();

  const addProductToCart = useCallback(() => {
    if (!token) {
      navigation.navigate('Modal', {
        type: MODAL_TYPES.LOGIN,
        title: MODAL_TITLES.userNotAuthorized,
        message: MODAL_MESSAGES.userNotAuthorized,
        options: MODAL_OPTIONS.ERROR,
      });
      return;
    }

    if (!selectedColorId) {
      navigation.navigate('Modal', {
        type: MODAL_TYPES.INFO,
        title: MODAL_TITLES.colorNotSelected,
        message: MODAL_MESSAGES.colorNotSelected,
        options: MODAL_OPTIONS.ERROR,
      });
      return;
    }

    navigation.navigate('Modal', {
      type: MODAL_TYPES.INFO,
      title: MODAL_TITLES.productAdded,
      options: MODAL_OPTIONS.SUCCESS,
    });
  }, [navigation, selectedColorId, token]);

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

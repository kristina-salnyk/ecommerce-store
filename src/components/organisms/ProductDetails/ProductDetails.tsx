import React, {FC, useCallback, useEffect, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  MainStackParamList,
  RootStackParamList,
} from '../../../navigation/types';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import ProductCost from '../../atoms/ProductCost';
import HorizontalLine from '../../atoms/HorizontalLine';
import ProductSelect from '../../atoms/ProductSelect';
import ProductDescription from '../../atoms/ProductDescription';
import Splash from '../../molecules/Splash';
import ImageSlider from '../../molecules/ImageSlider';
import NotificationBox from '../NotificationBox';
import noResults from '../../../assets/images/no-results.png';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {getProductThunk} from '../../../store/product/thunk';
import {updateIsRefreshing} from '../../../store/product/actionCreators';
import {
  selectError,
  selectIsLoading,
  selectIsRefreshing,
  selectProduct,
} from '../../../store/product/selectors';
import {selectColorOptions} from '../../../store/products/selectors';
import {selectToken} from '../../../store/account/selectors';
import {
  MODAL_OPTIONS,
  MODAL_TYPES,
  NOTIFICATIONS,
} from '../../../constants/shared';
import {ProductDetailsWrap, ProductNameStyled} from './ProductDetails.styled';

interface ProductDetailsProps {
  options: {
    sliderSize?: number;
  };
}

const ProductDetails: FC<ProductDetailsProps> = ({options}) => {
  const [selectedColorId, setSelectedColorId] = useState<string>('');
  const route = useRoute<RouteProp<MainStackParamList, 'ProductDetails'>>();
  const {productSlug} = route.params;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  const token = useAppSelector(selectToken);
  const product = useAppSelector(selectProduct);
  const colorOptions = useAppSelector(selectColorOptions);
  const isLoading = useAppSelector(selectIsLoading);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const error = useAppSelector(selectError);

  const getProduct = useCallback(() => {
    dispatch(getProductThunk(productSlug));
  }, [dispatch, productSlug]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const refreshProduct = useCallback(() => {
    dispatch(updateIsRefreshing(true));
    getProduct();
  }, [getProduct, dispatch]);

  const addProductToCart = useCallback(() => {
    if (!token) {
      navigation.navigate('Modal', {
        type: MODAL_TYPES.auth,
        title: NOTIFICATIONS.notAuthorizedModal.title,
        message: NOTIFICATIONS.notAuthorizedModal.message,
        options: MODAL_OPTIONS.error,
      });
      return;
    }

    if (!selectedColorId) {
      navigation.navigate('Modal', {
        type: MODAL_TYPES.confirm,
        title: NOTIFICATIONS.selectColorModal.title,
        message: NOTIFICATIONS.selectColorModal.message,
        options: MODAL_OPTIONS.error,
      });
      return;
    }

    navigation.navigate('Modal', {
      type: MODAL_TYPES.confirm,
      title: NOTIFICATIONS.productAddedModal.title,
      options: MODAL_OPTIONS.success,
    });
  }, [navigation, selectedColorId, token]);

  if (isLoading && !isRefreshing) {
    return <Splash />;
  }

  if (error) {
    return (
      <NotificationBox
        imageSource={noResults}
        title={NOTIFICATIONS.loadingFailedNotification.title}
        message={NOTIFICATIONS.loadingFailedNotification.message}
        action="Refresh"
        onPress={getProduct}
      />
    );
  }

  if (!product) {
    return (
      <NotificationBox
        imageSource={noResults}
        title={NOTIFICATIONS.emptyProductDetailsNotification.title}
        message={NOTIFICATIONS.emptyProductDetailsNotification.message}
        action="Refresh"
        onPress={getProduct}
      />
    );
  }

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refreshProduct}
          />
        }>
        <ProductDetailsWrap>
          <ImageSlider
            images={product.relationships.images.data}
            options={options}
          />
          <ProductNameStyled text={product.attributes.name} />
          <ProductCost
            price={product.attributes.price}
            priceView={product.attributes.display_price}
            compareAtPrice={product.attributes.compare_at_price}
            compareAtPriceView={product.attributes.display_compare_at_price}
          />
          <HorizontalLine />
          <Title text="Select Color" />
          <ProductSelect
            colorOptions={colorOptions}
            selectedId={selectedColorId}
            onSelect={setSelectedColorId}
          />
          <HorizontalLine />
          <Title text="Description" />
          <ProductDescription text={product.attributes.description} />
        </ProductDetailsWrap>
      </ScrollView>
      <Button text="Add to cart" onPress={addProductToCart} />
    </>
  );
};

export default ProductDetails;

import React, {FC, useCallback, useEffect, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {MainStackParamList} from '../../../navigation/types';
import Title from '../../atoms/Title';
import Button from '../../atoms/Button';
import ProductCost from '../../atoms/ProductCost';
import HorizontalLine from '../../atoms/HorizontalLine';
import ProductSelect from '../../atoms/ProductSelect';
import ProductDescription from '../../atoms/ProductDescription';
import Splash from '../../molecules/Splash';
import ImageSlider from '../../molecules/ImageSlider';
import NotificationBox from '../NotificationBox';
import {useAppRootNavigation} from '../../../navigation/hooks';
import {getProductThunk} from '../../../store/product/thunk';
import {updateIsRefreshing} from '../../../store/product/actionCreators';
import {
  selectError,
  selectIsLoading,
  selectIsRefreshing,
  selectProduct,
} from '../../../store/product/selectors';
import {selectColorOptions} from '../../../store/products/selectors';
import {selectToken} from '../../../store/auth/selectors';
import {addCartItemThunk} from '../../../store/cart/thunk';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import noResults from '../../../assets/images/no-results.png';
import ProductOption from '../../../interfaces/ProductOption';
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
  const [color, setColor] = useState<ProductOption>();
  const route = useRoute<RouteProp<MainStackParamList, 'ProductDetails'>>();
  const {productSlug} = route.params;
  const navigation = useAppRootNavigation();
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

  const onSelectColor = useCallback(
    (id: string) => {
      const selectedColor = colorOptions.find(option => option.id === id);
      setColor(selectedColor);
    },
    [colorOptions],
  );

  const onProductAdded = useCallback(() => {
    navigation.navigate('Modal', {
      type: MODAL_TYPES.confirm,
      title: NOTIFICATIONS.productAddedModal.title,
      options: MODAL_OPTIONS.success,
    });
  }, [navigation]);

  const onProductNotAdded = useCallback(() => {
    navigation.navigate('Modal', {
      type: MODAL_TYPES.confirm,
      title: NOTIFICATIONS.productNotAddedModal.title,
      message: NOTIFICATIONS.productNotAddedModal.message,
      options: MODAL_OPTIONS.error,
    });
  }, [navigation]);

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

    if (!color) {
      navigation.navigate('Modal', {
        type: MODAL_TYPES.confirm,
        title: NOTIFICATIONS.selectColorModal.title,
        message: NOTIFICATIONS.selectColorModal.message,
        options: MODAL_OPTIONS.error,
      });
      return;
    }

    if (!product) {
      return;
    }

    dispatch(
      addCartItemThunk(
        {
          id: product.id,
          quantity: 1,
          options: {color: color.name},
        },
        onProductAdded,
        onProductNotAdded,
      ),
    );
  }, [
    token,
    color,
    product,
    dispatch,
    onProductAdded,
    onProductNotAdded,
    navigation,
  ]);

  if (isLoading && !isRefreshing) {
    return <Splash />;
  }

  if (error) {
    return (
      <NotificationBox
        imageSource={noResults}
        title={NOTIFICATIONS.loadingFailedNotification.title}
        message={NOTIFICATIONS.loadingFailedNotification.message}
        linkText="Refresh"
        onPressLink={getProduct}
      />
    );
  }

  if (!product) {
    return (
      <NotificationBox
        imageSource={noResults}
        title={NOTIFICATIONS.emptyProductDetailsNotification.title}
        message={NOTIFICATIONS.emptyProductDetailsNotification.message}
        linkText="Refresh"
        onPressLink={getProduct}
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
            selectedId={color?.id ?? ''}
            onSelect={onSelectColor}
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

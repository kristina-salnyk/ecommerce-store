import React, {FC, ReactElement, useCallback, useEffect, useState} from 'react';
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
import {
  useAppDispatch,
  useAppSelector,
  useAppThunkDispatch,
} from '../../../store/hooks';
import {getProductThunk} from '../../../store/product/thunk';
import {updateIsRefreshing} from '../../../store/product/actionCreators';
import {
  selectError,
  selectIsLoading,
  selectIsRefreshing,
  selectItem,
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
  const thunkDispatch = useAppThunkDispatch();

  const token = useAppSelector(selectToken);
  const colorOptions = useAppSelector(selectColorOptions);
  const product = useAppSelector(selectItem);
  const isLoading = useAppSelector(selectIsLoading);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const error = useAppSelector(selectError);

  const getProduct = useCallback(() => {
    (async () => {
      thunkDispatch(getProductThunk(productSlug));
    })();
  }, [thunkDispatch, productSlug]);

  useEffect(() => {
    getProduct();
  }, [getProduct, productSlug]);

  const refreshProduct = useCallback(() => {
    dispatch(updateIsRefreshing(true));
    getProduct();
  }, [dispatch, getProduct]);

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

  const renderEmptyComponent = (): ReactElement => {
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
    return (
      <NotificationBox
        imageSource={noResults}
        title={NOTIFICATIONS.emptyProductDetailsNotification.title}
        message={NOTIFICATIONS.emptyProductDetailsNotification.message}
        action="Refresh"
        onPress={getProduct}
      />
    );
  };

  return (
    <>
      {product ? (
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
      ) : (
        renderEmptyComponent()
      )}
    </>
  );
};

export default ProductDetails;

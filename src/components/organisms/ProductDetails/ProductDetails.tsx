import React, {FC, ReactElement, useCallback, useEffect, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

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
  MainStackParamList,
  RootStackParamList,
} from '../../../navigation/types';
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
import {useAuth} from '../../../contexts/AuthContext';
import {
  MODAL_MESSAGES,
  MODAL_OPTIONS,
  MODAL_TITLES,
  MODAL_TYPES,
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
  const {
    state: {token},
  } = useAuth();

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
        type: MODAL_TYPES.AUTH,
        title: MODAL_TITLES.userNotAuthorized,
        message: MODAL_MESSAGES.userNotAuthorized,
        options: MODAL_OPTIONS.ERROR,
      });
      return;
    }

    if (!selectedColorId) {
      navigation.navigate('Modal', {
        type: MODAL_TYPES.CONFIRM,
        title: MODAL_TITLES.colorNotSelected,
        message: MODAL_MESSAGES.colorNotSelected,
        options: MODAL_OPTIONS.ERROR,
      });
      return;
    }

    navigation.navigate('Modal', {
      type: MODAL_TYPES.CONFIRM,
      title: MODAL_TITLES.productAdded,
      options: MODAL_OPTIONS.SUCCESS,
    });
  }, [navigation, selectedColorId, token]);

  const colorOptions = useAppSelector(selectColorOptions);
  const product = useAppSelector(selectItem);
  const isLoading = useAppSelector(selectIsLoading);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const error = useAppSelector(selectError);

  if (isLoading && !isRefreshing) {
    return <Splash />;
  }

  const renderEmptyComponent = (): ReactElement => {
    if (error) {
      return (
        <NotificationBox
          imageSource={noResults}
          title="Error!"
          message="Something went wrong. Please try again later"
          action="Refresh"
          onPress={getProduct}
        />
      );
    }
    return (
      <NotificationBox
        imageSource={noResults}
        title="Product Details is Empty!"
        message="No result have been received"
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

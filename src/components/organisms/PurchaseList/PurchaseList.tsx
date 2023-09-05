import React, {FC, useCallback, useEffect} from 'react';
import {FlatList, RefreshControl} from 'react-native';

import Splash from '../../molecules/Splash';
import PurchaseItem from '../../molecules/PurchaseItem';
import PriceDetails from '../../molecules/PriceDetails';
import EmptyPurchaseList from '../../molecules/EmptyPurchaseList';
import NotificationBox from '../NotificationBox';
import {selectToken} from '../../../store/account/selectors';
import {
  selectCart,
  selectError,
  selectIsLoading,
  selectIsRefreshing,
  selectItems,
} from '../../../store/cart/selectors';
import {getCartThunk} from '../../../store/cart/thunk';
import {updateIsRefreshing} from '../../../store/cart/actionCreators';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {
  useAppMainNavigation,
  useAppRootNavigation,
} from '../../../navigation/hooks';
import notLogged from '../../../assets/images/profile.png';
import {NOTIFICATIONS} from '../../../constants/shared';
import {ButtonStyled} from './PurchaseList.styled';

const PurchaseList: FC = () => {
  const rootNavigation = useAppRootNavigation();
  const navigation = useAppMainNavigation();

  const dispatch = useAppDispatch();

  const token = useAppSelector(selectToken);
  const cart = useAppSelector(selectCart);
  const purchases = useAppSelector(selectItems);
  const isLoading = useAppSelector(selectIsLoading);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const error = useAppSelector(selectError);

  const getCart = useCallback(() => {
    dispatch(getCartThunk());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      getCart();
    }
  }, [getCart, token]);

  const refreshCart = useCallback(() => {
    dispatch(updateIsRefreshing(true));
    getCart();
  }, [dispatch, getCart]);

  const onPressLoginNow = useCallback(() => {
    rootNavigation.reset({
      index: 0,
      routes: [{name: 'Root'}],
    });
  }, [rootNavigation]);

  const onPressSignUp = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'SignUp'}],
    });
  }, [navigation]);

  const proceedToPayment = useCallback(() => {}, []);

  if (!token) {
    return (
      <NotificationBox
        imageSource={notLogged}
        title={NOTIFICATIONS.notLoggedNotification.title}
        message={NOTIFICATIONS.notLoggedNotification.message}
        buttonText="Login now"
        onPressButton={onPressLoginNow}
        linkText="New here? Sign Up"
        onPressLink={onPressSignUp}
      />
    );
  }

  if (isLoading && !isRefreshing) {
    return <Splash />;
  }

  return (
    <>
      <FlatList
        data={purchases}
        renderItem={({item}) => (
          <PurchaseItem
            id={item.id}
            productId={item.relationships.variant.data.id}
            name={item.attributes.name}
            options={item.attributes.options_text}
            price={item.attributes.pre_tax_amount}
            priceView={item.attributes.display_pre_tax_amount}
            promo={item.attributes.promo_total}
            currency={item.attributes.currency}
            quantity={item.attributes.quantity}
          />
        )}
        ListEmptyComponent={
          <EmptyPurchaseList error={error} onPressRefresh={getCart} />
        }
        ListFooterComponent={
          cart && purchases.length > 0 ? (
            <PriceDetails
              priceView={cart.attributes.display_pre_tax_item_amount}
              quantity={cart.attributes.item_count}
              deliveryView={cart.attributes.display_ship_total}
              discountView={cart.attributes.display_promo_total}
              taxView={cart.attributes.display_tax_total}
              totalView={cart.attributes.display_total}
            />
          ) : null
        }
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={refreshCart} />
        }
      />
      {purchases.length > 0 && (
        <ButtonStyled text="Proceed to payment" onPress={proceedToPayment} />
      )}
    </>
  );
};

export default PurchaseList;

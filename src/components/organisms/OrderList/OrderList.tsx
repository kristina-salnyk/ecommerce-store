import React, {FC, useCallback, useEffect} from 'react';
import {FlatList, RefreshControl} from 'react-native';

import NotificationBox from '../NotificationBox';
import Splash from '../../molecules/Splash';
import OrderItem from '../../molecules/OrderItem';
import EmptyOrderList from '../../molecules/EmptyOrderList';
import {useAppMainNavigation, useAppRootNavigation} from 'navigation/hooks';
import {selectToken} from 'store/auth/selectors';
import {updateIsRefreshing} from 'store/orders/actionCreators';
import {
  selectError,
  selectIsLoading,
  selectIsRefreshing,
  selectItems,
} from 'store/orders/selectors';
import {getOrdersThunk} from 'store/orders/thunk';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import notLogged from '../../../assets/images/orders.png';
import {NOTIFICATIONS} from 'constants/shared';

const OrderList: FC = () => {
  const rootNavigation = useAppRootNavigation();
  const navigation = useAppMainNavigation();
  const dispatch = useAppDispatch();

  const token = useAppSelector(selectToken);
  const orders = useAppSelector(selectItems);
  const isLoading = useAppSelector(selectIsLoading);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const error = useAppSelector(selectError);

  const getOrders = useCallback(() => {
    dispatch(getOrdersThunk());
  }, [dispatch]);

  useEffect(() => {
    getOrders();
  }, [dispatch, getOrders]);

  const refreshOrderList = useCallback(() => {
    dispatch(updateIsRefreshing(true));
    getOrders();
  }, [dispatch, getOrders]);

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
    <FlatList
      data={orders}
      renderItem={({item}) => (
        <OrderItem
          number={item.data.attributes.number}
          createdAt={item.data.attributes.created_at}
          purchases={item.included}
        />
      )}
      ListEmptyComponent={
        <EmptyOrderList error={error} onPressRefresh={getOrders} />
      }
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={refreshOrderList}
        />
      }
    />
  );
};

export default OrderList;

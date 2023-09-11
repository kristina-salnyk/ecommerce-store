import React, {FC, useCallback, useEffect} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {MainStackParamList} from '../../../navigation/types';
import Link from '../../atoms/Link';
import PropertyRow from '../../atoms/PropertyRow';
import Splash from '../../molecules/Splash';
import OrderedProduct from '../../molecules/OrderedProduct';
import NotificationBox from '../NotificationBox';
import {updateIsRefreshing} from '../../../store/order/actionCreators';
import {
  selectError,
  selectIsLoading,
  selectIsRefreshing,
  selectItems,
  selectOrder,
} from '../../../store/order/selectors';
import {getOrderThunk} from '../../../store/order/thunk';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {useAppMainNavigation} from '../../../navigation/hooks';
import formatDate from '../../../utils/formateDate';
import noResults from '../../../assets/images/no-results.png';
import {NOTIFICATIONS} from '../../../constants/shared';
import {OrderDetailsWrap, TitleStyled} from './OrderDetails.styled';

const OrderDetails: FC = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'OrderDetails'>>();
  const {orderNumber} = route.params;
  const navigation = useAppMainNavigation();
  const dispatch = useAppDispatch();

  const order = useAppSelector(selectOrder);
  const purchases = useAppSelector(selectItems);
  const isLoading = useAppSelector(selectIsLoading);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const error = useAppSelector(selectError);

  const notificationType = error
    ? 'loadingFailedNotification'
    : 'emptyProductDetailsNotification';

  const getOrder = useCallback(() => {
    dispatch(getOrderThunk(orderNumber));
  }, [dispatch, orderNumber]);

  useEffect(() => {
    getOrder();
  }, [getOrder]);

  const refreshProduct = useCallback(() => {
    dispatch(updateIsRefreshing(true));
    getOrder();
  }, [getOrder, dispatch]);

  if (isLoading && !isRefreshing) {
    return <Splash />;
  }

  if (error || !order) {
    return (
      <NotificationBox
        imageSource={noResults}
        title={NOTIFICATIONS[notificationType].title}
        message={NOTIFICATIONS[notificationType].message}
        linkText="Refresh"
        onPressLink={getOrder}
      />
    );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={refreshProduct} />
      }>
      <OrderDetailsWrap>
        <PropertyRow text="Order Id" value={order.attributes.number} />
        <PropertyRow
          text="Order Date"
          value={formatDate(order.attributes.created_at)}
        />
        <PropertyRow
          text="Total Ammount"
          value={order.attributes.display_total}
        />
        <PropertyRow
          text="Shipping Address"
          value={
            <Link
              text={order.attributes.ship_address}
              onPress={() =>
                navigation.push('Map', {address: order.attributes.ship_address})
              }
            />
          }
        />
      </OrderDetailsWrap>
      <TitleStyled text="Ordered Products" />
      {purchases.map(item => (
        <OrderedProduct
          key={item.id}
          productId={item.relationships.variant.data.id}
          name={item.attributes.name}
          options={item.attributes.options_text}
          price={item.attributes.pre_tax_amount}
          priceView={item.attributes.display_pre_tax_amount}
          quantity={item.attributes.quantity}
        />
      ))}
    </ScrollView>
  );
};

export default OrderDetails;

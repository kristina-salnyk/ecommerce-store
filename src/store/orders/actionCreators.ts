import {
  ORDERS_RESET_ITEMS,
  ORDERS_SET_ERROR,
  ORDERS_SET_ITEMS,
  ORDERS_UPDATE_IS_LOADING,
  ORDERS_UPDATE_IS_REFRESHING,
  OrdersResetItemsAction,
  OrdersSetErrorAction,
  OrdersSetItemsAction,
  OrdersUpdateIsLoadingAction,
  OrdersUpdateIsRefreshingAction,
} from './actionTypes';
import Order from 'interfaces/Order';
import Purchase from 'interfaces/Purchase';

export const setOrders = (data: {
  items: {data: Order; included: Purchase[]}[];
}): OrdersSetItemsAction => {
  return {
    type: ORDERS_SET_ITEMS,
    payload: data,
  };
};

export const resetOrders = (): OrdersResetItemsAction => {
  return {
    type: ORDERS_RESET_ITEMS,
  };
};

export const updateIsLoading = (data: boolean): OrdersUpdateIsLoadingAction => {
  return {
    type: ORDERS_UPDATE_IS_LOADING,
    payload: data,
  };
};

export const updateIsRefreshing = (
  data: boolean,
): OrdersUpdateIsRefreshingAction => {
  return {
    type: ORDERS_UPDATE_IS_REFRESHING,
    payload: data,
  };
};

export const setError = (data: string): OrdersSetErrorAction => {
  return {
    type: ORDERS_SET_ERROR,
    payload: data,
  };
};

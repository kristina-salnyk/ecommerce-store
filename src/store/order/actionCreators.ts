import Order from '../../interfaces/Order';
import {
  ORDER_RESET_DATA,
  ORDER_SET_DATA,
  ORDER_SET_ERROR,
  ORDER_UPDATE_IS_LOADING,
  ORDER_UPDATE_IS_REFRESHING,
  OrderResetDataAction,
  OrderSetDataAction,
  OrderSetErrorAction,
  OrderUpdateIsLoadingAction,
  OrderUpdateIsRefreshingAction,
} from './actionTypes';
import Purchase from '../../interfaces/Purchase';

export const setOrder = (data: {
  data: Order;
  items: Purchase[];
}): OrderSetDataAction => {
  return {
    type: ORDER_SET_DATA,
    payload: data,
  };
};

export const resetOrder = (): OrderResetDataAction => {
  return {
    type: ORDER_RESET_DATA,
  };
};

export const updateIsLoading = (data: boolean): OrderUpdateIsLoadingAction => {
  return {
    type: ORDER_UPDATE_IS_LOADING,
    payload: data,
  };
};

export const updateIsRefreshing = (
  data: boolean,
): OrderUpdateIsRefreshingAction => {
  return {
    type: ORDER_UPDATE_IS_REFRESHING,
    payload: data,
  };
};

export const setError = (data: string): OrderSetErrorAction => {
  return {
    type: ORDER_SET_ERROR,
    payload: data,
  };
};

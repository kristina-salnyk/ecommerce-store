import Cart from '../../interfaces/Cart';
import {
  CART_SET_DATA,
  CART_SET_ERROR,
  CART_UPDATE_IS_LOADING,
  CART_UPDATE_IS_REFRESHING,
  CartSetDataAction,
  CartSetErrorAction,
  CartUpdateIsLoadingAction,
  CartUpdateIsRefreshingAction,
} from './actionTypes';
import Purchase from '../../interfaces/Purchase';

export const setCart = (data: {
  data: Cart;
  items: Purchase[];
}): CartSetDataAction => {
  return {
    type: CART_SET_DATA,
    payload: data,
  };
};

export const updateIsLoading = (data: boolean): CartUpdateIsLoadingAction => {
  return {
    type: CART_UPDATE_IS_LOADING,
    payload: data,
  };
};

export const updateIsRefreshing = (
  data: boolean,
): CartUpdateIsRefreshingAction => {
  return {
    type: CART_UPDATE_IS_REFRESHING,
    payload: data,
  };
};

export const setError = (data: string): CartSetErrorAction => {
  return {
    type: CART_SET_ERROR,
    payload: data,
  };
};

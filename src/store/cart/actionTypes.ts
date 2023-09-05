import Cart from '../../interfaces/Cart';
import Purchase from '../../interfaces/Purchase';

export const CART_SET_DATA = 'cart/setData';

export const CART_RESET_DATA = 'cart/resetData';

export const CART_UPDATE_IS_LOADING = 'cart/updateIsLoading';

export const CART_UPDATE_IS_REFRESHING = 'cart/updateIsRefreshing';

export const CART_SET_ERROR = 'cart/setError';

export interface CartSetDataAction {
  type: typeof CART_SET_DATA;
  payload: {data: Cart; items: Purchase[]};
}

export interface CartResetDataAction {
  type: typeof CART_RESET_DATA;
}

export interface CartUpdateIsLoadingAction {
  type: typeof CART_UPDATE_IS_LOADING;
  payload: boolean;
}

export interface CartUpdateIsRefreshingAction {
  type: typeof CART_UPDATE_IS_REFRESHING;
  payload: boolean;
}

export interface CartSetErrorAction {
  type: typeof CART_SET_ERROR;
  payload: string;
}

export type CartAction =
  | CartSetDataAction
  | CartResetDataAction
  | CartUpdateIsLoadingAction
  | CartUpdateIsRefreshingAction
  | CartSetErrorAction;

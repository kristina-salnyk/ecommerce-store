import Order from '../../interfaces/Order';
import Purchase from '../../interfaces/Purchase';

export const ORDERS_SET_ITEMS = 'orders/setItems';

export const ORDERS_RESET_ITEMS = 'orders/resetItems';

export const ORDERS_UPDATE_IS_LOADING = 'orders/updateIsLoading';

export const ORDERS_UPDATE_IS_REFRESHING = 'orders/updateIsRefreshing';

export const ORDERS_SET_ERROR = 'orders/setError';

export interface OrdersSetItemsAction {
  type: typeof ORDERS_SET_ITEMS;
  payload: {items: {data: Order; included: Purchase[]}[]};
}

export interface OrdersResetItemsAction {
  type: typeof ORDERS_RESET_ITEMS;
}

export interface OrdersUpdateIsLoadingAction {
  type: typeof ORDERS_UPDATE_IS_LOADING;
  payload: boolean;
}

export interface OrdersUpdateIsRefreshingAction {
  type: typeof ORDERS_UPDATE_IS_REFRESHING;
  payload: boolean;
}

export interface OrdersSetErrorAction {
  type: typeof ORDERS_SET_ERROR;
  payload: string;
}

export type OrdersAction =
  | OrdersSetItemsAction
  | OrdersResetItemsAction
  | OrdersUpdateIsLoadingAction
  | OrdersUpdateIsRefreshingAction
  | OrdersSetErrorAction;

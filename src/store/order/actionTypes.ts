import Order from '../../interfaces/Order';
import Purchase from '../../interfaces/Purchase';

export const ORDER_SET_DATA = 'order/setData';

export const ORDER_RESET_DATA = 'order/resetData';

export const ORDER_UPDATE_IS_LOADING = 'order/updateIsLoading';

export const ORDER_UPDATE_IS_REFRESHING = 'order/updateIsRefreshing';

export const ORDER_SET_ERROR = 'order/setError';

export interface OrderSetDataAction {
  type: typeof ORDER_SET_DATA;
  payload: {data: Order; items: Purchase[]};
}

export interface OrderResetDataAction {
  type: typeof ORDER_RESET_DATA;
}

export interface OrderUpdateIsLoadingAction {
  type: typeof ORDER_UPDATE_IS_LOADING;
  payload: boolean;
}

export interface OrderUpdateIsRefreshingAction {
  type: typeof ORDER_UPDATE_IS_REFRESHING;
  payload: boolean;
}

export interface OrderSetErrorAction {
  type: typeof ORDER_SET_ERROR;
  payload: string;
}

export type OrderAction =
  | OrderSetDataAction
  | OrderResetDataAction
  | OrderUpdateIsLoadingAction
  | OrderUpdateIsRefreshingAction
  | OrderSetErrorAction;

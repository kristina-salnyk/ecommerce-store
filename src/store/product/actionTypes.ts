import Product from 'interfaces/Product';

export const PRODUCT_SET_DATA = 'product/setData';

export const PRODUCT_UPDATE_IS_LOADING = 'product/updateIsLoading';

export const PRODUCT_UPDATE_IS_REFRESHING = 'product/updateIsRefreshing';

export const PRODUCT_SET_ERROR = 'product/setError';

export interface ProductSetDataAction {
  type: typeof PRODUCT_SET_DATA;
  payload: Product;
}

export interface ProductUpdateIsLoadingAction {
  type: typeof PRODUCT_UPDATE_IS_LOADING;
  payload: boolean;
}

export interface ProductUpdateIsRefreshingAction {
  type: typeof PRODUCT_UPDATE_IS_REFRESHING;
  payload: boolean;
}

export interface ProductSetErrorAction {
  type: typeof PRODUCT_SET_ERROR;
  payload: string;
}

export type ProductAction =
  | ProductSetDataAction
  | ProductUpdateIsLoadingAction
  | ProductUpdateIsRefreshingAction
  | ProductSetErrorAction;

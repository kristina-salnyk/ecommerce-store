import Product from '../../interfaces/Product';

export const PRODUCTS_SET_LIST = 'products/setList';

export const PRODUCTS_UPDATE_LIST = 'products/updateList';

export const PRODUCTS_UPDATE_IS_LOADING = 'products/updateIsLoading';

export const PRODUCTS_UPDATE_IS_LOADING_MORE = 'products/updateIsLoadingMore';

export const PRODUCTS_UPDATE_IS_REFRESHING = 'products/updateIsRefreshing';

export interface ProductsSetListAction {
  type: typeof PRODUCTS_SET_LIST;
  payload: {
    items: Product[];
    totalPages: number;
  };
}

export interface ProductsUpdateListAction {
  type: typeof PRODUCTS_UPDATE_LIST;
  payload: Product[];
}

export interface ProductsUpdateIsLoadingAction {
  type: typeof PRODUCTS_UPDATE_IS_LOADING;
  payload: boolean;
}

export interface ProductsUpdateIsLoadingMoreAction {
  type: typeof PRODUCTS_UPDATE_IS_LOADING_MORE;
  payload: boolean;
}

export interface ProductsUpdateIsRefreshingAction {
  type: typeof PRODUCTS_UPDATE_IS_REFRESHING;
  payload: boolean;
}

export type ProductsAction =
  | ProductsSetListAction
  | ProductsUpdateListAction
  | ProductsUpdateIsLoadingAction
  | ProductsUpdateIsLoadingMoreAction
  | ProductsUpdateIsRefreshingAction;

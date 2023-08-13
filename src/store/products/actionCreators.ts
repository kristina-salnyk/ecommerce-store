import {
  PRODUCTS_SET_LIST,
  PRODUCTS_UPDATE_IS_LOADING,
  PRODUCTS_UPDATE_IS_LOADING_MORE,
  PRODUCTS_UPDATE_IS_REFRESHING,
  PRODUCTS_UPDATE_LIST,
  ProductsSetListAction,
  ProductsUpdateIsLoadingAction,
  ProductsUpdateIsLoadingMoreAction,
  ProductsUpdateIsRefreshingAction,
  ProductsUpdateListAction,
} from './actionTypes';
import Product from '../../interfaces/Product';

export const setProducts = (data: {
  items: Product[];
  totalPages: number;
}): ProductsSetListAction => {
  return {
    type: PRODUCTS_SET_LIST,
    payload: data,
  };
};

export const updateProducts = (data: Product[]): ProductsUpdateListAction => {
  return {
    type: PRODUCTS_UPDATE_LIST,
    payload: data,
  };
};

export const updateIsLoading = (
  data: boolean,
): ProductsUpdateIsLoadingAction => {
  return {
    type: PRODUCTS_UPDATE_IS_LOADING,
    payload: data,
  };
};

export const updateIsLoadingMore = (
  data: boolean,
): ProductsUpdateIsLoadingMoreAction => {
  return {
    type: PRODUCTS_UPDATE_IS_LOADING_MORE,
    payload: data,
  };
};

export const updateIsRefreshing = (
  data: boolean,
): ProductsUpdateIsRefreshingAction => {
  return {
    type: PRODUCTS_UPDATE_IS_REFRESHING,
    payload: data,
  };
};

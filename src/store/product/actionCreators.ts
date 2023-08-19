import {
  PRODUCT_SET_ERROR,
  PRODUCT_SET_ITEM,
  PRODUCT_UPDATE_IS_LOADING,
  PRODUCT_UPDATE_IS_REFRESHING,
  PRODUCT_UPDATE_ITEM,
  ProductSetErrorAction,
  ProductSetItemAction,
  ProductUpdateIsLoadingAction,
  ProductUpdateIsRefreshingAction,
  ProductUpdateItemAction,
} from './actionTypes';
import Product from '../../interfaces/Product';

export const setProduct = (data: Product): ProductSetItemAction => {
  return {
    type: PRODUCT_SET_ITEM,
    payload: data,
  };
};

export const updateProduct = (data: Product): ProductUpdateItemAction => {
  return {
    type: PRODUCT_UPDATE_ITEM,
    payload: data,
  };
};

export const updateIsLoading = (
  data: boolean,
): ProductUpdateIsLoadingAction => {
  return {
    type: PRODUCT_UPDATE_IS_LOADING,
    payload: data,
  };
};

export const updateIsRefreshing = (
  data: boolean,
): ProductUpdateIsRefreshingAction => {
  return {
    type: PRODUCT_UPDATE_IS_REFRESHING,
    payload: data,
  };
};

export const setError = (data: string): ProductSetErrorAction => {
  return {
    type: PRODUCT_SET_ERROR,
    payload: data,
  };
};

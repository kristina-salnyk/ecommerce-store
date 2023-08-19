import {RootState} from '../index';

export const selectItem = (state: RootState) => state.product.item;

export const selectIsLoading = (state: RootState) => state.product.isLoading;

export const selectIsRefreshing = (state: RootState) =>
  state.product.isRefreshing;

export const selectError = (state: RootState) => state.product.error;

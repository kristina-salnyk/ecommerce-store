import {RootState} from 'store';

export const selectItems = (state: RootState) => state.products.items;

export const selectTotalPages = (state: RootState) => state.products.totalPages;

export const selectColorOptions = (state: RootState) =>
  state.products.colorOptions;

export const selectIsLoading = (state: RootState) => state.products.isLoading;

export const selectIsLoadingMore = (state: RootState) =>
  state.products.isLoadingMore;

export const selectIsRefreshing = (state: RootState) =>
  state.products.isRefreshing;

export const selectError = (state: RootState) => state.products.error;

import {RootState} from 'store';

export const selectItems = (state: RootState) => state.orders.items;

export const selectIsLoading = (state: RootState) => state.orders.isLoading;

export const selectIsRefreshing = (state: RootState) =>
  state.orders.isRefreshing;

export const selectError = (state: RootState) => state.orders.error;

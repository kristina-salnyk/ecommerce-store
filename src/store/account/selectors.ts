import {RootState} from 'store';

export const selectAccount = (state: RootState) => state.account.data;

export const selectIsLoading = (state: RootState) => state.account.isLoading;

export const selectIsRefreshing = (state: RootState) =>
  state.account.isRefreshing;

export const selectError = (state: RootState) => state.account.error;

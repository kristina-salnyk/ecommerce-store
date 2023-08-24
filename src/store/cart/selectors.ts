import {RootState} from '../index';

export const selectUser = (state: RootState) => state.account.user;

export const selectToken = (state: RootState) => state.account.token;

export const selectIsLoading = (state: RootState) => state.account.isLoading;

export const selectIsRefreshing = (state: RootState) =>
  state.account.isRefreshing;

export const selectError = (state: RootState) => state.account.error;

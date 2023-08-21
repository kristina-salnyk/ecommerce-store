import {
  ACCOUNT_LOGIN,
  ACCOUNT_REFRESH_TOKEN,
  ACCOUNT_SET_ERROR,
  ACCOUNT_SIGN_UP,
  ACCOUNT_UPDATE_IS_LOADING,
  ACCOUNT_UPDATE_IS_REFRESHING,
  AccountLoginAction,
  AccountRefreshTokenAction,
  AccountSetErrorAction,
  AccountSignUpAction,
  AccountUpdateIsLoadingAction,
  AccountUpdateIsRefreshingAction,
} from './actionTypes';

export const updateSignUp = (data: string): AccountSignUpAction => {
  return {
    type: ACCOUNT_SIGN_UP,
    payload: data,
  };
};

export const updateLogin = (data: string): AccountLoginAction => {
  return {
    type: ACCOUNT_LOGIN,
    payload: data,
  };
};

export const refreshToken = (data: string): AccountRefreshTokenAction => {
  return {
    type: ACCOUNT_REFRESH_TOKEN,
    payload: data,
  };
};

export const updateIsLoading = (
  data: boolean,
): AccountUpdateIsLoadingAction => {
  return {
    type: ACCOUNT_UPDATE_IS_LOADING,
    payload: data,
  };
};

export const updateIsRefreshing = (
  data: boolean,
): AccountUpdateIsRefreshingAction => {
  return {
    type: ACCOUNT_UPDATE_IS_REFRESHING,
    payload: data,
  };
};

export const setError = (data: string | null): AccountSetErrorAction => {
  return {
    type: ACCOUNT_SET_ERROR,
    payload: data,
  };
};

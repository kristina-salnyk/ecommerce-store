import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_UPDATE_IS_LOADING,
  AUTH_UPDATE_IS_REFRESHING,
  AUTH_UPDATE_TOKEN,
  AuthLoginAction,
  AuthLogoutAction,
  AuthUpdateIsLoadingAction,
  AuthUpdateIsRefreshingAction,
  AuthUpdateTokenAction,
} from './actionTypes';

export const setLogin = (data: {
  token: string;
  refreshToken: string;
}): AuthLoginAction => {
  return {
    type: AUTH_LOGIN,
    payload: data,
  };
};

export const setLogout = (): AuthLogoutAction => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const updateToken = (data: {
  token: string;
  refreshToken: string;
}): AuthUpdateTokenAction => {
  return {
    type: AUTH_UPDATE_TOKEN,
    payload: data,
  };
};

export const updateIsLoading = (data: boolean): AuthUpdateIsLoadingAction => {
  return {
    type: AUTH_UPDATE_IS_LOADING,
    payload: data,
  };
};

export const updateIsRefreshing = (
  data: boolean,
): AuthUpdateIsRefreshingAction => {
  return {
    type: AUTH_UPDATE_IS_REFRESHING,
    payload: data,
  };
};

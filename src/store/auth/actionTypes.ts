export const AUTH_SIGN_UP = 'auth/signUp';

export const AUTH_LOGIN = 'auth/login';

export const AUTH_LOGOUT = 'auth/logout';

export const AUTH_UPDATE_TOKEN = 'auth/updateToken';

export const AUTH_UPDATE_IS_LOADING = 'auth/updateIsLoading';

export const AUTH_UPDATE_IS_REFRESHING = 'auth/updateIsRefreshing';

export const AUTH_SET_ERROR = 'auth/setError';

export interface AuthSignUpAction {
  type: typeof AUTH_SIGN_UP;
}

export interface AuthLoginAction {
  type: typeof AUTH_LOGIN;
  payload: {token: string; refreshToken: string};
}

export interface AuthLogoutAction {
  type: typeof AUTH_LOGOUT;
}

export interface AuthUpdateTokenAction {
  type: typeof AUTH_UPDATE_TOKEN;
  payload: {token: string; refreshToken: string};
}

export interface AuthUpdateIsLoadingAction {
  type: typeof AUTH_UPDATE_IS_LOADING;
  payload: boolean;
}

export interface AuthUpdateIsRefreshingAction {
  type: typeof AUTH_UPDATE_IS_REFRESHING;
  payload: boolean;
}

export interface AuthSetErrorAction {
  type: typeof AUTH_SET_ERROR;
  payload: string | null;
}

export type AuthAction =
  | AuthSignUpAction
  | AuthLoginAction
  | AuthLogoutAction
  | AuthUpdateTokenAction
  | AuthUpdateIsLoadingAction
  | AuthUpdateIsRefreshingAction
  | AuthSetErrorAction;

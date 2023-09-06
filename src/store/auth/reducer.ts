import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SET_ERROR,
  AUTH_SIGN_UP,
  AUTH_UPDATE_IS_LOADING,
  AUTH_UPDATE_IS_REFRESHING,
  AUTH_UPDATE_TOKEN,
  AuthAction,
} from './actionTypes';
import AuthState from '../../interfaces/AuthState';

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const reducer = (
  state: AuthState = initialState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AUTH_SIGN_UP:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case AUTH_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
        isLoading: false,
        error: null,
      };
    case AUTH_LOGOUT:
      return {
        ...initialState,
      };
    case AUTH_UPDATE_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };
    case AUTH_UPDATE_IS_LOADING:
      return {...state, isLoading: action.payload, error: null};
    case AUTH_UPDATE_IS_REFRESHING:
      return {...state, isRefreshing: action.payload, error: null};
    case AUTH_SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

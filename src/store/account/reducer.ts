import {
  ACCOUNT_LOGIN,
  ACCOUNT_LOGOUT,
  ACCOUNT_SET_ERROR,
  ACCOUNT_SIGN_UP,
  ACCOUNT_UPDATE_IS_LOADING,
  ACCOUNT_UPDATE_IS_REFRESHING,
  ACCOUNT_UPDATE_USER,
  AccountAction,
} from './actionTypes';
import AccountState from '../../interfaces/AccountState';

const initialState: AccountState = {
  user: {
    username: '',
    email: '',
  },
  token: null,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const reducer = (
  state: AccountState = initialState,
  action: AccountAction,
): AccountState => {
  switch (action.type) {
    case ACCOUNT_SIGN_UP:
      return {
        ...state,
        user: {...state.user, email: action.payload},
        isLoading: false,
        error: null,
      };
    case ACCOUNT_LOGIN:
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        error: null,
      };
    case ACCOUNT_LOGOUT:
      return {
        ...state,
        user: {username: '', email: ''},
        token: null,
        isLoading: false,
        error: null,
      };
    case ACCOUNT_UPDATE_USER:
      return {...state, user: {...state.user, ...action.payload}};
    case ACCOUNT_UPDATE_IS_LOADING:
      return {...state, isLoading: action.payload, error: null};
    case ACCOUNT_UPDATE_IS_REFRESHING:
      return {...state, isRefreshing: action.payload, error: null};
    case ACCOUNT_SET_ERROR:
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

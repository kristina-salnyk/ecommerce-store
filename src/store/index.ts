import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import initSubscriber from 'redux-subscriber';

import productsReducer from './products/reducer';
import productReducer from './product/reducer';
import cartReducer from './cart/reducer';
import accountReducer from './account/reducer';
import {updateIsRefreshing, updateLogin} from './account/actionCreators';
import {clearAuthHeader, setAuthHeader} from '../services/api';
import {deleteItem, getItem, setItem} from '../services/storage';

const rootReducer = combineReducers({
  account: accountReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
});

const composedEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(rootReducer, composedEnhancer);

const subscribe = initSubscriber(store);

subscribe('account.token', async state => {
  const token = state.account.token;

  if (token) {
    setAuthHeader(token);
    await setItem('token', token);
  } else {
    await deleteItem('token');
    clearAuthHeader();
  }
});

subscribe('account.refreshToken', async state => {
  const refreshToken = state.account.refreshToken;

  if (refreshToken) {
    await setItem('refreshToken', refreshToken);
  } else {
    await deleteItem('refreshToken');
  }
});

const initApp = async () => {
  try {
    store.dispatch(updateIsRefreshing(true));

    const token = await getItem('token');
    const refreshToken = await getItem('refreshToken');

    if (token && refreshToken) {
      store.dispatch(updateLogin({token, refreshToken}));
    }
  } catch (error) {
    console.log('Error restoring token:', error);
  } finally {
    store.dispatch(updateIsRefreshing(false));
  }
};

initApp();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

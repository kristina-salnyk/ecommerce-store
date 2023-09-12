import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import initSubscriber from 'redux-subscriber';

import productsReducer from './products/reducer';
import productReducer from './product/reducer';
import cartReducer from './cart/reducer';
import accountReducer from './account/reducer';
import authReducer from './auth/reducer';
import ordersReducer from './orders/reducer';
import orderReducer from './order/reducer';
import {resetCart} from './cart/actionCreators';
import {setLogin, updateIsRefreshing} from './auth/actionCreators';
import {resetAccount} from './account/actionCreators';
import {resetOrder} from './order/actionCreators';
import {resetOrders} from './orders/actionCreators';
import {clearAuthHeader, setAuthHeader} from 'services/api';
import {deleteItem, getItem, setItem} from 'services/storage';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  orders: ordersReducer,
  order: orderReducer,
});

const composedEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(rootReducer, composedEnhancer);

const subscribe = initSubscriber(store);

subscribe('auth.token', async state => {
  const token = state.auth.token;

  if (token) {
    setAuthHeader(token);
    await setItem('token', token);
  } else {
    await deleteItem('token');
    clearAuthHeader();

    store.dispatch(resetCart());
    store.dispatch(resetAccount());
    store.dispatch(resetOrder());
    store.dispatch(resetOrders());
  }
});

subscribe('auth.refreshToken', async state => {
  const refreshToken = state.auth.refreshToken;

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
      store.dispatch(setLogin({token, refreshToken}));
    }
  } catch (error) {
    console.log('Error restoring token: ', error);
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

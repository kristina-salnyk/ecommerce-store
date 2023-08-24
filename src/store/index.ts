import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import initSubscriber from 'redux-subscriber';
import SInfo from 'react-native-sensitive-info';

import accountReducer from './account/reducer';
import productsReducer from './products/reducer';
import productReducer from './product/reducer';
import cartReducer from './cart/reducer';
import {updateIsRefreshing, updateLogin} from './account/actionCreators';
import {clearAuthHeader} from '../services/api';

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
    try {
      await SInfo.setItem('token', token, {
        keychainService: 'auth',
      });
    } catch (error) {
      console.log('Error writing token to storage:', error);
    }
  } else {
    try {
      await SInfo.deleteItem('token', {keychainService: 'auth'});
    } catch (error) {
      console.log('Error deleting token from storage:', error);
    }
    clearAuthHeader();
  }
});

(async () => {
  try {
    store.dispatch(updateIsRefreshing(true));

    const token = await SInfo.getItem('token', {keychainService: 'auth'});
    if (token) {
      store.dispatch(updateLogin(token));
    }
  } catch (error) {
    console.log('Error reading token from storage:', error);
  } finally {
    store.dispatch(updateIsRefreshing(false));
  }
})();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunkDispatch = ThunkDispatch<
  RootState,
  unknown,
  Action<string>
>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

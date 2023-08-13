import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';

import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const composedEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(rootReducer, composedEnhancer);

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

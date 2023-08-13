import {Dispatch} from 'react';
import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {RootState} from '../index';
import {getCart} from '../../api/cart';
import {setCart} from './actionCreators';

export const getCartThunk =
  (): ThunkAction<void, RootState, undefined, Action> =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const response = await getCart();
      const {data} = response;

      dispatch(setCart(data.result));
    } catch (error) {
      console.log('Error getting cart', error);
      dispatch(setCart(null));
    } finally {
    }
  };

import Cart from '../../interfaces/Cart';
import {CART_SET_ITEM} from './actionTypes';

export const setCart = (data: Cart | null) => {
  return {
    type: CART_SET_ITEM,
    payload: {...data},
  };
};

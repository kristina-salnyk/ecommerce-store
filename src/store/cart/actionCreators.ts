import * as actionTypes from './actionTypes';
import Cart from '../../interfaces/Cart';

export const setCart = (cart: Cart | null) => {
  return {
    type: actionTypes.CART_GET,
    payload: {...cart},
  };
};

import * as actionTypes from './actionTypes';
import Cart from '../../interfaces/Cart';

interface fetchAction {
  type: string;
  payload: Cart | null;
}

const reducer = (state: Cart | null = null, action: fetchAction) => {
  switch (action.type) {
    case actionTypes.CART_SET_ITEM:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

import {AppDispatch, AppThunk, RootState} from '../index';
import {
  addCartItem,
  changeQuantity,
  deleteCartItem,
  getCart,
} from '../../services/api/cart';
import {setCart, setError, updateIsLoading} from './actionCreators';
import {authMiddleware} from '../middlewares/authMiddleware';
import Purchase from '../../interfaces/Purchase';
import {cartMiddleware} from '../middlewares/cartMiddleware';

export const getCartThunk =
  (): AppThunk => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(updateIsLoading(true));

      const response = await cartMiddleware(() =>
        authMiddleware(getCart, dispatch, getState),
      );
      const {data, included: items = []} = response.data;
      items.forEach(
        (item: Purchase) => (item.attributes.options_text = 'Color: black'),
      );

      dispatch(setCart({data, items}));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    }
  };

export const addCartItemThunk =
  (
    data: {id: string; quantity: number; options: {color: string}},
    onSuccess: () => void,
    onError: () => void,
  ): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const response = await cartMiddleware(() =>
        authMiddleware(
          () =>
            addCartItem({
              variant_id: data.id,
              quantity: data.quantity,
              options: data.options,
            }),
          dispatch,
          getState,
        ),
      );
      const {data: cart, included: items = []} = response.data;
      items.forEach(
        (item: Purchase) => (item.attributes.options_text = 'Color: black'),
      );

      onSuccess();

      dispatch(setCart({data: cart, items}));
    } catch (error) {
      onError();
    }
  };

export const deleteCartItemThunk =
  (data: string, onError: () => void): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const response = await authMiddleware(
        () => deleteCartItem(data),
        dispatch,
        getState,
      );
      const {data: cart, included: items = []} = response.data;
      items.forEach(
        (item: Purchase) => (item.attributes.options_text = 'Color: black'),
      );

      dispatch(setCart({data: cart, items}));
    } catch (error) {
      onError();
    }
  };

export const changeQuantityThunk =
  (
    data: {line_item_id: string; quantity: number},
    onError: () => void,
  ): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const response = await authMiddleware(
        () => changeQuantity(data),
        dispatch,
        getState,
      );
      const {data: cart, included: items = []} = response.data;
      items.forEach(
        (item: Purchase) => (item.attributes.options_text = 'Color: black'),
      );

      dispatch(setCart({data: cart, items}));
    } catch (error) {
      onError();
    }
  };

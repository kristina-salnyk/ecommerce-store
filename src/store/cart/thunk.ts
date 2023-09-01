import {AppDispatch, AppThunk, RootState} from '../index';
import {
  addCartItem,
  changeQuantity,
  createCart,
  deleteCartItem,
  getCart,
} from '../../services/api/cart';
import {setCart, setError, updateIsLoading} from './actionCreators';
import {authMiddleware} from '../middlewares/authMiddleware';
import Purchase from '../../interfaces/Purchase';

export const getCartThunk =
  (): AppThunk => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(updateIsLoading(true));

      const response = await authMiddleware(getCart, dispatch, getState);
      const {data, included: items = []} = response.data;
      items.forEach(
        (item: Purchase) => (item.attributes.options_text = 'Color: black'),
      );

      dispatch(setCart({data, items}));
    } catch (error) {
      if (error instanceof Error) {
        if (
          error.message ===
          'The resource you were looking for could not be found.'
        ) {
          dispatch(createCartThunk());
          return;
        }
      }
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    }
  };

export const createCartThunk =
  (): AppThunk => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const response = await authMiddleware(createCart, dispatch, getState);
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
      const response = await authMiddleware(
        () =>
          addCartItem({
            variant_id: data.id,
            quantity: data.quantity,
            options: data.options,
          }),
        dispatch,
        getState,
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

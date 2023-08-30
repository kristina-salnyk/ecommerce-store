import {AppDispatch, AppThunk, RootState} from '../index';
import {createCart, getCart} from '../../services/api/cart';
import {setCart, setError, updateIsLoading} from './actionCreators';
import {authMiddleware} from '../middlewares/authMiddleware';

export const getCartThunk =
  (): AppThunk => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(updateIsLoading(true));

      const response = await authMiddleware(getCart, dispatch, getState);
      const {data, included: items = []} = response.data;

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

      dispatch(setCart({data, items}));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    }
  };

// export const addCartItemThunk =
//   (item: {id: string; quantity: number; options: }): AppThunk =>
//   async (dispatch: AppDispatch, getState: () => RootState) => {
//     try {
//       const response = await authMiddleware(
//         () => addCartItem(item),
//         dispatch,
//         getState,
//       );
//       const {data, included: items = []} = response.data;
//
//       dispatch(setCart({data, items}));
//     } catch (error) {
//       dispatch(
//         setError(
//           error instanceof Error ? error.message : 'Unknown error' + error,
//         ),
//       );
//     }
//   };

import {AppDispatch, AppThunk} from '../index';
import {setError, setProduct, updateIsLoading} from './actionCreators';
import {getProduct} from '../../api/products';

export const getProductThunk =
  (slug: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(updateIsLoading(true));

      const response = await getProduct(slug);
      const {data: item} = response.data;

      dispatch(setProduct(item));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    }
  };

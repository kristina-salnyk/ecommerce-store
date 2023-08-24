import {AxiosError, AxiosResponse} from 'axios';

import {storefrontApi} from './index';
import {PRODUCT_ITEMS_PER_PAGE} from '../../constants/shared';

export const getProductsList = async (page: number): Promise<AxiosResponse> => {
  const params = {per_page: PRODUCT_ITEMS_PER_PAGE, page};

  try {
    return await storefrontApi.get('/products', {params});
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const getProduct = async (slug: string): Promise<AxiosResponse> => {
  try {
    return await storefrontApi.get(`/products/${slug}`);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

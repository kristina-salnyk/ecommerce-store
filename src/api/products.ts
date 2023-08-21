import {AxiosResponse} from 'axios';

import {storefrontApi} from './index';
import {PRODUCT_ITEMS_PER_PAGE} from '../constants/shared';

export const getProductsList = async (page: number): Promise<AxiosResponse> => {
  const params = {per_page: PRODUCT_ITEMS_PER_PAGE, page};
  return await storefrontApi.get('/products', {params});
};

export const getProduct = async (slug: string): Promise<AxiosResponse> => {
  return await storefrontApi.get(`/products/${slug}`);
};

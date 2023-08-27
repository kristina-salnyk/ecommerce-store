import {AxiosError, AxiosResponse} from 'axios';

import {storefrontApi} from './index';

export const getCart = async (): Promise<AxiosResponse> => {
  try {
    return await storefrontApi.get('/cart');
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

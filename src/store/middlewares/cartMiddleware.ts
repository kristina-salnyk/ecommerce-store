import {AxiosResponse} from 'axios';

import {createCart} from 'services/api/cart';

export const cartMiddleware = async (
  request: () => Promise<AxiosResponse>,
): Promise<AxiosResponse> => {
  try {
    return await request();
  } catch (error) {
    if (error instanceof Error) {
      if (
        error.message ===
        'The resource you were looking for could not be found.'
      ) {
        try {
          await createCart();
          return await request();
        } catch {
          throw error;
        }
      }
      throw error;
    }
    throw error;
  }
};

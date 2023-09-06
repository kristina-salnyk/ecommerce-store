import {AxiosError, AxiosResponse} from 'axios';

import {mockStorefrontApi} from './index';

export const getAccount = async (): Promise<AxiosResponse> => {
  try {
    return await mockStorefrontApi.get('/account/1');
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error ?? 'Error loading account');
    }
    throw error;
  }
};

export const updateAccount = async (account: {
  username: string;
  phone: string;
  city: string;
  street: string;
  build: string;
}): Promise<AxiosResponse> => {
  try {
    return await mockStorefrontApi.put('/account/1', account);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error ?? 'Error loading account');
    }
    throw error;
  }
};

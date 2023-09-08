import {AxiosError, AxiosResponse} from 'axios';

import {mockStorefrontV2Api} from './index';

export const getOrderList = async (): Promise<AxiosResponse> => {
  try {
    return await mockStorefrontV2Api.get('/account/orders');
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error ?? 'Error loading orders');
    }
    throw error;
  }
};

export const getOrder = async (orderNumber: string): Promise<AxiosResponse> => {
  try {
    return await mockStorefrontV2Api.get(`/account/orders/${orderNumber}`);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error ?? 'Error loading order');
    }
    throw error;
  }
};

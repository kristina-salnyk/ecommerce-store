import {AxiosError, AxiosResponse} from 'axios';

import {auth, mockStorefrontApi, storefrontApi} from './index';

export const signUp = async (user: {
  email: string;
  first_name: string;
  password: string;
  password_confirmation: string;
}): Promise<AxiosResponse> => {
  try {
    return await storefrontApi.post('/account', {user});
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const login = async (
  email: string,
  password: string,
): Promise<AxiosResponse> => {
  const body = {grant_type: 'password', username: email, password, scope: null};

  try {
    return await auth.post('/token', body);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      const message = error.response.data.error;
      throw new Error(
        message === 'invalid_grant' ? 'Invalid credentials' : message,
      );
    }
    throw error;
  }
};

export const refreshToken = async (token: string): Promise<AxiosResponse> => {
  const body = {
    grant_type: 'refresh_token',
    refresh_token: token,
  };

  try {
    return await auth.post('/token', body);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      const message = error.response.data.error;
      throw new Error(
        message === 'invalid_grant' ? 'Invalid refresh token' : message,
      );
    }
    throw error;
  }
};

export const getUser = async (): Promise<AxiosResponse> => {
  try {
    return await mockStorefrontApi.get('/account/1');
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const setUser = async (user: {
  firstname: string;
  phone: string;
  city: string;
  address1: string;
  address2: string;
}): Promise<AxiosResponse> => {
  try {
    return await mockStorefrontApi.put('/account/1', user);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

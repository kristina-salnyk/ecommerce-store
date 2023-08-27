import {AxiosError, AxiosResponse} from 'axios';

import {auth, setAuthHeader, storefrontApi} from './index';

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

export const current = async (token: string): Promise<AxiosResponse> => {
  setAuthHeader(token);
  try {
    return await storefrontApi.get('/account');
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

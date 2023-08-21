import {AxiosResponse} from 'axios';

import {auth, setAuthHeader, storefrontApi} from './index';

export const signUp = async (user: {
  email: string;
  first_name: string;
  password: string;
  password_confirmation: string;
}): Promise<AxiosResponse> => {
  return await storefrontApi.post('/account', {user});
};

export const login = async (
  email: string,
  password: string,
): Promise<AxiosResponse> => {
  const body = {grant_type: 'password', username: email, password, scope: null};
  return await auth.post('/token', body);
};

export const current = async (token: string): Promise<AxiosResponse> => {
  setAuthHeader(token);
  return await storefrontApi.get('/account');
};

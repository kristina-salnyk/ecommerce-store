import React from 'react';
import {
  act,
  getDefaultNormalizer,
  userEvent,
} from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';

import App from '../App';
import {store} from 'store';
import {setLogout} from 'store/auth/actionCreators';
import {auth} from 'services/api';
import renderWithTheme from 'utils/renderWithTheme';
import {LOGIN_ERROR_RESPONSE, LOGIN_SUCCESS_RESPONSE} from 'constants/mocked';

describe('Login', () => {
  let mockAuth: MockAdapter;

  beforeAll(() => {
    mockAuth = new MockAdapter(auth);
  });

  afterEach(async () => {
    await act(async () => {
      store.dispatch(setLogout());
    });
  });

  it('user can sign in successfully with correct credentials', async () => {
    mockAuth.onPost('/token').reply(200, LOGIN_SUCCESS_RESPONSE);

    const user = userEvent.setup();
    const {
      getByRole,
      getByLabelText,
      findByRole,
      queryByTestId,
      queryByLabelText,
      getByTestId,
    } = renderWithTheme(<App />);

    expect(getByTestId('form')).toBeOnTheScreen();

    await user.type(getByLabelText('Email'), 'user@example.com');
    await user.type(getByLabelText('Password'), 'password_example');

    await user.press(getByRole('button', {name: 'Sign In'}));

    expect(
      await findByRole('header', {name: 'Ecommerce Store'}),
    ).toBeOnTheScreen();

    expect(queryByTestId('form')).not.toBeOnTheScreen();
    expect(queryByLabelText('Email')).not.toBeOnTheScreen();
    expect(queryByLabelText('Password')).not.toBeOnTheScreen();
  });

  it('user will see warning if the login from is not filled in', async () => {
    const user = userEvent.setup();
    const {getByRole, getByLabelText, findByRole, getByText, getByTestId} =
      renderWithTheme(<App />);

    expect(getByTestId('form')).toBeOnTheScreen();

    await user.type(getByLabelText('Email'), '');
    await user.type(getByLabelText('Password'), '');

    await user.press(getByRole('button', {name: 'Sign In'}));

    expect(await findByRole('alert')).toBeOnTheScreen();

    expect(
      getByText('Validation Failed', {normalizer: getDefaultNormalizer()}),
    ).toBeOnTheScreen();
  });

  it('user will see error if the credentials are incorrect', async () => {
    mockAuth.onPost('/token').reply(400, LOGIN_ERROR_RESPONSE);

    const user = userEvent.setup();
    const {getByRole, getByLabelText, findByRole, getByText, getByTestId} =
      renderWithTheme(<App />);

    expect(getByTestId('form')).toBeOnTheScreen();

    await user.type(getByLabelText('Email'), 'user@example.com');
    await user.type(getByLabelText('Password'), 'password_example');

    await user.press(getByRole('button', {name: 'Sign In'}));

    expect(await findByRole('alert')).toBeOnTheScreen();

    expect(
      getByText('Login Failed', {normalizer: getDefaultNormalizer()}),
    ).toBeOnTheScreen();
  });
});

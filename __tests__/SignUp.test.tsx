import React from 'react';
import {getDefaultNormalizer, userEvent} from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';

import App from '../App';
import renderWithTheme from 'utils/renderWithTheme';
import {storefrontApi} from 'services/api';
import {
  SIGN_UP_ERROR_RESPONSE,
  SIGN_UP_SUCCESS_RESPONSE,
} from 'constants/mocked';

describe('SignUp', () => {
  let mockStorefrontApi: MockAdapter;

  beforeAll(() => {
    mockStorefrontApi = new MockAdapter(storefrontApi);
  });

  it('user can sign up successfully with correct credentials', async () => {
    mockStorefrontApi.onPost('/account').reply(200, SIGN_UP_SUCCESS_RESPONSE);

    const user = userEvent.setup();
    const {getByRole, findByText, findByLabelText, findByRole, getByTestId} =
      renderWithTheme(<App />);

    expect(getByTestId('banner')).toBeOnTheScreen();

    await user.press(getByRole('link', {name: 'New here? Sign Up'}));

    await user.type(await findByLabelText('Full name'), 'User Name');
    await user.type(await findByLabelText('Email'), 'user@example.com');
    await user.type(await findByLabelText('Password'), 'password_example');
    await user.type(
      await findByLabelText('Confirm password'),
      'password_example',
    );

    await user.press(await findByRole('button', {name: 'Sign Up'}));

    expect(await findByRole('alert')).toBeOnTheScreen();

    expect(
      await findByText('Sign Up Successful', {
        normalizer: getDefaultNormalizer(),
      }),
    ).toBeOnTheScreen();
  });

  it('user will see warning if the sign up form is not filled in', async () => {
    const user = userEvent.setup();
    const {getByRole, findByLabelText, findByText, findByRole, getByTestId} =
      renderWithTheme(<App />);

    expect(getByTestId('banner')).toBeOnTheScreen();

    await user.press(getByRole('link', {name: 'New here? Sign Up'}));

    await user.type(await findByLabelText('Full name'), '');
    await user.type(await findByLabelText('Email'), '');
    await user.type(await findByLabelText('Password'), '');
    await user.type(await findByLabelText('Confirm password'), '');

    await user.press(await findByRole('button', {name: 'Sign Up'}));

    expect(await findByRole('alert')).toBeOnTheScreen();

    expect(
      await findByText('Validation Failed', {
        normalizer: getDefaultNormalizer(),
      }),
    ).toBeOnTheScreen();
  });

  it('user will see error if the credentials are incorrect', async () => {
    mockStorefrontApi.onPost('/account').reply(422, SIGN_UP_ERROR_RESPONSE);

    const user = userEvent.setup();
    const {getByRole, findByLabelText, findByText, findByRole, getByTestId} =
      renderWithTheme(<App />);

    expect(getByTestId('banner')).toBeOnTheScreen();

    await user.press(getByRole('link', {name: 'New here? Sign Up'}));

    await user.type(await findByLabelText('Full name'), 'User Name');
    await user.type(await findByLabelText('Email'), 'user@example');
    await user.type(await findByLabelText('Password'), 'pw');
    await user.type(await findByLabelText('Confirm password'), 'pw');

    await user.press(await findByRole('button', {name: 'Sign Up'}));

    expect(await findByRole('alert')).toBeOnTheScreen();

    expect(
      await findByText('Sign Up Failed', {normalizer: getDefaultNormalizer()}),
    ).toBeOnTheScreen();
  });
});

import React, {FC, useCallback, useState} from 'react';

import Input from '../../atoms/Input';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {useAppMainNavigation, useAppRootNavigation} from 'navigation/hooks';
import {signUpThunk} from 'store/auth/thunk';
import {selectIsLoading} from 'store/auth/selectors';
import {MODAL_OPTIONS, MODAL_TYPES, NOTIFICATIONS} from 'constants/shared';
import {
  ButtonStyled,
  LinkStyled,
  SignUpFormFieldsWrap,
  SignUpFormStyled,
  SignUpFormWrap,
  SplashStyled,
} from './SignUpForm.styled';

const SignUpForm: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const rootNavigation = useAppRootNavigation();
  const navigation = useAppMainNavigation();
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);

  const onSignedUp = useCallback(() => {
    setUsername('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');

    rootNavigation.navigate('Modal', {
      type: MODAL_TYPES.login,
      title: NOTIFICATIONS.signUpModal.title,
      options: MODAL_OPTIONS.success,
    });
  }, [rootNavigation]);

  const onNotSignedUp = useCallback(
    (message: string) => {
      rootNavigation.navigate('Modal', {
        type: MODAL_TYPES.confirm,
        title: NOTIFICATIONS.signUpFailedModal.title,
        message: message,
        options: MODAL_OPTIONS.error,
      });
    },
    [rootNavigation],
  );

  const onPressSignUp = useCallback(() => {
    if (!username || !email || !password || !passwordConfirmation) {
      rootNavigation.navigate('Modal', {
        type: MODAL_TYPES.confirm,
        title: NOTIFICATIONS.emptyFieldsModal.title,
        message: NOTIFICATIONS.emptyFieldsModal.message,
        options: MODAL_OPTIONS.warning,
      });
      return;
    }

    if (password !== passwordConfirmation) {
      rootNavigation.navigate('Modal', {
        type: MODAL_TYPES.confirm,
        title: NOTIFICATIONS.passwordConfirmationModal.title,
        message: NOTIFICATIONS.passwordConfirmationModal.message,
        options: MODAL_OPTIONS.warning,
      });
      return;
    }

    dispatch(
      signUpThunk({username, email, password}, onSignedUp, onNotSignedUp),
    );
  }, [
    username,
    email,
    password,
    passwordConfirmation,
    dispatch,
    onSignedUp,
    onNotSignedUp,
    rootNavigation,
  ]);

  const onPressSignIn = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }, [navigation]);

  return (
    <SignUpFormStyled testID="form" accessible={true}>
      <SignUpFormWrap>
        <SignUpFormFieldsWrap>
          <Input
            accessibilityLabel="Full name"
            value={username}
            onChange={setUsername}
            label="Full name"
          />
          <Input
            accessibilityLabel="Email"
            value={email}
            onChange={setEmail}
            label="Email address"
          />
          <Input
            accessibilityLabel="Password"
            value={password}
            onChange={setPassword}
            label="Password"
            isSecure={true}
          />
          <Input
            accessibilityLabel="Confirm password"
            value={passwordConfirmation}
            onChange={setPasswordConfirmation}
            label="Confirm password"
            isSecure={true}
          />
        </SignUpFormFieldsWrap>
        {isLoading && <SplashStyled />}
      </SignUpFormWrap>
      <ButtonStyled text="Sign Up" onPress={onPressSignUp} />
      <LinkStyled
        text="Already have account? Sign In"
        onPress={onPressSignIn}
      />
    </SignUpFormStyled>
  );
};

export default SignUpForm;

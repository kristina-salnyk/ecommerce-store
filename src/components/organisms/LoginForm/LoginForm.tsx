import React, {FC, useCallback, useState} from 'react';

import Link from '../../atoms/Link';
import Input from '../../atoms/Input';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {useAppMainNavigation, useAppRootNavigation} from 'navigation/hooks';
import {selectIsLoading} from 'store/auth/selectors';
import {loginThunk} from 'store/auth/thunk';
import {MODAL_OPTIONS, MODAL_TYPES, NOTIFICATIONS} from 'constants/shared';
import {
  ButtonStyled,
  LinkStyled,
  LoginFormFieldsWrap,
  LoginFormStyled,
  LoginFormWrap,
  SplashStyled,
} from './LoginForm.styled';

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const rootNavigation = useAppRootNavigation();
  const navigation = useAppMainNavigation();
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);

  const onNotLoggedIn = useCallback(
    (message: string) => {
      rootNavigation.navigate('Modal', {
        type: MODAL_TYPES.confirm,
        title: NOTIFICATIONS.loginFailedModal.title,
        message: message,
        options: MODAL_OPTIONS.error,
      });
    },
    [rootNavigation],
  );

  const onPressForgotPassword = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'ForgotPassword'}],
    });
  }, [navigation]);

  const onPressSignIn = useCallback(() => {
    if (!email || !password) {
      rootNavigation.navigate('Modal', {
        type: MODAL_TYPES.confirm,
        title: NOTIFICATIONS.emptyFieldsModal.title,
        message: NOTIFICATIONS.emptyFieldsModal.message,
        options: MODAL_OPTIONS.warning,
      });
      return;
    }

    dispatch(loginThunk({email, password}, onNotLoggedIn));
  }, [email, password, dispatch, onNotLoggedIn, rootNavigation]);

  const onPressSignUp = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'SignUp'}],
    });
  }, [navigation]);

  return (
    <LoginFormStyled accessibilityRole="form" accessible={true}>
      <LoginFormWrap>
        <LoginFormFieldsWrap>
          <Input
            accessibilityLabel="Email"
            value={email}
            onChange={setEmail}
            label="Email"
          />
          <Input
            accessibilityLabel="Password"
            value={password}
            onChange={setPassword}
            label="Password"
            isSecure={true}
          />
        </LoginFormFieldsWrap>
        {isLoading && <SplashStyled />}
      </LoginFormWrap>
      <Link text="Forgot Password?" onPress={onPressForgotPassword} />
      <ButtonStyled text="Sign In" onPress={onPressSignIn} />
      <LinkStyled text="New here? Sign Up" onPress={onPressSignUp} />
    </LoginFormStyled>
  );
};

export default LoginForm;

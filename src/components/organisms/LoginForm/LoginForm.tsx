import React, {FC, useCallback, useEffect, useState} from 'react';

import Link from '../../atoms/Link';
import Input from '../../atoms/Input';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {
  useAppMainNavigation,
  useAppRootNavigation,
} from '../../../navigation/hooks';
import {selectError, selectIsLoading} from '../../../store/account/selectors';
import {setError} from '../../../store/account/actionCreators';
import {loginThunk} from '../../../store/account/thunk';
import {
  MODAL_OPTIONS,
  MODAL_TYPES,
  NOTIFICATIONS,
} from '../../../constants/shared';
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

  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (error) {
      rootNavigation.navigate('Modal', {
        type: MODAL_TYPES.confirm,
        title: NOTIFICATIONS.loginFailedModal.title,
        message: error,
        options: MODAL_OPTIONS.error,
      });

      dispatch(setError(null));
    }
  }, [dispatch, error, rootNavigation]);

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

    dispatch(loginThunk({email, password}));
  }, [email, password, rootNavigation, dispatch]);

  const onPressSignUp = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'SignUp'}],
    });
  }, [navigation]);

  return (
    <LoginFormStyled>
      <LoginFormWrap>
        <LoginFormFieldsWrap>
          <Input value={email} onChange={setEmail} label="Email" />
          <Input
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

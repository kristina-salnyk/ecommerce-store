import React, {FC, useCallback, useEffect, useState} from 'react';

import Input from '../../atoms/Input';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {
  useAppMainNavigation,
  useAppRootNavigation,
} from '../../../navigation/hooks';
import {signUpThunk} from '../../../store/auth/thunk';
import {selectError, selectIsLoading} from '../../../store/auth/selectors';
import {setError} from '../../../store/auth/actionCreators';
import {
  MODAL_OPTIONS,
  MODAL_TYPES,
  NOTIFICATIONS,
} from '../../../constants/shared';
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

  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (error) {
      rootNavigation.navigate('Modal', {
        type: MODAL_TYPES.confirm,
        title: NOTIFICATIONS.signUpFailedModal.title,
        message: error,
        options: MODAL_OPTIONS.error,
      });

      dispatch(setError(null));
    }
  }, [dispatch, error, rootNavigation]);

  const onSignedUp = useCallback(() => {
    rootNavigation.navigate('Modal', {
      type: MODAL_TYPES.login,
      title: NOTIFICATIONS.loginModal.title,
      options: MODAL_OPTIONS.success,
    });

    setUsername('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
  }, [rootNavigation]);

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

    dispatch(signUpThunk({username, email, password}, onSignedUp));
  }, [
    username,
    email,
    password,
    passwordConfirmation,
    dispatch,
    onSignedUp,
    rootNavigation,
  ]);

  const onPressSignIn = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }, [navigation]);

  return (
    <SignUpFormStyled>
      <SignUpFormWrap>
        <SignUpFormFieldsWrap>
          <Input value={username} onChange={setUsername} label="Full name" />
          <Input value={email} onChange={setEmail} label="Email address" />
          <Input
            value={password}
            onChange={setPassword}
            label="Password"
            isSecure={true}
          />
          <Input
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

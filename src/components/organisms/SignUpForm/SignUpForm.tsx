import React, {FC, useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  MainStackParamList,
  RootStackParamList,
} from '../../../navigation/types';
import Input from '../../atoms/Input';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {signUpThunk} from '../../../store/account/thunk';
import {
  selectError,
  selectIsLoading,
  selectUser,
} from '../../../store/account/selectors';
import {setError, updateUser} from '../../../store/account/actionCreators';
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
  const rootNavigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const dispatch = useAppDispatch();

  const {email: registeredEmail} = useAppSelector(selectUser);
  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (registeredEmail) {
      rootNavigation.navigate('Modal', {
        type: MODAL_TYPES.login,
        title: NOTIFICATIONS.loginModal.title,
        options: MODAL_OPTIONS.success,
      });

      dispatch(updateUser({email: ''}));
    }
  }, [dispatch, registeredEmail, rootNavigation]);

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

    dispatch(signUpThunk({username, email, password}));
  }, [
    username,
    email,
    password,
    passwordConfirmation,
    rootNavigation,
    dispatch,
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

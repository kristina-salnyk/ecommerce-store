import React, {FC, useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  MainStackParamList,
  RootStackParamList,
} from '../../../navigation/types';
import Link from '../../atoms/Link';
import Input from '../../atoms/Input';
import {
  useAppDispatch,
  useAppSelector,
  useAppThunkDispatch,
} from '../../../store/hooks';
import {selectError} from '../../../store/account/selectors';
import {setError} from '../../../store/account/actionCreators';
import {loginThunk} from '../../../store/account/thunk';
import {
  MODAL_OPTIONS,
  MODAL_TYPES,
  NOTIFICATIONS,
} from '../../../constants/shared';
import {ButtonStyled, LinkStyled, LoginFormStyled} from './LoginForm.styled';

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const rootNavigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const dispatch = useAppDispatch();
  const thunkDispatch = useAppThunkDispatch();

  const error = useAppSelector(selectError);

  useEffect(() => {
    if (error) {
      rootNavigation.navigate('Modal', {
        type: MODAL_TYPES.confirm,
        title: NOTIFICATIONS.loginFailedNotification.title,
        message: error,
        options: MODAL_OPTIONS.error,
      });
    }
    return () => {
      dispatch(setError(null));
    };
  }, [dispatch, error, rootNavigation]);

  const onPressForgotPassword = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'ForgotPassword'}],
    });
  }, [navigation]);

  const onPressSignIn = useCallback(() => {
    (async () => {
      thunkDispatch(loginThunk({email, password}));
    })();
  }, [email, password, thunkDispatch]);

  const onPressSignUp = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'SignUp'}],
    });
  }, [navigation]);

  return (
    <LoginFormStyled>
      <Input value={email} onChange={setEmail} label="Email" />
      <Input
        value={password}
        onChange={setPassword}
        label="Password"
        isSecure={true}
      />
      <Link text="Forgot Password?" onPress={onPressForgotPassword} />
      <ButtonStyled text="Sign In" onPress={onPressSignIn} />
      <LinkStyled text="New here? Sign Up" onPress={onPressSignUp} />
    </LoginFormStyled>
  );
};

export default LoginForm;

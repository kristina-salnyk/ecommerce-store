import React, {FC, useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {MainStackParamList} from '../../../navigation/types';
import Link from '../../atoms/Link';
import Input from '../../atoms/Input';
import {useAuth} from '../../../contexts/AuthContext';
import {ButtonStyled, LinkStyled, LoginFormStyled} from './LoginForm.styled';

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const {login} = useAuth();

  const onPressForgotPassword = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'ForgotPassword'}],
    });
  }, [navigation]);

  const onPressSignIn = useCallback(() => {
    login(email, password);
  }, [email, password, login]);

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

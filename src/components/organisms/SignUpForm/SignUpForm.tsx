import React, {FC, useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {MainStackParamList} from '../../../navigation/types';
import Input from '../../atoms/Input';
import {useAuth} from '../../../contexts/AuthContext';
import {ButtonStyled, LinkStyled, SignUpFormStyled} from './SignUpForm.styled';

const SignUpForm: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const {signUp} = useAuth();

  const onPressSignUp = useCallback(() => {
    signUp({username, email, password});
  }, [username, email, password, signUp]);

  const onPressSignIn = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }, [navigation]);

  return (
    <SignUpFormStyled>
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
      <ButtonStyled text="Sign Up" onPress={onPressSignUp} />
      <LinkStyled
        text="Already have account? Sign In"
        onPress={onPressSignIn}
      />
    </SignUpFormStyled>
  );
};

export default SignUpForm;

import React, {FC, useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {MainStackParamList} from '../../../navigation/types';
import Input from '../../atoms/Input';
import {
  ButtonStyled,
  ForgotPasswordFormStyled,
  ForgotPasswordText,
} from './ForgotPasswordForm.styled';

const ForgotPasswordForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const onPressSubmit = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }, [navigation]);

  return (
    <ForgotPasswordFormStyled>
      <ForgotPasswordText>
        Enter your email and we will send you an email to change the password
      </ForgotPasswordText>
      <Input value={email} onChange={setEmail} label="Email address" />
      <ButtonStyled text="Submit" onPress={onPressSubmit} />
    </ForgotPasswordFormStyled>
  );
};

export default ForgotPasswordForm;

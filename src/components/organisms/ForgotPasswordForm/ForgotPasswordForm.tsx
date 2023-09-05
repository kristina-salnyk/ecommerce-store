import React, {FC, useCallback, useState} from 'react';

import Input from '../../atoms/Input';
import {useAppMainNavigation} from '../../../navigation/hooks';
import {
  ButtonStyled,
  ForgotPasswordFormStyled,
  ForgotPasswordText,
} from './ForgotPasswordForm.styled';

const ForgotPasswordForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const navigation = useAppMainNavigation();

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

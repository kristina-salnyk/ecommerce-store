import React, {FC, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../../navigation/types';
import Button from '../../atoms/Button';
import {
  ButtonStyled,
  LoginModalActionsStyled,
} from './LoginModalActions.styled';

const LoginModalActions: FC = () => {
  const rootNavigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();

  const onPressLogin = useCallback(() => {
    rootNavigation.reset({
      index: 0,
      routes: [{name: 'Root'}],
    });
  }, [rootNavigation]);

  return (
    <LoginModalActionsStyled>
      <ButtonStyled text="Cancel" onPress={rootNavigation.goBack} />
      <Button text="Login" onPress={onPressLogin} />
    </LoginModalActionsStyled>
  );
};

export default LoginModalActions;

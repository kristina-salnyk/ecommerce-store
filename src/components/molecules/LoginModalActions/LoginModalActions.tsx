import React, {FC, useCallback} from 'react';

import Button from '../../atoms/Button';
import {useAppRootNavigation} from '../../../navigation/hooks';
import {
  ButtonStyled,
  LoginModalActionsStyled,
} from './LoginModalActions.styled';

const LoginModalActions: FC = () => {
  const rootNavigation = useAppRootNavigation();

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

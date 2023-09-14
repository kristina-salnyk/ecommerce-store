import React, {FC, useCallback} from 'react';

import Button from '../../atoms/Button';
import {useAppMainNavigation} from 'navigation/hooks';
import {AuthModalActionsStyled} from './AuthModalActions.styled';

const AuthModalActions: FC = () => {
  const navigation = useAppMainNavigation();

  const onPressLogin = useCallback(
    () => navigation.navigate('Login'),
    [navigation],
  );

  const onPressSignUp = useCallback(
    () => navigation.navigate('SignUp'),
    [navigation],
  );

  return (
    <AuthModalActionsStyled>
      <Button text="Login" onPress={onPressLogin} />
      <Button text="Sign Up" onPress={onPressSignUp} />
    </AuthModalActionsStyled>
  );
};

export default AuthModalActions;

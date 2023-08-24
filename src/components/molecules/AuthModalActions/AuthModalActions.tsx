import React, {FC, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {MainStackParamList} from '../../../navigation/types';
import Button from '../../atoms/Button';
import {AuthModalActionsStyled} from './AuthModalActions.styled';

const AuthModalActions: FC = () => {
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

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

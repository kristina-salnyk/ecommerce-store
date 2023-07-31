import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../../navigation/types';
import Button from '../../atoms/Button';
import {useAuth} from '../../../contexts/AuthContext';
import {
  ButtonStyled,
  LogoutModalActionsStyled,
} from './LogoutModalActions.styled';

const LogoutModalActions: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {logout} = useAuth();

  return (
    <LogoutModalActionsStyled>
      <ButtonStyled text="Cansel" onPress={navigation.goBack} />
      <Button text="Logout" onPress={logout} />
    </LogoutModalActionsStyled>
  );
};

export default LogoutModalActions;

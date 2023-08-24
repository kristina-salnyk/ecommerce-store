import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../../navigation/types';
import Button from '../../atoms/Button';
import {
  ButtonStyled,
  LogoutModalActionsStyled,
} from './LogoutModalActions.styled';

const LogoutModalActions: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <LogoutModalActionsStyled>
      <ButtonStyled text="Cancel" onPress={navigation.goBack} />
      <Button text="Logout" onPress={() => {}} />
    </LogoutModalActionsStyled>
  );
};

export default LogoutModalActions;

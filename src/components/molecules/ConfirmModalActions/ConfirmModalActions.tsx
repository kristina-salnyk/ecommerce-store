import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../../navigation/types';
import Button from '../../atoms/Button';
import {ConfirmModalActionsStyled} from './ConfirmModalActions.styled';

const ConfirmModalActions: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ConfirmModalActionsStyled>
      <Button text="Ok" onPress={navigation.goBack} />
    </ConfirmModalActionsStyled>
  );
};

export default ConfirmModalActions;

import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../../navigation/types';
import Button from '../../atoms/Button';
import {InfoModalActionsStyled} from './InfoModalActions.styled';

const InfoModalActions: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <InfoModalActionsStyled>
      <Button text="Ok" onPress={navigation.goBack} />
    </InfoModalActionsStyled>
  );
};

export default InfoModalActions;

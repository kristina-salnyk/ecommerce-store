import React, {FC} from 'react';

import Button from '../../atoms/Button';
import {useAppRootNavigation} from '../../../navigation/hooks';
import {
  ButtonStyled,
  LogoutModalActionsStyled,
} from './LogoutModalActions.styled';

const LogoutModalActions: FC = () => {
  const navigation = useAppRootNavigation();

  return (
    <LogoutModalActionsStyled>
      <ButtonStyled text="Cancel" onPress={navigation.goBack} />
      <Button text="Logout" onPress={() => {}} />
    </LogoutModalActionsStyled>
  );
};

export default LogoutModalActions;

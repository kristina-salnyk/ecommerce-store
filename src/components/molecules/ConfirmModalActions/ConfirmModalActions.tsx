import React, {FC} from 'react';

import Button from '../../atoms/Button';
import {useAppRootNavigation} from 'navigation/hooks';
import {ConfirmModalActionsStyled} from './ConfirmModalActions.styled';

const ConfirmModalActions: FC = () => {
  const navigation = useAppRootNavigation();

  return (
    <ConfirmModalActionsStyled>
      <Button text="Ok" onPress={navigation.goBack} />
    </ConfirmModalActionsStyled>
  );
};

export default ConfirmModalActions;

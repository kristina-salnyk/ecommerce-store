import React, {FC, useCallback} from 'react';

import Button from '../../atoms/Button';
import {useAppRootNavigation} from '../../../navigation/hooks';
import {updateLogout} from '../../../store/account/actionCreators';
import {useAppDispatch} from '../../../store/hooks';
import {
  ButtonStyled,
  LogoutModalActionsStyled,
} from './LogoutModalActions.styled';
import {resetCart} from '../../../store/cart/actionCreators';

const LogoutModalActions: FC = () => {
  const navigation = useAppRootNavigation();
  const dispatch = useAppDispatch();

  const onPressLogout = useCallback(() => {
    dispatch(updateLogout());
    dispatch(resetCart());

    navigation.reset({
      index: 0,
      routes: [{name: 'Root'}],
    });
  }, [dispatch, navigation]);

  return (
    <LogoutModalActionsStyled>
      <ButtonStyled text="Cancel" onPress={navigation.goBack} />
      <Button text="Logout" onPress={onPressLogout} />
    </LogoutModalActionsStyled>
  );
};

export default LogoutModalActions;

import React, {FC, useCallback} from 'react';
import {Text} from 'react-native';

import Button from '../../components/atoms/Button';
import {updateLogout} from '../../store/account/actionCreators';
import {selectUser} from '../../store/account/selectors';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {useAppRootNavigation} from '../../navigation/hooks';
import {resetCart} from '../../store/cart/actionCreators';

const ProfileScreen: FC = () => {
  const navigation = useAppRootNavigation();
  const dispatch = useAppDispatch();

  const {username, email} = useAppSelector(selectUser);

  const onPressLogout = useCallback(() => {
    dispatch(updateLogout());
    dispatch(resetCart());

    navigation.reset({
      index: 0,
      routes: [{name: 'Root'}],
    });
  }, [dispatch, navigation]);

  return (
    <>
      <Text>
        Hello, {username}! You current email: {email}
      </Text>
      <Button text="Logout" onPress={onPressLogout} />
    </>
  );
};

export default ProfileScreen;

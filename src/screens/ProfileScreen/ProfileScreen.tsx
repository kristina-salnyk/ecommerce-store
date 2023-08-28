import React, {FC, useCallback} from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../navigation/types';
import Button from '../../components/atoms/Button';
import {updateLogout} from '../../store/account/actionCreators';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {selectUser} from '../../store/account/selectors';

const ProfileScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  const {username, email} = useAppSelector(selectUser);

  const onPressLogout = useCallback(() => {
    dispatch(updateLogout());

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

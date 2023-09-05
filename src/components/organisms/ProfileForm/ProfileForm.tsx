import React, {FC, useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../../navigation/types';
import Input from '../../atoms/Input';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {selectError, selectIsLoading} from '../../../store/account/selectors';
import {setError} from '../../../store/account/actionCreators';
import {
  MODAL_OPTIONS,
  MODAL_TYPES,
  NOTIFICATIONS,
} from '../../../constants/shared';
import {
  ButtonStyled,
  ProfileFormFieldsWrap,
  ProfileFormStyled,
  ProfileFormWrap,
  SplashStyled,
} from './ProfileForm.styled';
import {getUserThunk, setUserThunk} from '../../../store/account/thunk';

const ProfileForm: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [build, setBuild] = useState<string>('');
  const [avatarURI, setAvatarURI] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.account.user);
  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setPhone(user.phone);
      setCity(user.city);
      setStreet(user.street);
      setBuild(user.build);
      setAvatarURI(user.avatarURI);
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      navigation.navigate('Modal', {
        type: MODAL_TYPES.confirm,
        title: NOTIFICATIONS.loginFailedModal.title,
        message: error,
        options: MODAL_OPTIONS.error,
      });

      dispatch(setError(null));
    }
  }, [dispatch, error, navigation]);

  const onPressUpdate = useCallback(() => {
    dispatch(
      setUserThunk({
        firstname: username,
        phone,
        city,
        address1: street,
        address2: build,
        avatarURI,
      }),
    );
  }, [avatarURI, build, city, dispatch, phone, street, username]);

  const onPressLogout = useCallback(() => {
    navigation.navigate('Modal', {
      type: MODAL_TYPES.logout,
      title: NOTIFICATIONS.logoutModal.title,
      options: MODAL_OPTIONS.warning,
    });
  }, [navigation]);

  return (
    <ProfileFormStyled>
      <ProfileFormWrap>
        <ProfileFormFieldsWrap>
          <Input value={username} onChange={setUsername} label="Full name" />
          <Input value={phone} onChange={setPhone} label="Mobile number" />
          <Input value={city} onChange={setCity} label="City" />
          <Input
            value={street}
            onChange={setStreet}
            label="Locality, area or street"
          />
          <Input
            value={build}
            onChange={setBuild}
            label="Flat no, building name"
          />
        </ProfileFormFieldsWrap>
        {isLoading && <SplashStyled />}
      </ProfileFormWrap>
      <ButtonStyled text="Update" onPress={onPressUpdate} />
      <ButtonStyled text="Logout" onPress={onPressLogout} />
    </ProfileFormStyled>
  );
};

export default ProfileForm;

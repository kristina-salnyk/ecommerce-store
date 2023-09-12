import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import NotificationBox from '../NotificationBox';
import Input from '../../atoms/Input';
import Splash from '../../molecules/Splash';
import {DrawerParamList, RootStackParamList} from 'navigation/types';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {
  selectAccount,
  selectError,
  selectIsLoading,
  selectIsRefreshing,
} from 'store/account/selectors';
import {getAccountThunk, updateAccountThunk} from 'store/account/thunk';
import {updateIsRefreshing} from 'store/account/actionCreators';
import noResults from '../../../assets/images/no-results.png';
import defaultAvatar from '../../../assets/images/avatar.png';
import {
  MODAL_OPTIONS,
  MODAL_TYPES,
  NOTIFICATIONS,
  PROFILE_AVATAR_SIZE,
} from 'constants/shared';
import {
  ButtonStyled,
  ProfileFormFieldsWrap,
  ProfileFormWrap,
  ProfileImageStyled,
  ProfileImageWrap,
} from './ProfileForm.styled';

const ProfileForm: FC = () => {
  const route = useRoute<RouteProp<DrawerParamList, 'MyProfile'>>();
  const [username, setUsername] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [build, setBuild] = useState<string>('');
  const [avatarURI, setAvatarURI] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  const account = useAppSelector(selectAccount);
  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);
  const isRefreshing = useAppSelector(selectIsRefreshing);

  useEffect(() => {
    if (route.params && route.params.profileImage) {
      setAvatarURI(route.params.profileImage);
    }
  }, [route.params]);

  const hasChanges = useMemo(
    () =>
      username !== account.username ||
      phone !== account.phone ||
      city !== account.city ||
      street !== account.street ||
      build !== account.build ||
      avatarURI !== account.avatarURI,
    [account, avatarURI, build, city, phone, street, username],
  );

  const getProfile = useCallback(() => {
    dispatch(getAccountThunk());
  }, [dispatch]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    if (account) {
      setUsername(account.username);
      setPhone(account.phone);
      setCity(account.city);
      setStreet(account.street);
      setBuild(account.build);
      setAvatarURI(account.avatarURI);
    }
  }, [account]);

  const refreshProfile = useCallback(() => {
    dispatch(updateIsRefreshing(true));
    getProfile();
  }, [getProfile, dispatch]);

  const onProfileUpdated = useCallback(() => {
    navigation.navigate('Modal', {
      type: MODAL_TYPES.confirm,
      title: NOTIFICATIONS.profileUpdatedModal.title,
      options: MODAL_OPTIONS.success,
    });
  }, [navigation]);

  const onProfileNotUpdated = useCallback(() => {
    navigation.navigate('Modal', {
      type: MODAL_TYPES.confirm,
      title: NOTIFICATIONS.profileNotUpdatedModal.title,
      message: NOTIFICATIONS.profileNotUpdatedModal.message,
      options: MODAL_OPTIONS.error,
    });
  }, [navigation]);

  const onPressAvatar = useCallback(() => {
    navigation.navigate('Modal', {
      type: MODAL_TYPES.avatar,
      title: NOTIFICATIONS.chooseAvatarModal.title,
    });
  }, [navigation]);

  const onPressUpdate = useCallback(() => {
    dispatch(
      updateAccountThunk(
        {
          username,
          phone,
          city,
          street,
          build,
          avatarURI,
        },
        onProfileUpdated,
        onProfileNotUpdated,
      ),
    );
  }, [
    avatarURI,
    build,
    city,
    dispatch,
    onProfileUpdated,
    onProfileNotUpdated,
    phone,
    street,
    username,
  ]);

  const onPressLogout = useCallback(() => {
    navigation.navigate('Modal', {
      type: MODAL_TYPES.logout,
      title: NOTIFICATIONS.logoutModal.title,
      options: MODAL_OPTIONS.warning,
    });
  }, [navigation]);

  if (isLoading && !isRefreshing) {
    return <Splash />;
  }

  if (error) {
    return (
      <NotificationBox
        imageSource={noResults}
        title={NOTIFICATIONS.loadingFailedNotification.title}
        message={NOTIFICATIONS.loadingFailedNotification.message}
        linkText="Refresh"
        onPressLink={getProfile}
      />
    );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={refreshProfile} />
      }>
      <ProfileFormWrap>
        <ProfileFormFieldsWrap>
          <Input value={username} onChange={setUsername} label="Full name" />
          <ProfileImageWrap onPress={onPressAvatar}>
            <ProfileImageStyled
              source={avatarURI ? {uri: avatarURI} : defaultAvatar}
              alt="Profile image"
              width={PROFILE_AVATAR_SIZE}
              height={PROFILE_AVATAR_SIZE}
              onError={() => setAvatarURI('')}
            />
          </ProfileImageWrap>
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
        <ButtonStyled
          text="Update"
          disabled={!hasChanges}
          onPress={onPressUpdate}
        />
        <ButtonStyled text="Logout" onPress={onPressLogout} />
      </ProfileFormWrap>
    </ScrollView>
  );
};

export default ProfileForm;

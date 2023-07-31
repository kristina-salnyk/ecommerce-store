import React, {FC, useCallback} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  MainStackParamList,
  RootStackParamList,
} from '../../../navigation/types';
import IconButton from '../../atoms/IconButton';
import {useAuth} from '../../../contexts/AuthContext';
import {
  MODAL_OPTIONS,
  MODAL_TITLES,
  MODAL_TYPES,
} from '../../../constants/shared';
import {HeaderRight, HeaderStyled, HeaderTitle} from './Header.styled';

interface HeaderProps {
  title: string;
  routeName: string;
}

const Header: FC<HeaderProps> = ({title, routeName}) => {
  const rootNavigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const backShown = navigation.canGoBack();
  const {
    state: {token},
  } = useAuth();

  const onPressAddToWish = useCallback(() => {}, []);

  const onPressOpenCart = useCallback(() => {
    if (!token) {
      rootNavigation.navigate('Modal', {
        type: MODAL_TYPES.LOGIN,
        title: MODAL_TITLES.userNotAuthorized,
        options: MODAL_OPTIONS.ERROR,
      });
      return;
    }

    navigation.navigate('Drawer', {screen: 'MyCart'});
  }, [navigation, rootNavigation, token]);

  const onPressToggleDrawer = useCallback(
    () => navigation.dispatch(DrawerActions.toggleDrawer()),
    [navigation],
  );

  return (
    <HeaderStyled>
      {routeName === 'Main' && (
        <IconButton
          IconComponent={MaterialCommunityIcon}
          iconName="menu"
          onPress={onPressToggleDrawer}
        />
      )}
      {routeName !== 'Main' && backShown && (
        <IconButton
          IconComponent={MaterialCommunityIcon}
          iconName="arrow-left"
          onPress={navigation.goBack}
        />
      )}
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderRight>
        {routeName === 'ProductDetails' && (
          <IconButton
            IconComponent={FontAwesomeIcon}
            iconName="heart-o"
            onPress={onPressAddToWish}
          />
        )}
        {!['SignUp', 'Login', 'ForgotPassword', 'MyCart'].includes(
          routeName,
        ) && (
          <IconButton
            IconComponent={MaterialCommunityIcon}
            iconName="cart"
            onPress={onPressOpenCart}
          />
        )}
      </HeaderRight>
    </HeaderStyled>
  );
};

export default Header;

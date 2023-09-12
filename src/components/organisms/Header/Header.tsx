import React, {FC, useCallback} from 'react';
import {DrawerActions} from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import IconButton from '../../atoms/IconButton';
import {useAppMainNavigation} from 'navigation/hooks';
import {HeaderRight, HeaderStyled, HeaderTitle} from './Header.styled';

interface HeaderProps {
  title: string;
  routeName: string;
}

const Header: FC<HeaderProps> = ({title, routeName}) => {
  const navigation = useAppMainNavigation();
  const backShown = navigation.canGoBack();

  const onPressAddToWish = useCallback(() => {}, []);

  const onPressOpenCart = useCallback(() => {
    navigation.navigate('Drawer', {screen: 'MyCart'});
  }, [navigation]);

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
      <HeaderTitle accessibilityRole="header">{title}</HeaderTitle>
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

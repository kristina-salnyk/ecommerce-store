import React, {FC, useCallback} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import IconButton from '../../atoms/IconButton';
import {MainStackParamList} from '../../../navigation/types';
import {HeaderRight, HeaderStyled, HeaderTitle} from './Header.styled';

interface HeaderProps {
  title: string;
  routeName: string;
  drawerToggleShown?: boolean;
}

const Header: FC<HeaderProps> = ({
  title,
  routeName,
  drawerToggleShown = false,
}) => {
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const onPressWish = useCallback(() => {}, []);

  const onPressCart = useCallback(
    () => navigation.navigate('Drawer', {screen: 'MyCart'}),
    [navigation],
  );

  const onPressToggleDrawer = useCallback(
    () => navigation.dispatch(DrawerActions.toggleDrawer()),
    [navigation],
  );

  return (
    <HeaderStyled>
      {drawerToggleShown ? (
        <IconButton
          IconComponent={MaterialCommunityIcon}
          iconName="menu"
          onPress={onPressToggleDrawer}
        />
      ) : (
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
            onPress={onPressWish}
          />
        )}
        {routeName !== 'MyCart' && (
          <IconButton
            IconComponent={MaterialCommunityIcon}
            iconName="cart"
            onPress={onPressCart}
          />
        )}
      </HeaderRight>
    </HeaderStyled>
  );
};

export default Header;

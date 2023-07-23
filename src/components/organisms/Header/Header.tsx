import React, {FC, useCallback} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import IconButton from '../../atoms/IconButton';
import {RootStackParamList} from '../../../navigation/types';
import {HeaderRight, HeaderTitle, HeaderWrap} from './Header.styled';

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
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const addToFavorite = useCallback(() => {}, []);

  const navigateToCart = useCallback(() => {}, []);

  const toggleDrawer = useCallback(
    () => navigation.dispatch(DrawerActions.toggleDrawer()),
    [navigation],
  );

  return (
    <HeaderWrap>
      {drawerToggleShown ? (
        <IconButton
          IconComponent={MaterialCommunityIcon}
          iconName="menu"
          onPress={toggleDrawer}
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
            onPress={addToFavorite}
          />
        )}
        <IconButton
          IconComponent={MaterialIcon}
          iconName="shopping-cart"
          onPress={navigateToCart}
        />
      </HeaderRight>
    </HeaderWrap>
  );
};

export default Header;

import React, {FC, useCallback} from 'react';
import {
  DrawerActions,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import IconButton from '../../atoms/IconButton';
import {DrawerParamList, RootStackParamList} from '../../../navigation/types';
import {HeaderRight, HeaderStyled, HeaderTitle} from './Header.styled';

interface HeaderProps {
  title: string;
  routeName: string;
}

const Header: FC<HeaderProps> = ({title, routeName}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {params} = useRoute<RouteProp<DrawerParamList>>();
  const isDrawerLink = params?.isDrawerLink;

  const addToFavorite = useCallback(() => {}, []);

  const navigateToCart = useCallback(
    () => navigation.navigate('Drawer', {screen: 'MyCart'}),
    [navigation],
  );

  const toggleDrawer = useCallback(
    () => navigation.dispatch(DrawerActions.toggleDrawer()),
    [navigation],
  );

  return (
    <HeaderStyled>
      {routeName === 'Main' || isDrawerLink ? (
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
        {routeName !== 'MyCart' && (
          <IconButton
            IconComponent={MaterialCommunityIcon}
            iconName="cart"
            onPress={navigateToCart}
          />
        )}
      </HeaderRight>
    </HeaderStyled>
  );
};

export default Header;

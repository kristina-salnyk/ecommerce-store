import React, {FC, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import IconButton from '../../atoms/IconButton';
import {MainStackParamList} from '../../../navigation/types';
import {HeaderRight, HeaderTitle, HeaderWrap} from './Header.styled';

interface HeaderProps {
  title: string;
  routeName: string;
}

const Header: FC<HeaderProps> = ({title, routeName}) => {
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const addToFavorite = useCallback(() => {}, []);

  const navigateToCart = useCallback(() => {}, []);

  const openDrawer = useCallback(() => {}, []);

  return (
    <HeaderWrap>
      {routeName === 'Main' ? (
        <IconButton
          IconComponent={MaterialCommunityIcon}
          iconName="menu"
          onPress={openDrawer}
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

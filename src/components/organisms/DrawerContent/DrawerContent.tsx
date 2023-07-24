import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Title from '../../atoms/Title';
import DrawerLink from '../../atoms/DrawerLink';
import {DrawerParamList} from '../../../navigation/types';
import {
  DrawerContentBlock,
  DrawerLogo,
  DrawerLogoText,
  HorizontalLineStyled,
} from './DrawerContent.styled';

const DrawerContent: FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const handleNavigation = (screenName: keyof DrawerParamList) => {
    navigation.reset({
      index: 0,
      routes: [{name: screenName, params: {isDrawerLink: true}}],
    });
  };

  return (
    <ScrollView>
      <DrawerContentBlock>
        <DrawerLogo onPress={() => handleNavigation('Main')}>
          <DrawerLogoText>Ecommerce{'\n'}Store</DrawerLogoText>
        </DrawerLogo>
      </DrawerContentBlock>
      <DrawerContentBlock>
        <Title text="My Account" />
        <DrawerLink
          IconComponent={IoniconsIcon}
          iconName="person"
          text="My Profile"
          onPress={() => handleNavigation('MyProfile')}
        />
        <DrawerLink
          IconComponent={FontAwesomeIcon}
          iconName="heart"
          text="My Wish List"
          onPress={() => handleNavigation('MyWishList')}
        />
        <DrawerLink
          IconComponent={MaterialCommunityIcon}
          iconName="cart"
          text="My Cart"
          onPress={() => handleNavigation('MyCart')}
        />
        <DrawerLink
          IconComponent={MaterialCommunityIcon}
          iconName="cart-check"
          text="My Orders"
          onPress={() => handleNavigation('MyOrders')}
        />
      </DrawerContentBlock>
      <HorizontalLineStyled />
      <DrawerContentBlock>
        <Title text="Support" />
        <DrawerLink
          IconComponent={IoniconsIcon}
          iconName="mail"
          text="Email"
          onPress={() => {}}
        />
        <DrawerLink
          IconComponent={FontAwesomeIcon}
          iconName="phone"
          text="Call"
          onPress={() => {}}
        />
      </DrawerContentBlock>
      <HorizontalLineStyled />
      <DrawerContentBlock>
        <DrawerLink
          IconComponent={IoniconsIcon}
          iconName="share-social"
          text="Share"
          onPress={() => {}}
        />
      </DrawerContentBlock>
    </ScrollView>
  );
};

export default DrawerContent;

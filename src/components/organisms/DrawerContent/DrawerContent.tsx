import React, {FC, useCallback} from 'react';
import {Linking, ScrollView, Share} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {DrawerParamList} from '../../../navigation/types';
import Logo from '../../atoms/Logo';
import Title from '../../atoms/Title';
import DrawerLink from '../../atoms/DrawerLink';
import {useAuth} from '../../../contexts/AuthContext';
import {
  DrawerContentBlock,
  DrawerLogo,
  HorizontalLineStyled,
} from './DrawerContent.styled';

const DrawerContent: FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  const {
    state: {token},
  } = useAuth();

  const onPressDrawerLink = useCallback(
    (screenName: keyof DrawerParamList) => navigation.navigate(screenName),
    [navigation],
  );

  const onPressEmailLink = useCallback(async () => {
    const canOpen = await Linking.canOpenURL('mailto:commerce.store@mail.com');

    if (canOpen) {
      try {
        await Linking.openURL('mailto:kristina.salnyk@gmail.com');
      } catch (error) {
        console.log('Error opening email:', error);
      }
    } else {
      console.log('Device does not support opening email URLs.');
    }
  }, []);

  const onPressCallLink = useCallback(async () => {
    const canOpen = await Linking.canOpenURL('tel:+1234567890');

    if (canOpen) {
      try {
        await Linking.openURL('tel:+1234567890');
      } catch (error) {
        console.log('Error calling:', error);
      }
    } else {
      console.log('Device does not support calling phone numbers.');
    }
  }, []);

  const onPressShareLink = useCallback(async () => {
    try {
      await Share.share({
        message: 'Check out Commerce Store app!',
        url: 'https://www.commerce-store.com',
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  }, []);

  return (
    <ScrollView>
      <DrawerContentBlock>
        <DrawerLogo onPress={() => onPressDrawerLink('Main')}>
          <Logo />
        </DrawerLogo>
      </DrawerContentBlock>
      {token && (
        <>
          <DrawerContentBlock>
            <Title text="My Account" />
            <DrawerLink
              IconComponent={IoniconsIcon}
              iconName="person"
              text="My Profile"
              onPress={() => onPressDrawerLink('MyProfile')}
            />
            <DrawerLink
              IconComponent={FontAwesomeIcon}
              iconName="heart"
              text="My Wish List"
              onPress={() => onPressDrawerLink('MyWishList')}
            />
            <DrawerLink
              IconComponent={MaterialCommunityIcon}
              iconName="cart"
              text="My Cart"
              onPress={() => onPressDrawerLink('MyCart')}
            />
            <DrawerLink
              IconComponent={MaterialCommunityIcon}
              iconName="cart-check"
              text="My Orders"
              onPress={() => onPressDrawerLink('MyOrders')}
            />
          </DrawerContentBlock>
          <HorizontalLineStyled />
        </>
      )}
      <DrawerContentBlock>
        <Title text="Support" />
        <DrawerLink
          IconComponent={IoniconsIcon}
          iconName="mail"
          text="Email"
          onPress={onPressEmailLink}
        />
        <DrawerLink
          IconComponent={FontAwesomeIcon}
          iconName="phone"
          text="Call"
          onPress={onPressCallLink}
        />
      </DrawerContentBlock>
      <HorizontalLineStyled />
      <DrawerContentBlock>
        <DrawerLink
          IconComponent={IoniconsIcon}
          iconName="share-social"
          text="Share"
          onPress={onPressShareLink}
        />
      </DrawerContentBlock>
    </ScrollView>
  );
};

export default DrawerContent;

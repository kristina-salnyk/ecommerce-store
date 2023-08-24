import React, {FC, useCallback} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {DrawerParamList} from '../../../navigation/types';
import Logo from '../../atoms/Logo';
import Title from '../../atoms/Title';
import DrawerLink from '../../atoms/DrawerLink';
import openCallLink from '../../../utils/openCallLink';
import openEmailLink from '../../../utils/openEmailLink';
import openShareLink from '../../../utils/openShareLink';
import {useAppSelector} from '../../../store/hooks';
import {selectToken} from '../../../store/account/selectors';
import {
  DrawerContentBlock,
  DrawerLogo,
  HorizontalLineStyled,
} from './DrawerContent.styled';

const DrawerContent: FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const token = useAppSelector(selectToken);

  const onPressDrawerLink = useCallback(
    (screenName: keyof DrawerParamList) => navigation.navigate(screenName),
    [navigation],
  );

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
          onPress={openEmailLink}
        />
        <DrawerLink
          IconComponent={FontAwesomeIcon}
          iconName="phone"
          text="Call"
          onPress={openCallLink}
        />
      </DrawerContentBlock>
      <HorizontalLineStyled />
      <DrawerContentBlock>
        <DrawerLink
          IconComponent={IoniconsIcon}
          iconName="share-social"
          text="Share"
          onPress={openShareLink}
        />
      </DrawerContentBlock>
    </ScrollView>
  );
};

export default DrawerContent;

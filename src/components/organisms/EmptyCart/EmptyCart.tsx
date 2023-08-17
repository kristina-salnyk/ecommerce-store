import React, {FC, useCallback} from 'react';
import {Image} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

import {DrawerParamList} from '../../../navigation/types';
import Title from '../../atoms/Title';
import Message from '../../atoms/Message';
import emptyCart from '../../../assets/images/cart.png';
import {ButtonStyled, EmptyCartStyled} from './EmptyCart.styled';

const EmptyCart: FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const onPressShopNow = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Main');
    }
  }, [navigation]);

  return (
    <EmptyCartStyled>
      <Image source={emptyCart} alt="Empty cart" />
      <Title text="Your Cart is Empty!" />
      <Message text="Add product in your cart now" />
      <ButtonStyled text="Shop now" onPress={onPressShopNow} />
    </EmptyCartStyled>
  );
};

export default EmptyCart;

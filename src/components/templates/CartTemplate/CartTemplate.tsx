import React, {FC, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import {DrawerParamList} from '../../../navigation/types';
import PurchaseList from '../../organisms/PurchaseList';
import NotificationBox from '../../organisms/NotificationBox';
import Cart from '../../../interfaces/Cart';
import emptyCart from '../../../assets/images/cart.png';
import {ButtonStyled, CartTemplateStyled} from './CartTemplate.styled';

interface CartTemplateProps {
  cart: Cart | null;
}

const CartTemplate: FC<CartTemplateProps> = ({cart}) => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const onPressShopNow = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Main');
    }
  }, [navigation]);

  const proceedToPayment = useCallback(() => {}, []);

  return (
    <CartTemplateStyled>
      {cart ? (
        <>
          <PurchaseList cart={cart} />
          <ButtonStyled text="Proceed to payment" onPress={proceedToPayment} />
        </>
      ) : (
        <NotificationBox
          imageSource={emptyCart}
          title="Your Cart is Empty!"
          message="Add product in your cart now"
          action="Shop now"
          onPress={onPressShopNow}
        />
      )}
    </CartTemplateStyled>
  );
};

export default CartTemplate;

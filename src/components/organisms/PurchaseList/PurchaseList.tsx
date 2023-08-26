import React, {FC, useCallback} from 'react';
import {FlatList, RefreshControl} from 'react-native';

import PurchaseItem from '../../molecules/PurchaseItem';
import PriceDetails from '../../molecules/PriceDetails';
import useRefreshing from '../../../hooks/useRefreshing';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerParamList} from '../../../navigation/types';
import {ButtonStyled} from '../../templates/CartTemplate/CartTemplate.styled';
import emptyCart from '../../../assets/images/cart.png';
import {NOTIFICATIONS} from '../../../constants/shared';
import NotificationBox from '../NotificationBox';
import {CART} from '../../../constants/data';

const PurchaseList: FC = () => {
  const [isRefreshing, onRefresh] = useRefreshing();
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const onPressShopNow = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Main');
    }
  }, [navigation]);

  const proceedToPayment = useCallback(() => {}, []);

  if (!CART) {
    return (
      <NotificationBox
        imageSource={emptyCart}
        title={NOTIFICATIONS.emptyCartNotification.title}
        message={NOTIFICATIONS.emptyCartNotification.message}
        action="Shop now"
        onPress={onPressShopNow}
      />
    );
  }

  return (
    <>
      <FlatList
        data={CART.included}
        renderItem={({item}) => (
          <PurchaseItem
            id={item.id}
            name={item.attributes.name}
            options={item.attributes.options_text}
            price={item.attributes.pre_tax_amount}
            priceView={item.attributes.display_pre_tax_amount}
            promo={item.attributes.promo_total}
            currency={item.attributes.currency}
            quantity={item.attributes.quantity}
          />
        )}
        ListFooterComponent={() => (
          <PriceDetails
            priceView={CART.data.attributes.display_pre_tax_item_amount}
            quantity={CART.data.attributes.item_count}
            deliveryView={CART.data.attributes.display_ship_total}
            discountView={CART.data.attributes.display_promo_total}
            taxView={CART.data.attributes.display_tax_total}
            totalView={CART.data.attributes.display_total}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      />
      <ButtonStyled text="Proceed to payment" onPress={proceedToPayment} />
    </>
  );
};

export default PurchaseList;

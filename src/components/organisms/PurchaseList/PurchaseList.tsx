import React, {FC} from 'react';
import {FlatList, RefreshControl} from 'react-native';

import PurchaseItem from '../../molecules/PurchaseItem';
import PriceDetails from '../../molecules/PriceDetails';
import useRefreshing from '../../../hooks/useRefreshing';
import Cart from '../../../interfaces/Cart';

interface PurchaseListProps {
  cart: Cart;
}

const PurchaseList: FC<PurchaseListProps> = ({cart}) => {
  const [refreshing, onRefresh] = useRefreshing();

  return (
    <FlatList
      data={cart.included}
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
          priceView={cart.data.attributes.display_pre_tax_item_amount}
          quantity={cart.data.attributes.item_count}
          deliveryView={cart.data.attributes.display_ship_total}
          discountView={cart.data.attributes.display_promo_total}
          taxView={cart.data.attributes.display_tax_total}
          totalView={cart.data.attributes.display_total}
        />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default PurchaseList;

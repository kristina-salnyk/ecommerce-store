import React, {FC, useCallback, useMemo} from 'react';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {RootStackParamList} from '../../../navigation/types';
import IconButton from '../../atoms/IconButton';
import ProductName from '../../atoms/ProductName';
import ProductCost from '../../atoms/ProductCost';
import ProductImage from '../../atoms/ProductImage';
import ProductOptions from '../../atoms/ProductOptions';
import ProductQuantity from '../../atoms/ProductQuantity';
import getImagePathById from '../../../utils/getImagePathById';
import {
  changeQuantityThunk,
  deleteCartItemThunk,
} from '../../../store/cart/thunk';
import {useAppDispatch} from '../../../store/hooks';
import {
  MODAL_OPTIONS,
  MODAL_TYPES,
  NOTIFICATIONS,
  PURCHASE_ITEM_IMAGE_SIZE,
} from '../../../constants/shared';
import {
  IconButtonStyled,
  PurchaseImageWrap,
  PurchaseItemActions,
  PurchaseItemDetails,
  PurchaseItemDetailsWrap,
  PurchaseItemStyled,
  PurchaseItemWrap,
  PurchaseQuantityWrap,
} from './PurchaseItem.styled';

interface PurchaseItemProps {
  id: string;
  productId: string;
  name: string;
  options: string;
  price: string;
  priceView: string;
  promo: string;
  currency: string;
  quantity: number;
}

const PurchaseItem: FC<PurchaseItemProps> = ({
  id,
  productId,
  name,
  options,
  price,
  priceView,
  promo,
  currency,
  quantity,
}) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const priceNum = Number(price);
  const promoNum = Number(promo);

  const compareAtPrice = useMemo(
    () => (priceNum + promoNum).toString(),
    [priceNum, promoNum],
  );

  const compareAtPriceView = useMemo(
    () => `${currency === 'USD' ? '$' : ''}${compareAtPrice}`,
    [compareAtPrice, currency],
  );

  const onProductNotRemoved = useCallback(() => {
    navigation.navigate('Modal', {
      type: MODAL_TYPES.confirm,
      title: NOTIFICATIONS.productNotRemovedModal.title,
      message: NOTIFICATIONS.productNotRemovedModal.message,
      options: MODAL_OPTIONS.error,
    });
  }, [navigation]);

  const onProductQuantityNotChanged = useCallback(() => {
    navigation.navigate('Modal', {
      type: MODAL_TYPES.confirm,
      title: NOTIFICATIONS.productQuantityNotChangedModal.title,
      message: NOTIFICATIONS.productQuantityNotChangedModal.message,
      options: MODAL_OPTIONS.error,
    });
  }, [navigation]);

  const onPressIncreaseQuantity = useCallback(() => {
    dispatch(
      changeQuantityThunk(
        {line_item_id: id, quantity: quantity + 1},
        onProductQuantityNotChanged,
      ),
    );
  }, [dispatch, id, onProductQuantityNotChanged, quantity]);

  const onPressDecreaseQuantity = useCallback(() => {
    dispatch(
      changeQuantityThunk(
        {line_item_id: id, quantity: quantity - 1},
        onProductQuantityNotChanged,
      ),
    );
  }, [dispatch, id, onProductQuantityNotChanged, quantity]);

  const onPressDelete = useCallback(() => {
    dispatch(deleteCartItemThunk(id, onProductNotRemoved));
  }, [dispatch, id, onProductNotRemoved]);

  return (
    <PurchaseItemWrap>
      <PurchaseItemStyled>
        <PurchaseItemDetailsWrap>
          <PurchaseImageWrap width={PURCHASE_ITEM_IMAGE_SIZE}>
            <ProductImage
              path={getImagePathById(productId, PURCHASE_ITEM_IMAGE_SIZE)}
              options={{
                height: PURCHASE_ITEM_IMAGE_SIZE,
                width: PURCHASE_ITEM_IMAGE_SIZE,
              }}
              alt={name}
            />
          </PurchaseImageWrap>
          <PurchaseItemDetails>
            <ProductName text={name} />
            <ProductOptions text={options} />
            <ProductCost
              price={price}
              priceView={priceView}
              compareAtPrice={compareAtPrice}
              compareAtPriceView={compareAtPriceView}
            />
          </PurchaseItemDetails>
        </PurchaseItemDetailsWrap>
        <PurchaseItemActions>
          <PurchaseQuantityWrap>
            <IconButton
              IconComponent={SimpleLineIcon}
              iconName="plus"
              onPress={onPressIncreaseQuantity}
              color={theme.color.gray}
            />
            <ProductQuantity num={quantity} />
            <IconButton
              IconComponent={SimpleLineIcon}
              iconName="minus"
              onPress={onPressDecreaseQuantity}
              color={theme.color[quantity > 1 ? 'gray' : 'lightGray']}
            />
          </PurchaseQuantityWrap>
          <IconButtonStyled
            IconComponent={FontAwesomeIcon}
            iconName="trash"
            onPress={onPressDelete}
            color={theme.color.gray}
          />
        </PurchaseItemActions>
      </PurchaseItemStyled>
    </PurchaseItemWrap>
  );
};

export default PurchaseItem;

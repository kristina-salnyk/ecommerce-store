import React, {FC, useCallback, useMemo, useState} from 'react';
import {useTheme} from 'styled-components';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import IconButton from '../../atoms/IconButton';
import ProductName from '../../atoms/ProductName';
import ProductCost from '../../atoms/ProductCost';
import ProductImage from '../../atoms/ProductImage';
import ProductOptions from '../../atoms/ProductOptions';
import ProductQuantity from '../../atoms/ProductQuantity';
import getImagePathById from '../../../utils/getImagePathById';
import {PURCHASE_ITEM_IMAGE_SIZE} from '../../../constants/shared';
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
import parseNumber from '../../../utils/parseNumber';

interface PurchaseItemProps {
  id: string;
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
  name,
  options,
  price,
  priceView,
  promo,
  currency,
  quantity,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const theme = useTheme();

  const priceNum = parseNumber(price);
  const promoNum = parseNumber(promo);

  const compareAtPrice = useMemo(
    () => (priceNum + promoNum).toString(),
    [priceNum, promoNum],
  );

  const compareAtPriceView = useMemo(
    () => `${currency === 'USD' ? '$' : ''}${compareAtPrice}`,
    [compareAtPrice, currency],
  );

  const onPressIncreaseQuantity = useCallback(() => {
    setCurrentQuantity(prevState => prevState + 1);
  }, []);

  const onPressDecreaseQuantity = useCallback(() => {
    setCurrentQuantity(prevState => prevState - 1);
  }, []);

  const onPressDelete = useCallback(() => {}, []);

  return (
    <PurchaseItemWrap>
      <PurchaseItemStyled>
        <PurchaseItemDetailsWrap>
          <PurchaseImageWrap width={PURCHASE_ITEM_IMAGE_SIZE}>
            <ProductImage
              source={{uri: getImagePathById(id, PURCHASE_ITEM_IMAGE_SIZE)}}
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
              color={theme.color.lightGray}
            />
            <ProductQuantity num={currentQuantity} />
            <IconButton
              IconComponent={SimpleLineIcon}
              iconName="minus"
              onPress={onPressDecreaseQuantity}
              color={theme.color.lightGray}
            />
          </PurchaseQuantityWrap>
          <IconButtonStyled
            IconComponent={FontAwesomeIcon}
            iconName="trash"
            onPress={onPressDelete}
            color={theme.color.lightGray}
          />
        </PurchaseItemActions>
      </PurchaseItemStyled>
    </PurchaseItemWrap>
  );
};

export default PurchaseItem;

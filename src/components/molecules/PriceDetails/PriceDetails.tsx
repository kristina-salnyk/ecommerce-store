import React, {FC} from 'react';
import {useTheme} from 'styled-components';

import Title from '../../atoms/Title';
import PriceRow from '../../atoms/PriceRow';
import HorizontalLine from '../../atoms/HorizontalLine';
import SecureBanner from '../SecureBanner';
import {PriceDetailsStyled, PriceDetailsWrap} from './PriceDetails.styled';

interface PriceDetailsProps {
  priceView: string;
  quantity: number;
  deliveryView: string;
  discountView: string;
  taxView: string;
  totalView: string;
}

const PriceDetails: FC<PriceDetailsProps> = ({
  priceView,
  quantity,
  deliveryView,
  discountView,
  taxView,
  totalView,
}) => {
  const theme = useTheme();

  return (
    <PriceDetailsWrap>
      <PriceDetailsStyled>
        <Title text="Price Details" />
        <PriceRow
          text={`Price (${quantity} item${quantity > 1 ? 's' : ''})`}
          value={priceView}
        />
        <PriceRow text="Delivery" value={deliveryView} />
        <PriceRow text="Discount" value={discountView} isHighlighted={true} />
        <PriceRow text="Tax (2%)" value={taxView} />
        <HorizontalLine />
        <PriceRow
          text="Amount Payable"
          value={totalView}
          color={theme.color.darkGray}
        />
      </PriceDetailsStyled>
      <SecureBanner />
    </PriceDetailsWrap>
  );
};

export default PriceDetails;

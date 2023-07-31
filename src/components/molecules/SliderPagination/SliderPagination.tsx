import React, {FC} from 'react';
import {Pagination} from 'react-native-snap-carousel';
import {useTheme} from 'styled-components';

import {PAGINATION_DOT_SCALE} from '../../../constants/shared';
import {SliderPaginationStyle} from './SliderPagination.style';

interface SliderPaginationProps {
  carouselRef: any;
  dotsLength: number;
  activeDotIndex: number;
}

const SliderPagination: FC<SliderPaginationProps> = ({
  carouselRef,
  dotsLength,
  activeDotIndex,
}) => {
  const theme = useTheme();

  return (
    <Pagination
      carouselRef={carouselRef}
      dotsLength={dotsLength}
      activeDotIndex={activeDotIndex}
      dotStyle={SliderPaginationStyle.dot}
      dotColor={theme.color.primary}
      inactiveDotColor={theme.color.lightGray}
      inactiveDotScale={PAGINATION_DOT_SCALE}
      tappableDots={true}
    />
  );
};

export default SliderPagination;

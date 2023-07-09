import React from 'react';
import {Pagination} from 'react-native-snap-carousel';
import {useTheme} from 'styled-components';
import PropTypes from 'prop-types';

import {SliderPaginationStyle} from './SliderPagination.style';

const SliderPagination = ({carouselRef, dotsLength, activeDotIndex}) => {
  const theme = useTheme();

  return (
    <Pagination
      carouselRef={carouselRef}
      dotsLength={dotsLength}
      activeDotIndex={activeDotIndex}
      containerStyle={SliderPaginationStyle.container}
      dotStyle={SliderPaginationStyle.dot}
      dotColor={theme.color.primary}
      inactiveDotColor={theme.color.lightGray}
      inactiveDotScale={1}
      tappableDots={true}
    />
  );
};

export default SliderPagination;

SliderPagination.propTypes = {
  carouselRef: PropTypes.object.isRequired,
  dotsLength: PropTypes.number.isRequired,
  activeDotIndex: PropTypes.number.isRequired,
};

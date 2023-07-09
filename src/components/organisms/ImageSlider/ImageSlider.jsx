import React, {useRef, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import {useTheme} from 'styled-components';

import ImageItem from '../../molecules/ImageItem';
import {ImageSliderStyle} from './ImageSlider.style';

const ImageSlider = ({images, options}) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  return (
    <>
      <Carousel
        ref={carouselRef}
        data={images}
        renderItem={({item}) => (
          <ImageItem
            image={item}
            options={{width: options.sliderWidth, height: options.sliderHeight}}
          />
        )}
        sliderWidth={options.sliderWidth}
        itemWidth={options.sliderWidth}
        itemHeight={options.sliderHeight}
        onSnapToItem={index => setCurrentIndex(index)}
      />
      <Pagination
        carouselRef={carouselRef}
        dotsLength={images.length}
        activeDotIndex={currentIndex}
        containerStyle={ImageSliderStyle.container}
        dotStyle={ImageSliderStyle.dot}
        dotColor={theme.color.primary}
        inactiveDotColor={theme.color.lightGray}
        inactiveDotScale={1}
        tappableDots={true}
      />
    </>
  );
};

export default ImageSlider;

ImageSlider.propTypes = {
  images: PropTypes.array.isRequired,
  options: PropTypes.shape({
    sliderWidth: PropTypes.number.isRequired,
    sliderHeight: PropTypes.number.isRequired,
  }),
};

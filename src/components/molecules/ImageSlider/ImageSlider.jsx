import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';

import ProductImage from '../../atoms/ProductImage';
import SliderPagination from '../../atoms/SliderPagination';
import SliderButton from '../../atoms/SliderButton';
import {CarouselWrap, ImageSliderStyled} from './ImageSlider.styled';

const ImageSlider = ({images, options}) => {
  const [sliderWidth, setSliderWidth] = useState(300);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const isPrevDisabled = currentIndex <= 0;
  const isNextDisabled = currentIndex >= images.length - 1;

  const onLayoutCarousel = event => {
    setSliderWidth(event.nativeEvent.layout.width);
  };

  const onPressNext = () => {
    if (carouselRef.current) {
      carouselRef.current.snapToNext();
    }
  };

  const onPressPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.snapToPrev();
    }
  };

  return (
    <View>
      <ImageSliderStyled>
        <SliderButton
          name="arrow-left"
          onPress={onPressPrev}
          disabled={isPrevDisabled}
        />
        <CarouselWrap onLayout={onLayoutCarousel}>
          <Carousel
            ref={carouselRef}
            data={images}
            renderItem={({item}) => (
              <ProductImage
                image={`https://picsum.photos/id/${item.id}/600/600`}
                options={{
                  width: sliderWidth,
                  height: options.sliderHeight,
                }}
              />
            )}
            sliderWidth={sliderWidth}
            itemWidth={sliderWidth}
            itemHeight={options.sliderHeight}
            onSnapToItem={index => setCurrentIndex(index)}
          />
        </CarouselWrap>
        <SliderButton
          name="arrow-right"
          onPress={onPressNext}
          disabled={isNextDisabled}
        />
      </ImageSliderStyled>
      <SliderPagination
        carouselRef={carouselRef}
        dotsLength={images.length}
        activeDotIndex={currentIndex}
      />
    </View>
  );
};

export default ImageSlider;

ImageSlider.propTypes = {
  images: PropTypes.array.isRequired,
  options: PropTypes.shape({
    sliderHeight: PropTypes.number.isRequired,
  }),
};

import React, {FC, useCallback, useRef, useState} from 'react';
import {LayoutChangeEvent, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import ProductImage from '../../atoms/ProductImage';
import SliderPagination from '../../atoms/SliderPagination';
import SliderButton from '../../atoms/SliderButton';
import ProductPicture from '../../../interfaces/ProductPicture';
import getImagePathById from '../../../utils/getImagePathById';
import {SLIDER_SIZE} from '../../../constants/shared';
import {CarouselWrap, ImageSliderStyled} from './ImageSlider.styled';

interface ImageSliderProps {
  images: ProductPicture[];
  options: {sliderSize?: number};
}

const ImageSlider: FC<ImageSliderProps> = ({images, options}) => {
  const [sliderSize, setSliderSize] = useState<number>(SLIDER_SIZE);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<Carousel<ProductPicture>>(null);
  const isPrevDisabled = currentIndex <= 0;
  const isNextDisabled = currentIndex >= images.length - 1;

  const onLayoutCarousel = useCallback(
    (event: LayoutChangeEvent) => {
      setSliderSize(
        options.sliderSize ?? Math.round(event.nativeEvent.layout.width),
      );
    },
    [options.sliderSize],
  );

  const onPressNext = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.snapToNext();
    }
  }, []);

  const onPressPrev = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.snapToPrev();
    }
  }, []);

  return (
    <View>
      <ImageSliderStyled>
        <SliderButton
          iconName="arrow-left"
          onPress={onPressPrev}
          disabled={isPrevDisabled}
        />
        <CarouselWrap onLayout={onLayoutCarousel}>
          <Carousel
            ref={carouselRef}
            data={images}
            renderItem={({item}) => (
              <ProductImage
                path={getImagePathById(item.id, sliderSize)}
                options={{
                  width: sliderSize,
                  height: sliderSize,
                }}
              />
            )}
            sliderWidth={sliderSize}
            itemWidth={sliderSize}
            itemHeight={sliderSize}
            onSnapToItem={index => setCurrentIndex(index)}
          />
        </CarouselWrap>
        <SliderButton
          iconName="arrow-right"
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

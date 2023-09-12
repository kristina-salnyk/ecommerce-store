import styled from 'styled-components/native';

export const ImageSliderStyled = styled.View<{testID: string}>`
  flex-direction: row;
  align-items: center;
`;

export const CarouselWrap = styled.View`
  margin: 0 ${({theme}) => theme.space.x16};
  align-items: center;
  flex: 1;
`;

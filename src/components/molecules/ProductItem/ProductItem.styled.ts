import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const ProductItemWrap = styled.View<{percentWidth: number}>`
  padding: ${({theme}) => theme.space.x8};
  width: ${({percentWidth}) => percentWidth}%;
`;

export const ProductItemStyled = styled.View`
  padding: ${({theme}) => theme.space.x8};
  background-color: ${({theme}) => theme.color.white};
  border-radius: ${({theme}) => theme.shape.radius.xs};
  flex-grow: 1;

  ${({theme}) =>
    `shadow-color: ${theme.color.black};
    ${
      Platform.OS === 'ios'
        ? `
        shadow-offset: 0;
        shadow-opacity: 0.2;
        shadow-radius: 4px;
      `
        : `
        elevation: 4;
      `
    }`}
`;

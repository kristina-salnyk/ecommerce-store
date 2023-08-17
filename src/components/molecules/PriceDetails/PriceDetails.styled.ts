import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const PriceDetailsWrap = styled.View`
  padding: ${({theme}) => theme.space.x8};
`;

export const PriceDetailsStyled = styled.View`
  padding: ${({theme}) => theme.space.x8} ${({theme}) => theme.space.x16}
    ${({theme}) => theme.space.x16};
  background-color: ${({theme}) => theme.color.white};
  border-radius: ${({theme}) => theme.shape.radius.xs};

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

import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const ProductItemWrap = styled.View`
  padding: ${({theme}) => theme.space[1]};
  width: ${({width}) => width}%;
`;

export const ProductItemStyled = styled.View`
  padding: ${({theme}) => theme.space[1]};
  background-color: ${({theme}) => theme.color.white};
  border-radius: ${({theme}) => theme.shape.radius.xs};
  flex-grow: 1;

  ${({theme}) =>
    Platform.OS === 'ios'
      ? `
        shadow-color: ${theme.color.black};
        shadow-offset: 0px 0px;
        shadow-opacity: 0.2;
        shadow-radius: 4px;
      `
      : `
        elevation: 5;
      `}
`;

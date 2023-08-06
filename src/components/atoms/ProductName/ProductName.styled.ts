import styled from 'styled-components/native';
import {StyleProp, ViewStyle} from 'react-native';

export const ProductNameStyled = styled.Text<{style: StyleProp<ViewStyle>}>`
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme}) => theme.color.darkGray};
`;

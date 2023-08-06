import styled from 'styled-components/native';
import {StyleProp, ViewStyle} from 'react-native';

export const ProductImageStyled = styled.Image<{style: StyleProp<ViewStyle>}>`
  width: 100%;
  border-radius: 4px;
`;

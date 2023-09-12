import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const ShadowBoxStyled = styled.View<{accessibilityRole?: string}>`
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

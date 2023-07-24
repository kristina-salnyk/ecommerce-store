import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const HeaderContainerStyled = styled.View`
  background-color: ${({theme}) => theme.color.primary};

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

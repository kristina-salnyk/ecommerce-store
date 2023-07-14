import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const SearchBarStyled = styled.View`
  padding: ${({theme}) => theme.space.x16};
  background-color: ${({theme}) => theme.color.white};

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

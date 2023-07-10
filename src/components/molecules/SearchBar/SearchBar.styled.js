import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const SearchBarStyled = styled.View`
  padding: ${({theme}) => theme.space[2]};
  background-color: ${({theme}) => theme.color.white};

  ${({theme}) =>
    Platform.OS === 'ios'
      ? `
        shadow-color: ${theme.color.black};
        shadow-offset: 0px 10px;
        shadow-opacity: 0.1;
        shadow-radius: 8px;
      `
      : `
        elevation: 5;
      `}
`;

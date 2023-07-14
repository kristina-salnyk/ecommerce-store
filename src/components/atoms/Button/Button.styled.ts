import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const ButtonStyled = styled.TouchableOpacity`
  padding: ${({theme}) => theme.space.x16} 0;
  background-color: ${({theme}) => theme.color.primary};
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

export const ButtonText = styled.Text`
  font-size: ${({theme}) => theme.font.size.m};
  font-weight: ${({theme}) => theme.font.weight.semi};
  color: ${({theme}) => theme.color.white};
  text-transform: uppercase;
  text-align: center;
`;

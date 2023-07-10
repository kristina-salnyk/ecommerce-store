import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const ButtonStyled = styled.TouchableOpacity`
  padding: ${({theme}) => theme.space[2]} 0;
  background-color: ${({theme}) => theme.color.primary};
  border-radius: ${({theme}) => theme.shape.radius.xs};

  ${({theme}) =>
    Platform.OS === 'ios'
      ? `
        shadow-color: ${theme.color.black};
        shadow-offset: 0px 0px;
        shadow-opacity: 0.4;
        shadow-radius: 4px;
      `
      : `
        padding: 12px 0;
        elevation: 5;
      `}
`;

export const ButtonText = styled.Text`
  font-size: ${({theme}) => theme.font.size.m};
  font-weight: ${({theme}) => theme.font.weight.semi};
  color: ${({theme}) => theme.color.white};
  text-align: center;
  text-transform: uppercase;
`;

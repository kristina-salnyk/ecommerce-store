import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const InputWrap = styled.View`
  position: relative;
`;

export const IconWrap = styled.View`
  position: absolute;
  top: 0;
  left: ${({theme}) => theme.space[1]};
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const InputStyled = styled.TextInput`
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme}) => theme.color.dark};
  border: 1px solid ${({theme}) => theme.color.gray};
  border-radius: ${({theme}) => theme.shape.radius.xs};

  padding: ${({theme}) =>
    Platform.OS === 'ios'
      ? theme.space[1]
      : `${theme.space[0]} ${theme.space[1]}`};

  ${({theme, hasIcon}) => hasIcon && `padding-left: ${theme.space[5]}`};
`;

import styled from 'styled-components/native';

export const InputWrap = styled.View`
  position: relative;
  padding-top: ${({theme}) => theme.space.x8};
`;

export const IconWrap = styled.TouchableOpacity`
  position: absolute;
  top: ${({theme}) => theme.space.x8};
  left: ${({theme}) => theme.space.x8};
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const InputLabelWrap = styled.View`
  position: absolute;
  top: 0;
  left: ${({theme}) => theme.space.x16};
  padding: 0 ${({theme}) => theme.space.x4};
  background-color: ${({theme}) => theme.color.white};
  z-index: 1;
`;

export const InputLabel = styled.Text`
  font-size: ${({theme}) => theme.font.size.s};
  color: ${({theme}) => theme.color.gray};
`;

export const InputStyled = styled.TextInput<{hasIcon: boolean}>`
  padding: ${({theme}) => theme.space.x8} ${({theme}) => theme.space.x16};
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme}) => theme.color.dark};
  border: 1px solid ${({theme}) => theme.color.gray};
  border-radius: ${({theme}) => theme.shape.radius.xs};
  ${({theme, hasIcon}) => hasIcon && `padding-left: ${theme.space.x48}`};
`;

import styled from 'styled-components/native';

export const LinkStyled = styled.TouchableOpacity`
  align-self: flex-start;
`;

export const LinkText = styled.Text`
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme}) => theme.color.secondary};
`;

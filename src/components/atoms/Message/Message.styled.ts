import styled from 'styled-components/native';

export const MessageStyled = styled.Text`
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme}) => theme.color.gray};
  text-align: center;
`;

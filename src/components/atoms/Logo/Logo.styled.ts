import styled from 'styled-components/native';

export const LogoStyled = styled.Text`
  font-size: ${({theme}) => theme.font.size.xxxl};
  font-weight: ${({theme}) => theme.font.weight.bold};
  color: ${({theme}) => theme.color.primary};
`;

import styled from 'styled-components/native';

export const TitleStyled = styled.Text`
  margin: ${({theme}) => theme.space[1]} 0;
  font-size: ${({theme}) => theme.font.size.l};
  font-weight: ${({theme}) => theme.font.weight.bold};
  color: ${({theme}) => theme.color.darkGray};
`;

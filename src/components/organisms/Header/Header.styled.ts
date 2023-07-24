import styled from 'styled-components/native';

export const HeaderStyled = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-size: ${({theme}) => theme.font.size.l};
  font-weight: ${({theme}) => theme.font.weight.bold};
  color: ${({theme}) => theme.color.white};
`;

export const HeaderRight = styled.View`
  flex-direction: row;
  gap: ${({theme}) => theme.space.x32};
`;

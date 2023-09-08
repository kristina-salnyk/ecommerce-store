import styled from 'styled-components/native';

import Title from '../../atoms/Title';

export const OrderDetailsWrap = styled.View`
  padding: ${({theme}) => theme.space.x16} ${({theme}) => theme.space.x8};
  gap: ${({theme}) => theme.space.x8};
  flex: 1;
`;

export const TitleStyled = styled(Title)`
  margin-left: ${({theme}) => theme.space.x8};
`;

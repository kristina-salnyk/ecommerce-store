import styled from 'styled-components/native';

export const HorizontalLineStyled = styled.View`
  margin: ${({theme}) => theme.space[2]} 0;
  border-bottom-color: ${({theme}) => theme.color.lightGray};
  border-bottom-width: 1px;
`;

import styled from 'styled-components/native';

import ShadowBox from '../../atoms/ShadowBox';

export const SearchBarStyled = styled(ShadowBox)`
  padding: ${({theme}) => theme.space.x16};
  background-color: ${({theme}) => theme.color.white};
`;

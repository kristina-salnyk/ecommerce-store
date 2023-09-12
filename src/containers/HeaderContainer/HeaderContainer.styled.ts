import styled from 'styled-components/native';

import ShadowBox from '../../components/atoms/ShadowBox';

export const HeaderContainerStyled = styled(ShadowBox)`
  background-color: ${({theme}) => theme.color.primary};
`;

import styled from 'styled-components/native';

import Title from '../../atoms/Title';
import ShadowBox from '../../atoms/ShadowBox';

export const ModalStyled = styled(ShadowBox)`
  padding: ${({theme}) => theme.space.x32} ${({theme}) => theme.space.x48};
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  align-items: center;
  gap: ${({theme}) => theme.space.x16};
  background-color: ${({theme}) => theme.color.white};
  border-radius: ${({theme}) => theme.shape.radius.xs};
`;

export const TitleStyled = styled(Title)`
  text-align: center;
`;

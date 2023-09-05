import styled from 'styled-components/native';
import {Platform} from 'react-native';

import Title from '../../atoms/Title';

export const ModalStyled = styled.View`
  padding: ${({theme}) => theme.space.x32} ${({theme}) => theme.space.x48};
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  align-items: center;
  gap: ${({theme}) => theme.space.x16};
  background-color: ${({theme}) => theme.color.white};
  border-radius: ${({theme}) => theme.shape.radius.xs};

  ${({theme}) =>
    `shadow-color: ${theme.color.black};
    ${
      Platform.OS === 'ios'
        ? `
        shadow-offset: 0;
        shadow-opacity: 0.2;
        shadow-radius: 4px;
      `
        : `
        elevation: 4;
      `
    }`}
`;

export const TitleStyled = styled(Title)`
  text-align: center;
`;

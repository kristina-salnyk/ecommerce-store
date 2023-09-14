import styled from 'styled-components/native';

import Logo from '../../atoms/Logo';
import {ORIENTATION_TYPES} from 'constants/shared';

export const LogoBannerStyled = styled.View<{
  testID?: string;
  orientation: string;
}>`
  padding: ${({theme, orientation}) =>
      theme.space[orientation === ORIENTATION_TYPES.LANDSCAPE ? 'x16' : 'x64']}
    0;
`;

export const LogoStyled = styled(Logo)`
  text-align: center;
`;

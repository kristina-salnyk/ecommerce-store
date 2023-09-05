import styled from 'styled-components/native';

import Button from '../../atoms/Button';

export const ButtonStyled = styled(Button)`
  margin: 0 ${({theme}) => theme.space.x8};
`;

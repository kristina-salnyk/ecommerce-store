import styled from 'styled-components/native';

export const ModalContainerStyled = styled.SafeAreaView`
  background-color: ${({theme}) => theme.color.backDrop};
  flex: 1;
`;

export const ModalWrap = styled.SafeAreaView`
  flex: 1;
`;

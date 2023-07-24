import styled from 'styled-components/native';
import HorizontalLine from '../../atoms/HorizontalLine';

export const DrawerContentBlock = styled.View`
  padding: ${({theme}) => theme.space.x16} ${({theme}) => theme.space.x24};
`;

export const DrawerLogo = styled.TouchableOpacity`
  padding: ${({theme}) => theme.space.x16} 0;
`;

export const DrawerLogoText = styled.Text`
  font-size: ${({theme}) => theme.font.size.xxxl};
  font-weight: ${({theme}) => theme.font.weight.bold};
  color: ${({theme}) => theme.color.primary};
`;

export const HorizontalLineStyled = styled(HorizontalLine)`
  margin: ${({theme}) => theme.space.x4} 0;
`;

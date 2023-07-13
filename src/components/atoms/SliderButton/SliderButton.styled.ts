import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export const SliderButtonIcon = styled(Icon)`
  color: ${({theme, disabled}) => theme.color[disabled ? 'lightGray' : 'gray']};
`;

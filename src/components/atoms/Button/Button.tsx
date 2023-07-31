import React, {ComponentType, FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {useTheme} from 'styled-components';
import {IconProps} from 'react-native-vector-icons/Icon';

import {BUTTON_ICON_SIZE} from '../../../constants/shared';
import {ButtonStyled, ButtonText} from './Button.styled';

interface ButtonProps {
  text: string;
  onPress: () => void;
  IconComponent?: ComponentType<IconProps>;
  iconName?: string;
  style?: StyleProp<ViewStyle>;
}

const Button: FC<ButtonProps> = ({
  text,
  onPress,
  IconComponent,
  iconName,
  style,
}) => {
  const theme = useTheme();

  return (
    <ButtonStyled onPress={onPress} style={style}>
      <ButtonText>{text}</ButtonText>
      {IconComponent && iconName && (
        <IconComponent
          name={iconName}
          size={BUTTON_ICON_SIZE}
          color={theme.color.white}
        />
      )}
    </ButtonStyled>
  );
};

export default Button;

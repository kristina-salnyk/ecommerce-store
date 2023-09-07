import React, {ComponentType, FC} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';
import {IconProps} from 'react-native-vector-icons/Icon';

import {BUTTON_ICON_SIZE} from '../../../constants/shared';
import {ButtonStyled, ButtonText} from './Button.styled';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  onPress: () => void;
  IconComponent?: ComponentType<IconProps>;
  iconName?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  onPress,
  IconComponent,
  iconName,
  disabled,
  style,
}) => {
  const theme = useTheme();

  return (
    <ButtonStyled disabled={disabled} onPress={onPress} style={style}>
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

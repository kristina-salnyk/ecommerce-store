import React, {ComponentType, FC} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import {useTheme} from 'styled-components';

import {DEFAULT_ICON_SIZE} from '../../../constants/shared';

interface IconButtonProps extends TouchableOpacityProps {
  IconComponent: ComponentType<IconProps>;
  iconName: string;
  onPress: () => void;
  color?: string;
}

const IconButton: FC<IconButtonProps> = ({
  IconComponent,
  iconName,
  onPress,
  color,
  style,
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <IconComponent
        name={iconName}
        size={DEFAULT_ICON_SIZE}
        color={color ?? theme.color.white}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

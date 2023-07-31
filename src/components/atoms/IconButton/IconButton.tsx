import React, {ComponentType, FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import {useTheme} from 'styled-components';

import {DEFAULT_ICON_SIZE} from '../../../constants/shared';

interface IconButtonProps {
  IconComponent: ComponentType<IconProps>;
  iconName: string;
  onPress: () => void;
}

const IconButton: FC<IconButtonProps> = ({
  IconComponent,
  iconName,
  onPress,
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <IconComponent
        name={iconName}
        size={DEFAULT_ICON_SIZE}
        color={theme.color.white}
      />
    </TouchableOpacity>
  );
};

export default IconButton;

import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';

import {DEFAULT_ICON_SIZE} from 'constants/shared';
import {SliderButtonIcon} from './SliderButton.styled';

interface SliderButtonProps {
  iconName: string;
  disabled: boolean;
  onPress: () => void;
}

const SliderButton: FC<SliderButtonProps> = ({iconName, disabled, onPress}) => (
  <TouchableOpacity disabled={disabled} onPress={onPress}>
    <SliderButtonIcon
      name={iconName}
      size={DEFAULT_ICON_SIZE}
      disabled={disabled}
    />
  </TouchableOpacity>
);

export default SliderButton;

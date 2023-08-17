import React, {ComponentType, FC} from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';
import {useTheme} from 'styled-components';

import {DRAWER_ICON_SIZE} from '../../../constants/shared';
import {DrawerLinkStyled, DrawerLinkText} from './DrawerLink.styled';

interface DrawerLinkProps {
  IconComponent: ComponentType<IconProps>;
  iconName: string;
  text: string;
  onPress: () => void;
}

const DrawerLink: FC<DrawerLinkProps> = ({
  IconComponent,
  iconName,
  text,
  onPress,
}) => {
  const theme = useTheme();

  return (
    <DrawerLinkStyled onPress={onPress}>
      <IconComponent
        name={iconName}
        size={DRAWER_ICON_SIZE}
        color={theme.color.primary}
      />
      <DrawerLinkText>{text}</DrawerLinkText>
    </DrawerLinkStyled>
  );
};

export default DrawerLink;

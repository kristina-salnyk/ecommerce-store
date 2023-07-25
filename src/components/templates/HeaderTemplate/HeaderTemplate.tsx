import React, {FC} from 'react';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {getHeaderTitle} from '@react-navigation/elements';

import Header from '../../organisms/Header';
import {HeaderTemplateStyled} from './HeaderTemplate.styled';

interface DrawerHeaderTemplateProps extends DrawerHeaderProps {
  drawerToggleShown?: boolean;
}

interface NativeStackHeaderTemplateProps extends NativeStackHeaderProps {
  drawerToggleShown?: boolean;
}

const HeaderTemplate: FC<
  DrawerHeaderTemplateProps | NativeStackHeaderTemplateProps
> = ({route, options, drawerToggleShown}) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <HeaderTemplateStyled>
      <Header
        title={title}
        routeName={route.name}
        drawerToggleShown={drawerToggleShown}
      />
    </HeaderTemplateStyled>
  );
};

export default HeaderTemplate;

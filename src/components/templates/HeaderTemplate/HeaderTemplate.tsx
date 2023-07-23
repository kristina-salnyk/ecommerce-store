import React, {FC} from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {getHeaderTitle} from '@react-navigation/elements';

import Header from '../../organisms/Header';
import {HeaderTemplateStyled} from './HeaderTemplate.styled';

const HeaderTemplate: FC<NativeStackHeaderProps> = ({route, options}) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <HeaderTemplateStyled>
      <Header title={title} routeName={route.name} />
    </HeaderTemplateStyled>
  );
};

export default HeaderTemplate;

import React, {FC} from 'react';

import Splash from '../../molecules/Splash';
import {SplashTemplateStyled} from './SplashTemplate.styled';

const SplashTemplate: FC = () => (
  <SplashTemplateStyled>
    <Splash />
  </SplashTemplateStyled>
);

export default SplashTemplate;

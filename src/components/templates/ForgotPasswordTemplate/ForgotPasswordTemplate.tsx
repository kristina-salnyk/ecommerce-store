import React, {FC} from 'react';
import {
  Keyboard,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import ForgotPasswordForm from '../../organisms/ForgotPasswordForm';
import LogoBanner from '../../molecules/LogoBanner';
import {
  ForgotPasswordTemplateStyled,
  ForgotPasswordWrap,
} from './ForgotPasswordTemplate.styled';

const ForgotPasswordTemplate: FC = () => (
  <ForgotPasswordTemplateStyled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ForgotPasswordWrap
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <LogoBanner />
          <ForgotPasswordForm />
        </ScrollView>
      </ForgotPasswordWrap>
    </TouchableWithoutFeedback>
  </ForgotPasswordTemplateStyled>
);

export default ForgotPasswordTemplate;

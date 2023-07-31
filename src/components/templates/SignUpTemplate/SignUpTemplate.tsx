import React, {FC} from 'react';
import {
  Keyboard,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import SignUpForm from '../../organisms/SignUpForm';
import LogoBanner from '../../molecules/LogoBanner';
import {SignUpTemplateStyled, SignUpWrap} from './SignUpTemplate.styled';

const SignUpTemplate: FC = () => (
  <SignUpTemplateStyled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignUpWrap behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <LogoBanner />
          <SignUpForm />
        </ScrollView>
      </SignUpWrap>
    </TouchableWithoutFeedback>
  </SignUpTemplateStyled>
);

export default SignUpTemplate;

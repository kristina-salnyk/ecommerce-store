import React, {FC} from 'react';
import {
  Keyboard,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import ProfileForm from '../../organisms/ProfileForm';
import {ProfileTemplateStyled, ProfileWrap} from './ProfileTemplate.styled';

const ProfileTemplate: FC = () => (
  <ProfileTemplateStyled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ProfileWrap behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <ProfileForm />
        </ScrollView>
      </ProfileWrap>
    </TouchableWithoutFeedback>
  </ProfileTemplateStyled>
);

export default ProfileTemplate;

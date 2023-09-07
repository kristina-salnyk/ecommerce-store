import React, {FC} from 'react';

import ProfileTemplate from '../../components/templates/ProfileTemplate';
import ScreenContainer from '../../containers/ScreenContainer';

const ProfileScreen: FC = () => (
  <ScreenContainer>
    <ProfileTemplate />
  </ScreenContainer>
);

export default ProfileScreen;

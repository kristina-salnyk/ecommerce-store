import React, {FC, useEffect} from 'react';

import ScreenContainer from 'containers/ScreenContainer';
import ProfileTemplate from 'components/templates/ProfileTemplate';
import onScreenOpen from 'utils/onScreenOpen';

const ProfileScreen: FC = () => {
  useEffect(() => {
    onScreenOpen('Profile');
  }, []);

  return (
    <ScreenContainer>
      <ProfileTemplate />
    </ScreenContainer>
  );
};

export default ProfileScreen;

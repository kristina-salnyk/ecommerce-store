import React, {FC, useEffect} from 'react';

import ScreenContainer from 'containers/ScreenContainer';
import LoginTemplate from 'components/templates/LoginTemplate';
import onScreenOpen from 'utils/onScreenOpen';

const LoginScreen: FC = () => {
  useEffect(() => {
    onScreenOpen('Login');
  }, []);

  return (
    <ScreenContainer>
      <LoginTemplate />
    </ScreenContainer>
  );
};

export default LoginScreen;

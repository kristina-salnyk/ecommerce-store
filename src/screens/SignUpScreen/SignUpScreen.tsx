import React, {FC, useEffect} from 'react';

import ScreenContainer from 'containers/ScreenContainer';
import SignUpTemplate from 'components/templates/SignUpTemplate';
import onScreenOpen from 'utils/onScreenOpen';

const SignUpScreen: FC = () => {
  useEffect(() => {
    onScreenOpen('SignUp');
  }, []);

  return (
    <ScreenContainer>
      <SignUpTemplate />
    </ScreenContainer>
  );
};

export default SignUpScreen;

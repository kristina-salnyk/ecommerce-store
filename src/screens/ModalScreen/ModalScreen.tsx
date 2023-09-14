import React, {FC, useEffect} from 'react';

import ModalContainer from 'containers/ModalContainer';
import ModalTemplate from 'components/templates/ModalTemplate';
import onScreenOpen from 'utils/onScreenOpen';

const ModalScreen: FC = () => {
  useEffect(() => {
    onScreenOpen('Modal');
  }, []);

  return (
    <ModalContainer>
      <ModalTemplate />
    </ModalContainer>
  );
};

export default ModalScreen;

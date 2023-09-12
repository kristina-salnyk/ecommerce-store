import React, {FC, useEffect} from 'react';

import ScreenContainer from 'containers/ScreenContainer';
import Map from 'components/organisms/Map';
import onScreenOpen from 'utils/onScreenOpen';

const MapScreen: FC = () => {
  useEffect(() => {
    onScreenOpen('Map');
  }, []);

  return (
    <ScreenContainer>
      <Map />
    </ScreenContainer>
  );
};

export default MapScreen;

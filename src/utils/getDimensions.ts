import {Dimensions} from 'react-native';

import WindowDimensions from 'interfaces/WindowDimensions';

const getDimensions = (): WindowDimensions => {
  const {width, height} = Dimensions.get('window');
  return {width, height};
};

export default getDimensions;

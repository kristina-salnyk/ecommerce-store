import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

import getDimensions from '../utils/getDimensions';
import WindowDimensions from '../interfaces/WindowDimensions';

const useDimensions = (): WindowDimensions => {
  const [dimensions, setDimensions] = useState<WindowDimensions>(getDimensions);

  useEffect(() => {
    const onChange = () => {
      setDimensions(getDimensions);
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      subscription.remove();
    };
  }, []);

  return dimensions;
};

export default useDimensions;

import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

import getDimensions from '../utils/getDimensions';

const useDimensions = () => {
  const [dimensions, setDimensions] = useState(getDimensions);

  useEffect(() => {
    const onChange = () => {
      setDimensions(getDimensions);
    };

    Dimensions.addEventListener('change', onChange);
  }, []);

  return dimensions;
};

export default useDimensions;

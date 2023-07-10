import {useEffect, useState} from 'react';

import useDimensions from './useDimensions';

const useOrientation = () => {
  const dimensions = useDimensions();
  const [orientation, setOrientation] = useState(
    dimensions.width > 768 ? 'landscape' : 'portrait',
  );

  useEffect(() => {
    setOrientation(dimensions.width > 768 ? 'landscape' : 'portrait');
  }, [dimensions]);

  return orientation;
};

export default useOrientation;

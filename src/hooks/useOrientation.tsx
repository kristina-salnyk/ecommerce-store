import {useEffect, useState} from 'react';

import useDimensions from './useDimensions';
import {MOBILE_BREAKPOINT, ORIENTATION_TYPES} from 'constants/shared';

const useOrientation = (): string => {
  const dimensions = useDimensions();
  const [orientation, setOrientation] = useState<string>(
    dimensions.width > MOBILE_BREAKPOINT
      ? ORIENTATION_TYPES.LANDSCAPE
      : ORIENTATION_TYPES.PORTRAIT,
  );

  useEffect(() => {
    setOrientation(
      dimensions.width > MOBILE_BREAKPOINT
        ? ORIENTATION_TYPES.LANDSCAPE
        : ORIENTATION_TYPES.PORTRAIT,
    );
  }, [dimensions]);

  return orientation;
};

export default useOrientation;

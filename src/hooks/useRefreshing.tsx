import {useCallback, useState} from 'react';

import {REFRESHING_DELAY} from '../constants/shared';

const useRefreshing = (): [boolean, () => void] => {
  const [refreshing, setIsRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);

    const timeoutId = setTimeout(() => {
      setIsRefreshing(false);
    }, REFRESHING_DELAY);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return [refreshing, onRefresh];
};

export default useRefreshing;

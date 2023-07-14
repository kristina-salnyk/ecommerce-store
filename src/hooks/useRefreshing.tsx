import {useCallback, useState} from 'react';

import {REFRESHING_DELAY} from '../constants/shared';

const useRefreshing = (): [boolean, () => void] => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    const timeoutId = setTimeout(() => {
      setRefreshing(false);
    }, REFRESHING_DELAY);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return [refreshing, onRefresh];
};

export default useRefreshing;

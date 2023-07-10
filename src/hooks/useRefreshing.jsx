import {useCallback, useState} from 'react';

const useRefreshing = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return [refreshing, onRefresh];
};

export default useRefreshing;

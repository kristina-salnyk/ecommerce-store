import React, {FC} from 'react';

import NotificationBox from '../../organisms/NotificationBox';
import noResults from '../../../assets/images/no-results.png';
import {NOTIFICATIONS} from '../../../constants/shared';

interface EmptyProductListProps {
  error: string | null;
  onPress: () => void;
}

const EmptyProductList: FC<EmptyProductListProps> = ({error, onPress}) => {
  if (!error) {
    return null;
  }

  return (
    <NotificationBox
      imageSource={noResults}
      title={NOTIFICATIONS.loadingFailedNotification.title}
      message={NOTIFICATIONS.loadingFailedNotification.message}
      action="Refresh"
      onPress={onPress}
    />
  );
};

export default EmptyProductList;

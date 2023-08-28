import React, {FC} from 'react';

import NotificationBox from '../../organisms/NotificationBox';
import noResults from '../../../assets/images/no-results.png';
import {NOTIFICATIONS} from '../../../constants/shared';

interface EmptyPurchaseListProps {
  error: string | null;
  onPress: () => void;
}

const EmptyPurchaseList: FC<EmptyPurchaseListProps> = ({error, onPress}) => {
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

export default EmptyPurchaseList;

import React, {FC} from 'react';

import NotificationBox from '../../organisms/NotificationBox';
import noResults from '../../../assets/images/no-results.png';
import {NOTIFICATIONS} from '../../../constants/shared';

interface EmptyOrderListProps {
  error: string | null;
  onPressRefresh: () => void;
}

const EmptyOrderList: FC<EmptyOrderListProps> = ({error, onPressRefresh}) => {
  if (!error) {
    return (
      <NotificationBox
        imageSource={noResults}
        title={NOTIFICATIONS.emptyOrdersNotification.title}
        message={NOTIFICATIONS.emptyOrdersNotification.message}
        linkText="Refresh"
        onPressLink={onPressRefresh}
      />
    );
  }

  return (
    <NotificationBox
      imageSource={noResults}
      title={NOTIFICATIONS.loadingFailedNotification.title}
      message={NOTIFICATIONS.loadingFailedNotification.message}
      linkText="Refresh"
      onPressLink={onPressRefresh}
    />
  );
};

export default EmptyOrderList;

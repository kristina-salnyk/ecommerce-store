import React, {FC} from 'react';

import NotificationBox from '../../organisms/NotificationBox';
import noResults from '../../../assets/images/no-results.png';
import {NOTIFICATIONS} from '../../../constants/shared';

interface EmptyOrderListProps {
  error: string | null;
  onPressRefresh: () => void;
}

const EmptyOrderList: FC<EmptyOrderListProps> = ({error, onPressRefresh}) => {
  const notificationType = error
    ? 'loadingFailedNotification'
    : 'emptyOrdersNotification';

  return (
    <NotificationBox
      imageSource={noResults}
      title={NOTIFICATIONS[notificationType].title}
      message={NOTIFICATIONS[notificationType].message}
      linkText="Refresh"
      onPressLink={onPressRefresh}
    />
  );
};

export default EmptyOrderList;

import React, {FC} from 'react';

import NotificationBox from '../../organisms/NotificationBox';
import noResults from '../../../assets/images/no-results.png';
import {NOTIFICATIONS} from '../../../constants/shared';

interface EmptyProductListProps {
  error: string | null;
  onPressRefresh: () => void;
}

const EmptyProductList: FC<EmptyProductListProps> = ({
  error,
  onPressRefresh,
}) => {
  const notificationType = error
    ? 'loadingFailedNotification'
    : 'emptyProductsNotification';

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

export default EmptyProductList;

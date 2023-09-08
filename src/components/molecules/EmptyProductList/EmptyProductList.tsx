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
  if (!error) {
    return (
      <NotificationBox
        imageSource={noResults}
        title={NOTIFICATIONS.emptyProductsNotification.title}
        message={NOTIFICATIONS.emptyProductsNotification.message}
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

export default EmptyProductList;

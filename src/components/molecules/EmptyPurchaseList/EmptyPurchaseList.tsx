import React, {FC, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import {DrawerParamList} from '../../../navigation/types';
import NotificationBox from '../../organisms/NotificationBox';
import noResults from '../../../assets/images/no-results.png';
import cart from '../../../assets/images/cart.png';
import {NOTIFICATIONS} from '../../../constants/shared';

interface EmptyPurchaseListProps {
  error: string | null;
  onPressRefresh: () => void;
}

const EmptyPurchaseList: FC<EmptyPurchaseListProps> = ({
  error,
  onPressRefresh,
}) => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const onPressShopNow = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Main');
    }
  }, [navigation]);

  if (error) {
    return (
      <NotificationBox
        imageSource={noResults}
        title={NOTIFICATIONS.loadingFailedNotification.title}
        message={NOTIFICATIONS.loadingFailedNotification.message}
        linkText={'Refresh'}
        onPressLink={onPressRefresh}
      />
    );
  }

  return (
    <NotificationBox
      imageSource={cart}
      title={NOTIFICATIONS.emptyCartNotification.title}
      message={NOTIFICATIONS.emptyCartNotification.message}
      buttonText={'Shop now'}
      onPressButton={onPressShopNow}
    />
  );
};

export default EmptyPurchaseList;

import React, {FC} from 'react';

import Splash from '../Splash';

interface FooterProductListProps {
  isLoadingMore: boolean;
}

const FooterProductList: FC<FooterProductListProps> = ({isLoadingMore}) => {
  if (isLoadingMore) {
    return <Splash />;
  }
  return null;
};

export default FooterProductList;

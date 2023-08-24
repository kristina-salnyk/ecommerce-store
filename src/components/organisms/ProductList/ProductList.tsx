import React, {FC, ReactElement, useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';

import Splash from '../../molecules/Splash';
import ProductItem from '../../molecules/ProductItem';
import NotificationBox from '../NotificationBox';
import {getProductsThunk} from '../../../store/products/thunk';
import {updateIsRefreshing} from '../../../store/products/actionCreators';
import {
  useAppDispatch,
  useAppSelector,
  useAppThunkDispatch,
} from '../../../store/hooks';
import {
  selectError,
  selectIsLoading,
  selectIsLoadingMore,
  selectIsRefreshing,
  selectItems,
  selectTotalPages,
} from '../../../store/products/selectors';
import noResults from '../../../assets/images/no-results.png';
import {NOTIFICATIONS} from '../../../constants/shared';

interface ProductListProps {
  options: {
    columnNum: number;
    columnPercentWidth: number;
  };
}

const ProductList: FC<ProductListProps> = ({options}) => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const thunkDispatch = useAppThunkDispatch();

  const products = useAppSelector(selectItems);
  const totalPages = useAppSelector(selectTotalPages);
  const isLoading = useAppSelector(selectIsLoading);
  const isLoadingMore = useAppSelector(selectIsLoadingMore);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const error = useAppSelector(selectError);

  const getProducts = useCallback(() => {
    (async () => {
      thunkDispatch(getProductsThunk(page));
    })();
  }, [thunkDispatch, page]);

  useEffect(() => {
    getProducts();
  }, [getProducts, page]);

  const getMoreProducts = () => {
    if (isLoadingMore || page >= totalPages) {
      return;
    }
    setPage(page + 1);
  };

  const refreshProductsList = useCallback(() => {
    if (page === 1) {
      getProducts();
      return;
    }
    setPage(1);
  }, [getProducts, page]);

  const refreshProducts = useCallback(() => {
    dispatch(updateIsRefreshing(true));
    refreshProductsList();
  }, [dispatch, refreshProductsList]);

  if (isLoading && !isRefreshing) {
    return <Splash />;
  }

  const renderListEmptyComponent = (): ReactElement | null => {
    if (error) {
      return (
        <NotificationBox
          imageSource={noResults}
          title={NOTIFICATIONS.signUpFailedNotification.title}
          message={NOTIFICATIONS.signUpFailedNotification.message}
          action="Refresh"
          onPress={refreshProductsList}
        />
      );
    }
    return null;
  };

  const renderListFooterComponent = (): ReactElement | null => {
    if (isLoadingMore) {
      return <Splash />;
    }
    return null;
  };

  return (
    <FlatList
      data={products}
      key={options.columnNum}
      numColumns={options.columnNum}
      renderItem={({item}) => (
        <ProductItem
          id={item.id}
          name={item.attributes.name}
          slug={item.attributes.slug}
          price={item.attributes.price}
          priceView={item.attributes.display_price}
          compareAtPrice={item.attributes.compare_at_price}
          compareAtPriceView={item.attributes.display_compare_at_price}
          options={{itemPercentWidth: options.columnPercentWidth}}
        />
      )}
      onEndReachedThreshold={0.2}
      onEndReached={getMoreProducts}
      ListEmptyComponent={renderListEmptyComponent()}
      ListFooterComponent={renderListFooterComponent()}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={refreshProducts} />
      }
    />
  );
};

export default ProductList;

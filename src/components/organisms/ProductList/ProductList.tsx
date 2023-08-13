import React, {FC, useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';

import Splash from '../../molecules/Splash';
import ProductItem from '../../molecules/ProductItem';
import {getProductsThunk} from '../../../store/products/thunk';
import {updateIsRefreshing} from '../../../store/products/actionCreators';
import {
  useAppDispatch,
  useAppSelector,
  useAppThunkDispatch,
} from '../../../store/hooks';
import {
  selectIsLoading,
  selectIsLoadingMore,
  selectIsRefreshing,
  selectItems,
  selectTotalPages,
} from '../../../store/products/selectors';

interface ProductListProps {
  options: {
    columnNum: number;
    columnPercentWidth: number;
  };
}

const ProductList: FC<ProductListProps> = ({options}) => {
  const dispatch = useAppDispatch();
  const thunkDispatch = useAppThunkDispatch();
  const [page, setPage] = useState(1);

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

  const refreshProducts = useCallback(() => {
    dispatch(updateIsRefreshing(true));
    if (page === 1) {
      getProducts();
      return;
    }
    setPage(1);
  }, [dispatch, getProducts, page]);

  const products = useAppSelector(selectItems);
  const totalPages = useAppSelector(selectTotalPages);
  const isLoading = useAppSelector(selectIsLoading);
  const isLoadingMore = useAppSelector(selectIsLoadingMore);
  const isRefreshing = useAppSelector(selectIsRefreshing);

  if (isLoading && !isRefreshing) {
    return <Splash />;
  }

  return (
    <FlatList
      data={products}
      key={options.columnNum}
      numColumns={options.columnNum}
      renderItem={({item}) => (
        <ProductItem
          id={item.id}
          name={item.attributes.name}
          price={item.attributes.price}
          priceView={item.attributes.display_price}
          compareAtPrice={item.attributes.compare_at_price}
          compareAtPriceView={item.attributes.display_compare_at_price}
          options={{itemPercentWidth: options.columnPercentWidth}}
        />
      )}
      onEndReachedThreshold={0.2}
      onEndReached={getMoreProducts}
      ListFooterComponent={() => <View>{isLoadingMore && <Splash />}</View>}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={refreshProducts} />
      }
    />
  );
};

export default ProductList;

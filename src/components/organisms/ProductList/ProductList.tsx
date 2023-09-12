import React, {FC, useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';

import Splash from '../../molecules/Splash';
import SearchBar from '../../molecules/SearchBar';
import ProductItem from '../../molecules/ProductItem';
import EmptyProductList from '../../molecules/EmptyProductList';
import FooterProductList from '../../molecules/FooterProductList';
import {getProductsThunk} from 'store/products/thunk';
import {updateIsRefreshing} from 'store/products/actionCreators';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {
  selectError,
  selectIsLoading,
  selectIsLoadingMore,
  selectIsRefreshing,
  selectItems,
  selectTotalPages,
} from 'store/products/selectors';
import {ProductListWrap} from './ProductList.styled';

interface ProductListProps {
  options: {
    columnNum: number;
    columnPercentWidth: number;
  };
}

const ProductList: FC<ProductListProps> = ({options}) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<string>('');
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectItems);
  const totalPages = useAppSelector(selectTotalPages);
  const isLoading = useAppSelector(selectIsLoading);
  const isLoadingMore = useAppSelector(selectIsLoadingMore);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const error = useAppSelector(selectError);

  const getProducts = useCallback(() => {
    dispatch(getProductsThunk(page, filter));
  }, [dispatch, filter, page]);

  useEffect(() => {
    getProducts();
  }, [getProducts, page, filter]);

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

  return (
    <>
      <SearchBar onChangeSearchQuery={setFilter} />
      {isLoading && !isRefreshing ? (
        <Splash />
      ) : (
        <ProductListWrap>
          <FlatList
            accessibilityRole="list"
            accessible={true}
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
            ListEmptyComponent={
              <EmptyProductList
                error={error}
                onPressRefresh={refreshProductsList}
              />
            }
            ListFooterComponent={
              <FooterProductList isLoadingMore={isLoadingMore} />
            }
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={refreshProducts}
              />
            }
          />
        </ProductListWrap>
      )}
    </>
  );
};

export default ProductList;

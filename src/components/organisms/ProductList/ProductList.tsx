import React, {FC} from 'react';
import {FlatList, RefreshControl} from 'react-native';

import ProductItem from '../../molecules/ProductItem';
import useRefreshing from '../../../hooks/useRefreshing';
import Product from '../../../interfaces/Product';

interface ProductListProps {
  products: Product[];
  options: {
    columnNum: number;
    columnPercentWidth: number;
  };
}

const ProductList: FC<ProductListProps> = ({products, options}) => {
  const [refreshing, onRefresh] = useRefreshing();

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
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default ProductList;

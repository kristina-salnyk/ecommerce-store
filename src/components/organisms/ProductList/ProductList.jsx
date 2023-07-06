import React, {FlatList} from 'react-native';

import {products} from '../../../constants/data';
import ProductItem from '../../molecules/ProductItem/ProductItem';
import useOrientation from '../../../hooks/useOrientation';

const ProductList = () => {
  const orientation = useOrientation();
  const columnNum = orientation === 'landscape' ? 4 : 2;
  const columnWidth = 100 / columnNum;

  return (
    <FlatList
      data={products}
      key={columnNum}
      numColumns={columnNum}
      renderItem={({item}) => (
        <ProductItem
          id={item.id}
          name={item.attributes.name}
          price={item.attributes.price}
          priceView={item.attributes.display_price}
          compareAtPrice={item.attributes.compare_at_price}
          compareAtPriceView={item.attributes.display_compare_at_price}
          options={{columnWidth}}
        />
      )}
    />
  );
};

export default ProductList;

import React, {FlatList, RefreshControl} from 'react-native';
import PropTypes from 'prop-types';

import ProductItem from '../../molecules/ProductItem';
import useRefreshing from '../../../hooks/useRefreshing';

const ProductList = ({products, options}) => {
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
          options={{itemWidth: options.columnWidth}}
        />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  options: PropTypes.shape({
    columnNum: PropTypes.number.isRequired,
    columnWidth: PropTypes.number.isRequired,
  }).isRequired,
};

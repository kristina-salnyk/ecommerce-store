import React, {FlatList} from 'react-native';
import PropTypes from 'prop-types';

import ProductItem from '../../molecules/ProductItem';

const ProductList = ({products, options}) => (
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
        options={{width: options.columnWidth}}
      />
    )}
  />
);

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  options: PropTypes.shape({
    columnNum: PropTypes.number.isRequired,
    columnWidth: PropTypes.number.isRequired,
  }).isRequired,
};

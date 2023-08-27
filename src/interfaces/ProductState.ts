import Product from './Product';

interface ProductState {
  item: Product | null;
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export default ProductState;

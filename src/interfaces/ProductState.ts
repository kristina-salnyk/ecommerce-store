import Product from './Product';

interface ProductState {
  data: Product | null;
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export default ProductState;

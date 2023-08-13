import Product from './Product';

interface ProductsState {
  items: Product[];
  totalPages: number;
  isLoading: boolean;
  isLoadingMore: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export default ProductsState;

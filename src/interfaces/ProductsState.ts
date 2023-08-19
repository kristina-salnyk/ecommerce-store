import Product from './Product';
import ProductOption from './ProductOption';

interface ProductsState {
  items: Product[];
  totalPages: number;
  colorOptions: ProductOption[];
  isLoading: boolean;
  isLoadingMore: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export default ProductsState;

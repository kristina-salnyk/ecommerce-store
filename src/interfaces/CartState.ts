import Cart from './Cart';
import Purchase from './Purchase';

interface CartState {
  data: Cart | null;
  items: Purchase[];
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export default CartState;

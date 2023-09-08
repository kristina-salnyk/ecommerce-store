import Order from './Order';
import Purchase from './Purchase';

interface OrderState {
  data: Order | null;
  items: Purchase[];
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export default OrderState;

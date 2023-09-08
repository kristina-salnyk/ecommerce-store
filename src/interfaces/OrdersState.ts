import Order from './Order';
import Purchase from './Purchase';

interface OrdersState {
  items: {data: Order; included: Purchase[]}[];
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export default OrdersState;

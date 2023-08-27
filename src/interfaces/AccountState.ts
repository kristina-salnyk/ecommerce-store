interface AccountState {
  user: {username: string; email: string};
  token: string | null;
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export default AccountState;

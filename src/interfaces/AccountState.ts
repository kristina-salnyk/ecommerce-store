interface AccountState {
  data: {
    email: string;
    username: string;
    phone: string;
    city: string;
    street: string;
    build: string;
    avatarURI: string;
  };
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export default AccountState;

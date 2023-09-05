interface AccountState {
  user: {
    username: string;
    email: string;
    phone: string;
    city: string;
    street: string;
    build: string;
    avatarURI: string;
  };
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export default AccountState;

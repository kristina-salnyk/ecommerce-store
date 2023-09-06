interface AuthState {
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export default AuthState;

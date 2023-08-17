import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import SInfo from 'react-native-sensitive-info';

import AuthState from '../interfaces/AuthState';

type AuthAction =
  | {type: 'RESTORE_TOKEN'; token: string | null}
  | {type: 'LOGIN'; token: string | null}
  | {type: 'LOGOUT'};

interface AuthContextProps {
  state: AuthState;
  login: (email: string, password: string) => void;
  logout: () => void;
  signUp: (data: {username: string; email: string; password: string}) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  state: {isLoading: false, token: null},
  login: () => {},
  logout: () => {},
  signUp: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider: FC<PropsWithChildren> = ({children}) => {
  const [state, dispatch] = useReducer(
    (prevState: AuthState, action: AuthAction) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            token: action.token,
            isLoading: false,
          };
        case 'LOGIN':
          return {
            ...prevState,
            token: action.token,
          };
        case 'LOGOUT':
          return {
            ...prevState,
            token: null,
          };
        default:
          return prevState;
      }
    },
    {
      isLoading: true,
      token: null,
    },
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let token = null;
      try {
        token = await SInfo.getItem('token', {keychainService: 'auth'});
      } catch (error) {
        console.log('Error getting token:', error);
      }
      dispatch({type: 'RESTORE_TOKEN', token});
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      state,
      login: async (_email: string, _password: string) => {
        const token = 'mock-auth-token';
        try {
          await SInfo.setItem('token', token, {
            keychainService: 'auth',
          });
        } catch (error) {
          console.log('Error saving token:', error);
        }
        dispatch({type: 'LOGIN', token});
      },
      logout: async () => {
        try {
          await SInfo.deleteItem('token', {keychainService: 'auth'});
        } catch (error) {
          console.log('Error deleting token:', error);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: async (_data: {
        username: string;
        email: string;
        password: string;
      }) => {
        const token = 'mock-auth-token';
        try {
          await SInfo.setItem('token', token, {
            keychainService: 'auth',
          });
        } catch (error) {
          console.log('Error saving token:', error);
        }
        dispatch({type: 'LOGIN', token});
      },
    }),
    [state],
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

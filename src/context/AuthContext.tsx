import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { loginUseCase, verifyTokenUseCase } from "../use-case/auth-use-case";
import { User } from "../types";
import Cookies from "js-cookie";

export interface IAuthContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<null>>;
  login: (email: string, password: string) => void;
  error: string | null;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext({} as IAuthContext);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    const { data, error } = await loginUseCase(email, password);
    setLoading(false);

    if (error) {
      setError(error);
      return;
    }

    setUser(data);
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        setLoading(true);
        const { data } = await verifyTokenUseCase();
        setLoading(false);

        setUser(data);
      } catch (e) {
        console.error(e);
      }
    };

    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, error, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

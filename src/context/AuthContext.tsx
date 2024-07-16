import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { loginUseCase, verifyTokenUseCase } from "../use-case/auth-use-case";
import { User } from "../types";

export interface IAuthContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<null>>;
  login: (email: string, password: string) => void;
  error: string | null;
}

export const AuthContext = createContext({} as IAuthContext);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email: string, password: string) => {
    const { data, error } = await loginUseCase(email, password);

    if (error) {
      setError(error);
      return;
    }

    setUser(data);
  };

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const { data } = await verifyTokenUseCase();

        setUser(data);
      } catch (e) {
        console.error(e);
      }
    };
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, login, error }}>
      {children}
    </AuthContext.Provider>
  );
};

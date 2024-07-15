import { createContext, Dispatch, SetStateAction, useState } from "react";
import { loginUseCase } from "../use-case/login-use-case";
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

  return (
    <AuthContext.Provider value={{ user, setUser, login, error }}>
      {children}
    </AuthContext.Provider>
  );
};

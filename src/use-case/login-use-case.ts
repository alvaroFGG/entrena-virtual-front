import { loginRequest } from "../api/auth";

export const loginUseCase = async (email: string, password: string) => {
  const { data: response } = await loginRequest(email, password);

  const { data, error } = response;

  return { data, error };
};

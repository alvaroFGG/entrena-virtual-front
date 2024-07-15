import { loginRequest, verifyTokenRequest } from "../api/auth";

export const loginUseCase = async (email: string, password: string) => {
  const { data: response } = await loginRequest(email, password);

  const { data, error } = response;

  return { data, error };
};

export const verifyTokenUseCase = async () => {
  const { data: response } = await verifyTokenRequest();

  const { data, error } = response;

  return { data, error };
};

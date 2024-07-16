import axios from "./axios";

export const loginRequest = async (email: string, password: string) => {
  return axios.post("/auth/login", {
    email,
    password,
  });
};

export const verifyTokenRequest = async () => {
  return axios.get("/auth/verify");
};

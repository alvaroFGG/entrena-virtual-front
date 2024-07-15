import axios from "axios";

export const loginRequest = async (email: string, password: string) => {
  return axios.post("http://localhost:3000/api/auth/login", {
    email,
    password,
  });
};

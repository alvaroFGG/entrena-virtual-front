import { Navigate, useRoutes } from "react-router-dom";
import LoginLayout from "./pages/login/layout";
import Layout from "./pages/layout";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import HomeLayout from "./pages/home/layout";

export const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
          children: [{ path: "", element: <HomePage /> }],
        },
        {
          path: "login",
          element: <LoginLayout />,
          children: [{ path: "", element: <LoginPage /> }],
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);
};

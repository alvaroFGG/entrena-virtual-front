import { Navigate, useRoutes } from "react-router-dom";
import OAuthPage from "./pages/oauth";
import LoginLayout from "./pages/login/layout";
import Layout from "./pages/layout";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

export const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "login",
          element: <LoginLayout />,
          children: [{ path: "", element: <LoginPage /> }],
        },
        {
          path: "",
          element: <HomePage />,
        },
      ],
    },
    { path: "oauth", element: <OAuthPage /> },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);
};

import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const LoginLayout = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default LoginLayout;

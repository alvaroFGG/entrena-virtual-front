import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function OAuthPage(): JSX.Element {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const isSignout = searchParams.get("signout") === "";

  useEffect(() => {
    const call = async (token: string) => {
      const authorization = await openSessionUseCase(token);
      if (authorization) navigate("/");
    };
    if (token) call(token);
    else if (isSignout) closeSessionUseCase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>Loading...</>;
}

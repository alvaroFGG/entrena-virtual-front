import { useForm } from "react-hook-form";
import "./login.css";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const { login, error, user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = (data: { email: string; password: string }) => {
    login(data.email, data.password);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-container__input">
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </div>

      <div className="login-container__input">
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </div>

      {error && <span>{error}</span>}

      <button>Login</button>
    </form>
  );
};

export default LoginPage;

import { useForm } from "react-hook-form";
import "./login.css";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const { login, error, loading } = useAuth();

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

      <button>{loading ? "Loading..." : "Login"}</button>
    </form>
  );
};

export default LoginPage;

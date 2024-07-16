import { useForm } from "react-hook-form";
import "./login.css";
import { useAuth } from "../../hooks/useAuth";
import { REGEX } from "../../types";

const LoginPage = () => {
  const { login, error, loading } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{
    email: string;
    password: string;
  }>();

  const watchedEmail = watch("email");

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
          id="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span id="required-email">This field is required</span>
        )}

        {watchedEmail && !REGEX.EMAIL.test(watchedEmail) && (
          <span id="incorrect-email">Invalid email</span>
        )}
      </div>

      <div className="login-container__input">
        <label htmlFor="">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span id="required-password">This field is required</span>
        )}
      </div>

      {error && <span id="error">{error}</span>}

      <button>{loading ? "Loading..." : "Login"}</button>
    </form>
  );
};

export default LoginPage;

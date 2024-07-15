import "./login.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-container__input">
        <label htmlFor="">Email</label>
        <input type="email" required placeholder="Email" />
      </div>

      <div className="login-container__input">
        <label htmlFor="">Password</label>
        <input type="password" required placeholder="Password" />
      </div>

      <button>Login</button>
    </div>
  );
};

export default LoginPage;

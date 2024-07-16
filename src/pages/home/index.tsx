import dayjs from "dayjs";
import { useAuth } from "../../hooks/useAuth";
import "./home.css";

const HomePage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="home-container">
      <span className="home-container__title">Private Panel</span>

      <span>Email: {user?.email}</span>

      <span>Birth Date: {dayjs(user?.birthDate).format("DD/MM/YYYY")}</span>

      <span>Age: {user?.age}</span>

      <button className="home-container__button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default HomePage;

import { useAuth } from "../../hooks/useAuth";
import "./home.css";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="home-container">
      <span className="home-container__title">Private Panel</span>

      <span>Email: {user?.email}</span>

      <span>Birth Date: {user?.birthDate}</span>

      <span>Age: {user?.age}</span>
    </div>
  );
};

export default HomePage;

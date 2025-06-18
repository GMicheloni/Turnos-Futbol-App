import { useContext } from "react";
import { TodoContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useContext(TodoContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>;
};

export default LogoutButton;

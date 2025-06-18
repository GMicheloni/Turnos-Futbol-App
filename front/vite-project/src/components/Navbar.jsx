import styles from "./Navbar.module.css";
import logo from "../assets/ChatGPT Image 27 abr 2025, 03_32_01.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../context/context"; // Importar el contexto

const Navbar = () => {
  const { user, setUser } = useContext(TodoContext);
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Registrarse</Link>
        </li>
        <li>
          <Link to="/turns">Mis turnos</Link>
        </li>

        {!user ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;

import styles from "./FormularioRegistro.module.css";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { TodoContext } from "../context/context";
const validateForm = (input) => {
  const error = {};
  if (!input.username.trim())
    error.username = "El nombre de usuario es obligatorio";
  if (input.password.length < 6)
    error.password = "La contraseña debe tener al menos 6 caracteres";

  return error;
};

const FormularioRegistro = () => {
  const { setUser } = useContext(TodoContext);
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const [errors, seterrors] = useState({});

  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(data);
    seterrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      alert(
        Object.values(validationErrors)
          .map((err) => `• ${err}`)
          .join("\n")
      );
    } else {
      try {
        const response = await axios.post("http://localhost:3000/login", data);
        setUser(response.data.user);
        alert("LOGUEADO CON EXITO");
      } catch (error) {
        alert("FALLO EN EL LOGUEO", error.response.data.message);
      }
    }
  };

  return (
    <div>
      <form className={styles} onSubmit={submitHandler}>
        <label>Nombre de Usuario:</label>
        <input type="text" name="username" onChange={changeHandler} />
        <label>Password:</label>
        <input type="password" name="password" onChange={changeHandler} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default FormularioRegistro;

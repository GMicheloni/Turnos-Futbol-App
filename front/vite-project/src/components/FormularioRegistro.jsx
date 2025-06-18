import styles from "./FormularioRegistro.module.css";
import { useState } from "react";
import axios from "axios";
const validateForm = (input) => {
  const error = {};

  if (!input.name.trim()) error.name = "El nombre es obligatorio";
  if (!input.email.includes("@")) error.email = "Email inválido";
  if (!input.birthdate.trim())
    error.birthdate = "La fecha de nacimiento es obligatoria";
  if (!/^\d{7,8}$/.test(input.dni)) error.dni = "DNI inválido";
  if (!input.username.trim())
    error.username = "El nombre de usuario es obligatorio";
  if (input.password.length < 6)
    error.password = "La contraseña debe tener al menos 6 caracteres";

  return error;
};

const FormularioRegistro = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    birthdate: "",
    dni: "",
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
        await axios.post("http://localhost:3000/register", data);
        alert("REGISTRADO CON EXITO");
      } catch (error) {
        alert("FALLO EN EL REGISTRO", error.response.data.message);
      }
    }
  };

  return (
    <div>
      <form className={styles} onSubmit={submitHandler}>
        <label>Nombre:</label>
        <input type="text" name="name" onChange={changeHandler} />
        <label>Email:</label>
        <input type="text" name="email" onChange={changeHandler} />
        <label>Fecha de nacimiento:</label>
        <input type="text" name="birthdate" onChange={changeHandler} />
        <label>Número de DNI:</label>
        <input type="text" name="dni" onChange={changeHandler} />
        <label>Nombre de Usuario:</label>
        <input type="text" name="username" onChange={changeHandler} />
        <label>Password:</label>
        <input type="password" name="password" onChange={changeHandler} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default FormularioRegistro;

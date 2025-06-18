import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Listadeturnos from "../components/Listadeturnos";
import axios from "axios";

const Turnos = () => {
  const [turns, setTurns] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/turns")
      .then((res) => setTurns(res.data).catch((error) => alert(error)));
  }, []);
  return (
    <div>
      <Navbar />
      <h1>Tus Turnos</h1>
      <Listadeturnos turns={turns}></Listadeturnos>
    </div>
  );
};

export default Turnos;

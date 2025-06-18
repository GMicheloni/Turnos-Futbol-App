import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Listadeturnos = () => {
  const { user, userturns, setUserturns } = useContext(TodoContext);
  const [newTurn, setNewTurn] = useState({ date: "", time: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("Debes loguearte para acceder a turnos");
      navigate("/login");
      return;
    }

    const fetchTurns = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${user.id}`
        );
        setUserturns(response.data.turns);
      } catch (error) {
        console.error("Error al obtener los turnos:", error);
      }
    };

    fetchTurns();
  }, [user, navigate, setUserturns]);

  const cancelTurn = async (turnId) => {
    const confirmar = window.confirm(
      "¿Estás seguro de que querés cancelar este turno?"
    );
    if (!confirmar) return;

    try {
      await axios.put(`http://localhost:3000/cancel/${turnId}`);
      setUserturns((prev) =>
        prev.map((turn) =>
          turn.id === turnId ? { ...turn, status: false } : turn
        )
      );
    } catch (error) {
      alert("No se pudo cancelar el turno");
    }
  };

  const handleInputChange = (e) => {
    setNewTurn({ ...newTurn, [e.target.name]: e.target.value });
  };

  const handleAddTurn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/schedule", {
        date: newTurn.date,
        time: newTurn.time,
        userId: user.id,
      });
      setUserturns([...userturns, response.data]); // actualiza lista local
      setNewTurn({ date: "", time: "" }); // limpia el formulario
    } catch (error) {
      alert("Error al agendar el turno");
    }
  };

  return (
    <div>
      <h2>Agendar nuevo turno</h2>
      <form onSubmit={handleAddTurn}>
        <input
          type="text"
          name="date"
          placeholder="Fecha"
          value={newTurn.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="time"
          placeholder="Hora"
          value={newTurn.time}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Agendar</button>
      </form>

      <h2>Mis turnos</h2>
      {userturns.length === 0 ? (
        <p>No hay turnos registrados.</p>
      ) : (
        <ul>
          {userturns.map((turn, index) => (
            <li key={index} style={{ color: turn.status ? "green" : "red" }}>
              <strong>{turn.date}</strong> a las <strong>{turn.time}</strong> -{" "}
              {turn.status ? "Activo" : "Inactivo"}
              {turn.status && (
                <button
                  onClick={() => cancelTurn(turn.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Cancelar
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listadeturnos;

import "./App.css";
import Home from "./views/Home";
import Turnos from "./views/Turnos";
import Register from "./views/Register";
import Login from "./views/Login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/turns" element={<Turnos />} />
      </Routes>
    </>
  );
}

export default App;

import { createContext, useState } from "react";

export const TodoContext = createContext({
  user: null,
  userturns: [],
  setUser: () => {},
  setUserturns: () => {},
  logout: () => {},
});

export const TodoProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userturns, setUserturns] = useState([]);

  const logout = () => {
    setUser(null);
    setUserturns([]);
  };

  return (
    <TodoContext.Provider
      value={{ user, setUser, userturns, setUserturns, logout }}
    >
      {children}
    </TodoContext.Provider>
  );
};

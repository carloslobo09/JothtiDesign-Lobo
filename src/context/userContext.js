import React, { useState, useEffect, createContext } from "react";
import { auth } from '../Firebase';
export const UserContext = createContext({ user: null });

export default ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) {
        const { displayName, email } = u;
        setUser({
          displayName,
          email,
        })
      } else {
        setUser(null)
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
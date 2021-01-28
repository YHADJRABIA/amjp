import React, { useState, createContext } from "react";
export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [Authenticated, setAuthenticated] = useState(false);
  return (
    <AuthContext.Provider value={Authenticated}>
      {props.children}
    </AuthContext.Provider>
  );
};

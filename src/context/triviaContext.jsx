import { createContext, useCallback } from "react";
import React from "react";
import { useState } from "react";
export const TriviaContext = createContext();

const { Provider } = TriviaContext;

export function TriviaContextProvider({ children }) {
  const [barActive, setBarActive] = useState(false);
  const [asserts, setAsserts] = useState(0);
  const [userName, setUserName] = useState("");
  return (
    <TriviaContext.Provider
      value={{
        barActive,
        setBarActive,
        asserts,
        setAsserts,
        userName,
        setUserName,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
}

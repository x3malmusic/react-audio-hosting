import React, { createContext, createRef } from "react";

export const Context = createContext(null);

export const RefProvider = ({ children }) => {
  const ref = createRef();

  return <Context.Provider value={ref}>{children}</Context.Provider>
};
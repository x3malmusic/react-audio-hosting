import React, { createContext, createRef } from "react";

export const PlayerRefContext = createContext(null);

export const RefProvider = ({ children }) => {
  const ref = createRef();

  return <PlayerRefContext.Provider value={ref}>{children}</PlayerRefContext.Provider>
};
import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // Add your state and functions here
  const [exampleState, setExampleState] = useState("Example");

  return (
    <AppContext.Provider value={{ exampleState, setExampleState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

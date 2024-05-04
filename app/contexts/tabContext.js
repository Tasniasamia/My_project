// app/contexts/tabContext.js
"use client";
import { createContext, useContext, useState } from "react";

// Create context
export const tabbar = createContext(undefined);

// Wrap the useState initialization in useEffect to ensure it runs only on the client side
const TabUser = ({ children }) => {
  // Initialize state
  const [tab, setTab] = useState("general");

  return <tabbar.Provider value={{ tab, setTab }}>{children}</tabbar.Provider>;
};

// Export the context provider component
export default TabUser;

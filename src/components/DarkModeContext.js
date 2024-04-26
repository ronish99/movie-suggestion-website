// DarkModeContext.js
import React, { createContext, useState } from "react";

// Create a context for dark mode
export const DarkModeContext = createContext();

// DarkModeProvider component to manage dark mode state
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Provide dark mode state and toggle function to children components
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

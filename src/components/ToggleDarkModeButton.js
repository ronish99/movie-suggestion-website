import React from "react";
import { useDarkMode } from "./DarkModeContext";

const ToggleDarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ToggleDarkModeButton;

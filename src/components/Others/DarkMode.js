import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

const DarkMode = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="theme-toggler">
      <input
        checked={!darkMode}
        onChange={() => toggleDarkMode((prevMode) => !prevMode)}
        id="dark-mode"
        className="dark-mode-checkbox"
        type="checkbox"
      />
      <label className="dark-mode-label" htmlFor="dark-mode">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default DarkMode;

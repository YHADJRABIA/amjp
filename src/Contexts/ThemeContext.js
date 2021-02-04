import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  // Thème favori contenu dans local storage.
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Récupère le thème favori s'il existe.
  function getInitialMode() {
    const isReturningUser = "dark" in localStorage; // Retourne vrai si l'utilisateur a déjà visité le site.
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme(); // Récupère le thème favori.

    // Si thème enregistré ► le retourne, sinon retourne la préfèrence générale de l'utilisateur sur le navigateur.
    return isReturningUser ? savedMode : userPrefersDark ? true : false;
  }

  // Évalue la préférence de l'utilisateur.
  function getPrefColorScheme() {
    return !window.matchMedia
      ? null
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

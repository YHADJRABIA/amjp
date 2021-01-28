import React, { useState, useContext } from "react";

/* Contexts */
import { DataContext } from "../Contexts/DataContext";
import { ThemeContext } from "../Contexts/ThemeContext";

/* Traduction */
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const { footerMenu, socialMedia } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  return (
    <footer className={darkMode ? "dark-mode" : ""} role="contentinfo">
      <ul className="footer-menu">
        {footerMenu.map((element) => (
          <li key={element.id}>
            <a href={element.path} title={element.name}>
              {element.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-media">
        {socialMedia.map((element) => (
          <li key={element.id}>
            <a href={element.path}>
              <i
                style={{ color: element.colour }}
                className={element.icon}
                title={element.name}
                key={element.id}
              ></i>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

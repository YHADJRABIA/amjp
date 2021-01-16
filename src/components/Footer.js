import React, { useState, useContext } from "react";
import { DataContext } from "../components/Context/DataContext";
import { useTranslation } from "react-i18next"; // Translation module
const Footer = () => {
  const content = useContext(DataContext);
  const { t, i18n } = useTranslation();

  return (
    <footer>
      <div className="footer-content">
        <ul className="footer-menu">
          {content.footerMenu.map((element) => (
            <li key={element.id}>
              <a href={element.path} title={element.name}>
                {element.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="social-media">
          {content.socialMedia.map((element) => (
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
      </div>
    </footer>
  );
};

export default Footer;

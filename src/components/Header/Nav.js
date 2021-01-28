import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

/* Composants */
import DarkMode from "../Others/DarkMode";

/* Ressources*/
import logo from "../img/logo.jpg";

/* Contexts */
import { ThemeContext } from "../../Contexts/ThemeContext";

const Nav = ({ socialMedia, radioTVReplay, account, navMenu, i18n }) => {
  // Dark mode
  const { darkMode } = useContext(ThemeContext);

  /*-- Changement de langue --*/
  const changeLanguage = (ln) => {
    return () => i18n.changeLanguage(ln);
  };

  /* Menu déroulant */
  const [isToggled, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!isToggled);
  };

  return (
    <nav className={darkMode ? "dark-mode" : ""} role="navigation">
      {/* Nav supérieure */}
      <div className="nav-top">
        <ul className="social-media">
          {socialMedia.map((el) => (
            <li key={el.id}>
              <a href={el.path} target="_blank" rel="noopener noreferrer">
                <i
                  style={{ color: el.colour }}
                  className={el.icon}
                  title={el.name}
                  key={el.id}
                ></i>
              </a>
            </li>
          ))}
        </ul>
        <ul className="radio-tv-replay">
          {radioTVReplay.map((el) => (
            <li key={el.id}>
              <Link to={`/${el.path}`} title={el.name} key={el.id}>
                {el.name}
              </Link>
            </li>
          ))}
        </ul>

        <DarkMode />

        {/* Accès au compte/Inscription */}
        <ul className="account">
          {account.map((el) => (
            <li key={el.id}>
              <Link to="/account" title={el.name}>
                <button>{el.name}</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Nav inférieure */}
      <div className="nav-bottom">
        <img
          className="SIP-logo shake-rotate"
          alt="logo"
          title="Logo Shake it Play"
          src={logo}
        ></img>

        <ul className="nav-menu">
          {navMenu.map((el) => (
            <li key={el.id}>
              <Link to={`/${el.path}`} title={el.name} key={el.id}>
                {el.name}
              </Link>
            </li>
          ))}
          <li className="search">
            <i className="fas fa-search" title="Filter"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

{
  /*<ul className="nav-links">
                {navTitles.map((navTitle) => (
          <Link to={"/" + navTitle.path} key={navTitle.id}>
          <li key={navTitle.id}>
            <a href={navTitle.path} title={navTitle.name} key={navTitle.id}>
              {navTitle.name}
            </a>
          </li>
          </Link>
        ))} 
      </ul>*/
}

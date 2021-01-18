import React, { useState } from "react";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";

const Nav = ({ socialMedia, radioTVReplay, myAccount, navMenu, i18n }) => {
  const [isToggled, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!isToggled);
  };

  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };

  return (
    <nav>
      {/* Nav supérieure */}
      <div className="nav-top">
        <ul className="social-media">
          {socialMedia.map((element) => (
            <li key={element.id}>
              <a href={element.path} target="_blank" rel="noopener noreferrer">
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
        <ul className="radio-tv-replay">
          {radioTVReplay.map((element) => (
            <li key={element.id}>
              <Link
                to={`/${element.path}`}
                title={element.name}
                key={element.id}
              >
                {element.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Accès au compte/Inscription */}
        <ul className="account">
          <li>
            <Link to="/account" title={myAccount.name}>
              <button className="shake">{myAccount.name}</button>
            </Link>
          </li>
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
          {navMenu.map((element) => (
            <li key={element.id}>
              <Link
                to={`/${element.path}`}
                title={element.name}
                key={element.id}
              >
                {element.name}
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

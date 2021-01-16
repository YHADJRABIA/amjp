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
      <div className="nav-top">
        <div className="nav-top-content">
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
          <ul className="radio-tv-replay">
            {radioTVReplay.map((element) => (
              <li key={element.id}>
                <a href={element.path} title={element.name} key={element.id}>
                  {element.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="account">
            <li>
              <a href={myAccount.path} title={myAccount.name}>
                <button className="shake">{myAccount.name}</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="nav-bottom-content">
          <img
            className="SIP-logo shake-rotate"
            alt="logo"
            title="Logo Shake it Play"
            src={logo}
          ></img>

          <ul className="nav-menu">
            {navMenu.map((element) => (
              <li key={element.id}>
                <a href={element.path} title={element.name}>
                  {element.name}
                </a>
              </li>
            ))}
            <li className="search">
              <i className="fas fa-search" title="Filter"></i>
            </li>
          </ul>
        </div>
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

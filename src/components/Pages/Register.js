import React, { useState, useRef, useContext } from "react";
import { useHistory, Link } from "react-router-dom";

/* Contexts */
import { DataContext } from "../../Contexts/DataContext";
import { ThemeContext } from "../../Contexts/ThemeContext";

/* Traduction */
import { useTranslation } from "react-i18next";

/* Communication API */
import Axios from "axios";

const Register = () => {
  const { darkMode } = useContext(ThemeContext);
  const { footerMenu, socialMedia } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  // Requête POST vers Backend
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const clickHandler = () => {
    // Email format validator
    console.log(`${userName} ${password}`);
    if ((userName || userEmail) && password) {
      Axios.post("http://localhost:5000/user", {
        userName: userName,
        userEmail: userEmail,
        password: password,
      });
    } else {
      console.log("Complete all fields");
    }
  };
  return (
    <main className="form-container">
      <form className="register-form">
        <h2 className="form-title">Inscription</h2>

        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="nom d'utilisateur"
            required
            autoComplete="username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            name="username"
            id="username"
          />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            placeholder="e-mail"
            required
            autoComplete="off"
            onChange={(event) => {
              setUserEmail(event.target.value);
            }}
            name="email"
            id="e-mail"
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="mot de passe"
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            name="password"
            id="password"
          />
        </div>

        <button className="btn btn-primary" onClick={clickHandler}>
          S'inscrire
        </button>
        <p className="social-register"> Ou s'inscrire via :</p>
        <ul className="social-media">
          <li className="social-media-icon">
            <i className="fab fa-google"></i>
          </li>
          <li className="social-media-icon">
            <i className="fab fa-linkedin"></i>
          </li>
        </ul>
        <div className="redirect-login">
          <p>{i18n.t("login-redirect.title")}</p>
          <Link to={`/login`} title="Login">
            {i18n.t("login-redirect.link")}
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Register;

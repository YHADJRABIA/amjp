import React, { useState, useContext } from "react";
import { DataContext } from "../components/Context/DataContext";
/* import About from "./Main/About"; */
import { useTranslation } from "react-i18next"; // Translation module

const Main = () => {
  const content = useContext(DataContext);
  const { t, i18n } = useTranslation();
  return <main></main>;
};

export default Main;

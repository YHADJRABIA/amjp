import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import Nav from "./Header/Nav";
import { useTranslation } from "react-i18next";

const Header = () => {
  const content = useContext(DataContext);
  const { t, i18n } = useTranslation();
  return (
    <header>
      <Nav
        socialMedia={content.socialMedia}
        radioTVReplay={content.radioTVReplay}
        account={content.account}
        navMenu={content.navMenu}
      />
    </header>
  );
};

export default Header;

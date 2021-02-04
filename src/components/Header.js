import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import Nav from "./Header/Nav";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { socialMedia, radioTVReplay, account, navMenu } = useContext(
    DataContext
  );
  const { t, i18n } = useTranslation();
  return (
    <header>
      <Nav
        socialMedia={socialMedia}
        radioTVReplay={radioTVReplay}
        account={account}
        navMenu={navMenu}
      />
    </header>
  );
};

export default Header;

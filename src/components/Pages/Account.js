import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { DataContext } from "../../Contexts/DataContext";
import { useTranslation } from "react-i18next";

const Account = () => {
  const { myAccountSubtitles } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  return (
    <main className="myAccount-page">
      <h1>{i18n.t("myAccount.title")}</h1>
      <ul className="myAccount-subtitles">
        {myAccountSubtitles.map((el) => (
          <li key={el.id}>
            <p>{el.name}</p>
          </li>
        ))}
      </ul>
      <form id="myAccount-update-name"></form>
    </main>
  );
};

export default withRouter(Account);

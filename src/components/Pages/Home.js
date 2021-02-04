import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import poster from "../../Resources/poster.jpg";

import { DataContext } from "../../Contexts/DataContext";

// Traduction
import { useTranslation } from "react-i18next";

const Home = () => {
  const {homePage} = useContext(DataContext);
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="hero-banner">
        <div className="hero-content">
{/*         <img src="https://occhimagazine.com/wp-content/uploads/2018/02/RaidersPoster-1024x496.jpg" alt="test" className="hero-img"/>
 */}          <div className="hero-logo">
            <h4 className="inedit">Inedit</h4>
            <h4>(logo -12)</h4>
          </div>
          <h1>Teen spirit</h1>
          <Link to={`/`} title="regarder">
            <button className="button-primary">Regarder</button>
          </Link>
          <div></div>
        </div>
      </div>

      <section className="home-videos">
      {homePage.map((el) => (
        <article className={el.class} id={el.id}>
        <div className={`${el.name}-titles`}>
          <h3>{el.name}</h3>
          <span>{i18n.t("homePage.seeMore")}</span>
        </div>
        <div className={`${el.name}-content`}>
          <div className={`${el.name}-item`}></div>
          <div className={`${el.name}-item`}></div>
          <div className={`${el.name}-item`}></div>
          <div className={`${el.name}-item`}></div>
        </div>
      </article>
      ))}
        

        <Link to={`/`} title={i18n.t("homePage.seeAll")}>
          <button className="button-primary">{i18n.t("homePage.seeAll")}</button>
        </Link>
      </section>
    </>
  );
};

export default Home;

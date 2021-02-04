import React, { useState, createContext } from "react";
import { useTranslation } from "react-i18next";

/*To be imported by components that want to access the data.
The components need to also import { useContext} from react to consume the data.*/
export const DataContext = createContext();

// Contient les données. Doit être importé par App.js.
export const DataProvider = ({ children }) => {
  const { t, i18n } = useTranslation();

  const content = {
    // Partie générale

    languages: [
      { name: i18n.t("languages.en"), code: "en", flag: "gb", id: 1 },
      { name: i18n.t("languages.fr"), code: "fr", flag: "fr", id: 2 },
    ],

    // Nav du haut
    socialMedia: [
      {
        name: "Facebook",
        path: "https://www.facebook.com/AMJP.officiel/",
        icon: "fab fa-facebook-square",
        colour: "#4267B2",
        id: 1,
      },
      {
        name: "Twitter",
        path: "https://twitter.com/amjpofficiel/",
        icon: "fab fa-twitter-square",
        colour: "#1DA1F2",
        id: 2,
      },
      {
        name: "Instagram",
        path: "https://www.instagram.com/amjp.officiel/",
        icon: "fab fa-instagram-square",
        colour: "#000",
        id: 3,
      },
      {
        name: "Youtube",
        path: "",
        icon: "fab fa-youtube",
        colour: "#FF0000",
        id: 4,
      },
    ],

    radioTVReplay: [
      { name: i18n.t("navTop.radio"), path: "radio", id: 1 },
      { name: i18n.t("navTop.tv"), path: "tv", id: 2 },
      { name: i18n.t("navTop.replay"), path: "replay", id: 3 },
    ],

    account: [
      { name: i18n.t("myAccount.title"), path: "account", id: 1 },
      /*       { name: i18n.t("login"), path: "login", id: 2 },
      { name: i18n.t("registration"), path: "registration", id: 3 }, */
    ],

    // Nav du bas
    navMenu: [
      { name: i18n.t("navMenu.home"), path: "home", id: 1 },
      { name: i18n.t("navMenu.series"), path: "series", id: 2 },
      { name: i18n.t("navMenu.documentary"), path: "documentary", id: 3 },
      { name: i18n.t("navMenu.art-of-living"), path: "art-of-living", id: 4 },
      { name: i18n.t("navMenu.magazines"), path: "magazine", id: 5 },
      { name: i18n.t("navMenu.interviews"), path: "interview", id: 6 },
      { name: i18n.t("navMenu.podcasts"), path: "podcast", id: 7 },
      { name: i18n.t("navMenu.contact"), path: "contact", id: 8 },
    ],

    // Footer
    footerMenu: [
      { name: i18n.t("footerMenu.listen"), path: "listen", id: 1 },
      { name: i18n.t("footerMenu.watch"), path: "watch", id: 2 },
      {
        name: i18n.t("footerMenu.shakeItRadio"),
        path: "shake-it-radio",
        id: 3,
      },
      { name: i18n.t("footerMenu.shakeItTV"), path: "shake-it-tv", id: 4 },
      { name: i18n.t("footerMenu.fulaAssos"), path: "fula-assos", id: 5 },
      { name: i18n.t("footerMenu.legal"), path: "legal", id: 6 },
      { name: i18n.t("footerMenu.contactUs"), path: "contact", id: 7 },
      { name: i18n.t("footerMenu.ads"), path: "contact", id: 8 },
      {
        name: i18n.t("footerMenu.confidentiality"),
        path: "confidentiality",
        id: 9,
      },
      { name: i18n.t("footerMenu.cgu"), path: "cgu", id: 10 },
    ],

    // Page d'accueil
    homePage:[
      { name: i18n.t("homePage.series"), class: "series", id: 1 },
      { name: i18n.t("homePage.documentary"), class: "documentary", id: 2 },
      { name: i18n.t("homePage.interviews"), class: "interviews", id: 3 },
    ],

    // Partie « Mon compte »
    myAccountSubtitles: [
      { name: i18n.t("myAccount.summary"), path: "account", id: 1 },
      { name: i18n.t("myAccount.updateData"), path: "", id: 2 },
      { name: i18n.t("myAccount.logout"), path: "", id: 3 },
    ],
  };

  /* 
  Passing the data to other components, we could list these components one by one but props.children is more efficient as it auto-selects all
  the children wrapped by <DataProvider> </DataProvider> in App.js.
  Passing navTitles as a value to be consumed by Nav.js
  */
  return (
    <DataContext.Provider value={content} translation={(t, i18n)}>
      {children}
    </DataContext.Provider>
  );
};

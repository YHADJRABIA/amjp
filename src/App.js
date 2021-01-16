import React, { useState, useEffect } from "react";
import "./styles/app.scss";

/* Fixed elements */
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

/* Pages */
import Home from "./components/Pages/Home";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import Account from "./components/Pages/Account";

import i18n from "./i18n/i18n"; // Translating content
import Loading from "./components/Others/Loading";
import { DataProvider } from "./components/Context/DataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  // Executes when the component has finished rendering
  /*   useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loading />;
  else */
  return (
    <>
      {/* Passes data to all wrapped components. */}
      <DataProvider>
        {/* Enables routing with all wrapped components. */}
        <Header />
        <Main />
        <Footer />
      </DataProvider>
      <Router>
        {/* Enables the rendering of one component only. */}
        <Switch>
          <Route path={["/", "/home"]} exact component={Home}></Route>
          <Route path={["/registration"]} exact component={Register}></Route>
          <Route path={["/login"]} exact component={Login}></Route>
          <Route path={["/account"]} exact component={Account}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
